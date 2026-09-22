export type PageIdentity = {
    className: string;
    accent: string;
    soft: string;
    mode: 'editorial' | 'specimen' | 'field' | 'laboratory' | 'data';
};

const identities: Record<string, PageIdentity> = {
    '/about': { className: 'identity-about', accent: '#a51c30', soft: '#f4e7e5', mode: 'editorial' },
    '/collection': { className: 'identity-collection', accent: '#c27a29', soft: '#f6ecd9', mode: 'specimen' },
    '/collection/african-rice': { className: 'identity-african', accent: '#b75d2a', soft: '#f7eadc', mode: 'specimen' },
    '/collection/asian-rice': { className: 'identity-asian', accent: '#287c78', soft: '#e2f1ef', mode: 'specimen' },
    '/collection/interspecifics': { className: 'identity-inter', accent: '#6b4a8b', soft: '#eee7f4', mode: 'specimen' },
    '/collection/wild-relatives': { className: 'identity-wild', accent: '#426b42', soft: '#e6efe2', mode: 'field' },
    '/what-we-do/acquisition': { className: 'identity-acquisition', accent: '#9b5a32', soft: '#f4e8dc', mode: 'field' },
    '/what-we-do/conservation': { className: 'identity-conservation', accent: '#23627a', soft: '#e2eef2', mode: 'field' },
    '/what-we-do/regeneration': { className: 'identity-regeneration', accent: '#697b27', soft: '#edf0d8', mode: 'field' },
    '/what-we-do/characterization': { className: 'identity-characterization', accent: '#b14d68', soft: '#f5e5eb', mode: 'laboratory' },
    '/what-we-do/distribution': { className: 'identity-distribution', accent: '#3b5a8c', soft: '#e5ebf5', mode: 'editorial' },
    '/what-we-do': { className: 'identity-operations', accent: '#5c6d37', soft: '#e9eedf', mode: 'field' },
    '/what-we-do/data-management': { className: 'identity-data-management', accent: '#39706c', soft: '#e3efed', mode: 'data' },
    '/what-we-do/safety-duplication': { className: 'identity-safety', accent: '#68727b', soft: '#e9edef', mode: 'laboratory' },
    '/research/genomics': { className: 'identity-genomics', accent: '#344b76', soft: '#e4e9f4', mode: 'laboratory' },
    '/research': { className: 'identity-research', accent: '#3a527a', soft: '#e5ebf4', mode: 'laboratory' },
    '/research/quality-control': { className: 'identity-quality', accent: '#8b4a55', soft: '#f2e5e7', mode: 'laboratory' },
    '/research/sub-setting': { className: 'identity-subsetting', accent: '#6b5c92', soft: '#ece8f5', mode: 'data' },
    '/data': { className: 'identity-data', accent: '#246f78', soft: '#e0eff0', mode: 'data' },
    '/data/characterization': { className: 'identity-data-characterization', accent: '#a05271', soft: '#f3e5eb', mode: 'data' },
    '/data/genomics': { className: 'identity-data-genomics', accent: '#385b91', soft: '#e4eaf5', mode: 'data' },
    '/data/subsets': { className: 'identity-data-subsets', accent: '#7b6930', soft: '#f2eddc', mode: 'data' },
    '/publications': { className: 'identity-publications', accent: '#8a3f50', soft: '#f3e5e8', mode: 'editorial' },
    '/request-germplasm': { className: 'identity-request', accent: '#2e6f59', soft: '#e2efe8', mode: 'editorial' },
    '/contact': { className: 'identity-contact', accent: '#376987', soft: '#e4eef4', mode: 'editorial' },
    '/survey': { className: 'identity-survey', accent: '#a05f31', soft: '#f5e9dc', mode: 'data' },
};

export const defaultIdentity: PageIdentity = { className: 'identity-default', accent: '#285b4b', soft: '#e4eee4', mode: 'editorial' };

export function getPageIdentity(route: string) {
    return identities[route] ?? defaultIdentity;
}