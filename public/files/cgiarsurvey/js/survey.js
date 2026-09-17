// CGIAR Genebank Survey — module-by-module navigation (vanilla JS, progressive enhancement).
//
// Reliability rules honoured here:
//  * No Alpine, no x-show/x-cloak, no AJAX, no draft saving.
//  * The form posts natively to route('survey.submit'); this script never preventDefaults submit.
//  * All modules stay in the DOM. CSS only hides inactive modules AFTER we add the
//    `js-enabled` class to <html> at the very end of a successful init(). If this script
//    fails to load or throws, that class is never added, so every module remains visible
//    and the survey is still fully usable and submittable without JavaScript.

(function () {
    'use strict';

    function init() {
        var form = document.getElementById('surveyForm');
        var modules = Array.prototype.slice.call(document.querySelectorAll('.survey-module'));
        if (!form || modules.length === 0) {
            return; // graceful fallback: leave all modules visible
        }

        var total = modules.length; // 6 content modules + 1 review/submit step
        var sectionCount = 0;
        modules.forEach(function (m) {
            if (m.getAttribute('data-final') !== 'true') { sectionCount++; }
        });

        var current = 0;
        var labelEl = document.getElementById('moduleProgressLabel');
        var titleEl = document.getElementById('moduleProgressTitle');
        var fillEl = document.getElementById('moduleProgressFill');
        var topAnchor = document.getElementById('surveyTop');
        var tocLinks = Array.prototype.slice.call(document.querySelectorAll('[data-toc-link]'));

        function updateProgress() {
            var m = modules[current];
            var isFinal = m.getAttribute('data-final') === 'true';
            if (labelEl) {
                labelEl.textContent = isFinal
                    ? 'Review & Submit'
                    : ('Module ' + (current + 1) + ' of ' + sectionCount);
            }
            if (titleEl) {
                titleEl.textContent = m.getAttribute('data-module-title') || '';
            }
            if (fillEl) {
                fillEl.style.width = (((current + 1) / total) * 100) + '%';
            }
            tocLinks.forEach(function (link) {
                link.classList.toggle('is-active', parseInt(link.getAttribute('data-module-index'), 10) === current);
            });
        }

        function show(index) {
            if (index < 0 || index >= total) { return; }
            for (var i = 0; i < modules.length; i++) {
                modules[i].classList.toggle('is-active', i === index);
            }
            current = index;
            updateProgress();
            if (modules[index].getAttribute('data-final') === 'true') {
                buildSummary();
            }
            scrollToTop();
        }

        function scrollToTop() {
            try {
                if (topAnchor && topAnchor.scrollIntoView) {
                    topAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            } catch (e) {
                window.scrollTo(0, 0);
            }
        }

        // Validate only the fields in the CURRENT module using native browser validation.
        // Hidden fields in other modules are never checked here, so navigation is not
        // blocked by them. The backend remains the source of truth on final submit.
        function validateCurrent() {
            var fields = modules[current].querySelectorAll('input, select, textarea');
            for (var i = 0; i < fields.length; i++) {
                var f = fields[i];
                if (f.willValidate && !f.checkValidity()) {
                    f.reportValidity();
                    return false;
                }
            }
            return true;
        }

        // Wire up Previous / Next buttons (all are type="button", so they never submit).
        modules.forEach(function (m) {
            var nextBtn = m.querySelector('[data-next]');
            var prevBtn = m.querySelector('[data-prev]');
            if (nextBtn) {
                nextBtn.addEventListener('click', function () {
                    if (validateCurrent()) { show(current + 1); }
                });
            }
            if (prevBtn) {
                prevBtn.addEventListener('click', function () {
                    show(current - 1);
                });
            }
        });

        // In JS (single-module) mode, disable native full-form validation so that a
        // required field hidden in another module can never silently block the final
        // submit ("an invalid form control is not focusable"). Per-module validateCurrent()
        // plus the backend keep validation intact.
        form.setAttribute('novalidate', 'novalidate');

        // Expose a safe helper so the error-summary links can reveal the module that
        // contains a given question card.
        window.showSurveyModuleByElement = function (moduleElement) {
            var index = modules.indexOf(moduleElement);
            if (index >= 0) { show(index); }
        };

        // Make every error-summary link open the right module, scroll to the question,
        // highlight it briefly and focus its first input. Falls back to a normal anchor
        // jump if the target/module can't be resolved.
        function revealError(targetId) {
            var target = document.getElementById(targetId);
            if (!target) { return false; }
            var moduleEl = target.closest ? target.closest('.survey-module') : null;
            if (moduleEl) { window.showSurveyModuleByElement(moduleEl); }
            setTimeout(function () {
                try {
                    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } catch (e) {
                    target.scrollIntoView();
                }
                target.classList.add('question-error-highlight');
                var focusable = target.querySelector('input, select, textarea, button');
                if (focusable) {
                    try { focusable.focus({ preventScroll: true }); } catch (e) { focusable.focus(); }
                }
                setTimeout(function () {
                    target.classList.remove('question-error-highlight');
                }, 2500);
            }, 150);
            return true;
        }

        // --- Module links / table of contents -----------------------------------
        // Each link carries data-module-index. In JS mode we intercept the click and
        // switch to that module instead of letting the browser jump to a hidden anchor
        // (which previously left the page stuck at the top / "the beginning").
        tocLinks.forEach(function (link) {
            link.addEventListener('click', function (event) {
                var idx = parseInt(link.getAttribute('data-module-index'), 10);
                if (isNaN(idx)) { return; } // fall back to native anchor
                event.preventDefault();
                show(idx);
            });
        });

        // --- Review summary ------------------------------------------------------
        function escapeHtml(s) {
            return String(s).replace(/[&<>"']/g, function (c) {
                return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
            });
        }

        // Returns the answer for a question as a string, an array (matrix/ranking
        // multi-line), or null when unanswered. Reads live values via FormData so the
        // exact field names (including spaces in matrix rows) match reliably.
        function answerFor(q, fd) {
            var base = 'answers[' + q.id + ']';
            if (q.type === 'text' || q.type === 'email' || q.type === 'longtext') {
                var v = (fd.get(base) || '').trim();
                return v || null;
            }
            if (q.type === 'single') {
                var sv = fd.get(base);
                if (sv == null || sv === '') { return null; }
                var label = q.options[sv] || sv;
                if (sv === 'other') {
                    var so = (fd.get('answers[' + q.id + '_other]') || '').trim();
                    if (so) { label += ': ' + so; }
                }
                return label;
            }
            if (q.type === 'multi') {
                var arr = fd.getAll(base + '[]').filter(function (x) { return x !== ''; });
                if (!arr.length) { return null; }
                return arr.map(function (val) {
                    var l = q.options[val] || val;
                    if (val === 'other') {
                        var mo = (fd.get('answers[' + q.id + '_other]') || '').trim();
                        if (mo) { l += ': ' + mo; }
                    }
                    return l;
                });
            }
            if (q.type === 'matrix') {
                var rows = [];
                (q.rows || []).forEach(function (row) {
                    var c = fd.get(base + '[' + row + ']');
                    if (c != null && c !== '') { rows.push(row + ': ' + c); }
                });
                return rows.length ? rows : null;
            }
            if (q.type === 'ranking') {
                var ranked = [];
                Object.keys(q.options || {}).forEach(function (val) {
                    var r = fd.get(base + '[' + val + ']');
                    if (r != null && r !== '') { ranked.push({ label: q.options[val] || val, rank: parseInt(r, 10) }); }
                });
                if (!ranked.length) { return null; }
                ranked.sort(function (a, b) { return a.rank - b.rank; });
                return ranked.map(function (x) { return x.rank + '. ' + x.label; });
            }
            return null;
        }

        function buildSummary() {
            var container = document.getElementById('reviewSummary');
            if (!container || !window.SURVEY_META) { return; }
            var fd = new FormData(form);
            var html = '';
            window.SURVEY_META.forEach(function (section) {
                html += '<div class="review-group">';
                html += '<div class="review-group-head">'
                      + '<h4>' + escapeHtml(section.title) + '</h4>'
                      + '<button type="button" class="review-edit" data-edit-module="' + section.index + '">Edit</button>'
                      + '</div>';
                html += '<dl class="review-list">';
                section.questions.forEach(function (q) {
                    var ans = answerFor(q, fd);
                    var label = (q.number ? escapeHtml(q.number) + '. ' : '') + escapeHtml(q.text);
                    html += '<dt>' + label + '</dt>';
                    if (ans == null) {
                        html += '<dd class="review-empty">Not answered</dd>';
                    } else if (Array.isArray(ans)) {
                        html += '<dd><ul>' + ans.map(function (x) { return '<li>' + escapeHtml(x) + '</li>'; }).join('') + '</ul></dd>';
                    } else {
                        html += '<dd>' + escapeHtml(ans) + '</dd>';
                    }
                });
                html += '</dl></div>';
            });
            container.innerHTML = html;
            container.querySelectorAll('[data-edit-module]').forEach(function (btn) {
                btn.addEventListener('click', function () {
                    show(parseInt(btn.getAttribute('data-edit-module'), 10));
                });
            });
        }

        var errorLinks = Array.prototype.slice.call(document.querySelectorAll('.error-link'));
        errorLinks.forEach(function (link) {
            link.addEventListener('click', function (event) {
                var targetId = link.getAttribute('data-error-target');
                var target = document.getElementById(targetId);
                if (!target) { return; } // let the browser handle the anchor normally
                event.preventDefault();
                revealError(targetId);
            });
        });

        // Decide which module to show first. After a failed submit, open the module that
        // contains the first error so it is ready, but leave the page scrolled to the
        // error summary at the top rather than jumping straight to the question.
        var initialIndex = 0;
        if (errorLinks.length > 0) {
            var firstTarget = document.getElementById(errorLinks[0].getAttribute('data-error-target'));
            var firstModule = firstTarget && firstTarget.closest ? firstTarget.closest('.survey-module') : null;
            var firstModuleIndex = firstModule ? modules.indexOf(firstModule) : -1;
            if (firstModuleIndex >= 0) { initialIndex = firstModuleIndex; }
        }

        show(initialIndex);

        // After a failed submit, keep the error summary in view (top) instead of the
        // smooth-scroll-to-top that show() performs for normal navigation.
        if (errorLinks.length > 0) {
            var summary = document.getElementById('surveyErrorSummary');
            if (summary) {
                try { summary.scrollIntoView({ behavior: 'auto', block: 'start' }); }
                catch (e) { window.scrollTo(0, 0); }
            }
        }

        // Only now do we activate single-module CSS. If anything above threw, we never
        // reach here and all modules stay visible.
        document.documentElement.classList.add('js-enabled');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
