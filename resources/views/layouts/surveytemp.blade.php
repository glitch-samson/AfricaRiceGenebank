<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'CGIAR Genebank Survey')</title>
    <link rel="icon" type="image/svg+xml" href="{{ asset('Logo_CG-Genebank0.ico') }}">
    <!-- Local fallback stylesheet: loaded first so the page is readable even if CDNs fail -->
    <link rel="stylesheet" href="{{ asset('files/cgiarsurvey/css/app.css') }}">
    <!-- Tailwind CDN for utility classes -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
    <style>
        :root {
            --cgiar-green: #3d7a3d;
            --cgiar-green-light: #5a9e5a;
            --deep-blue: #1a2a4a;
            --warm-gold: #c9a84c;
            --warm-gold-light: #e8d49a;
            --cream: #faf8f5;
            --stone: #f0ede8;
        }
        body { font-family: 'Inter', sans-serif; background-color: var(--cream); color: #1a1a1a; }
        .font-display { font-family: 'Playfair Display', serif; }
        .text-cgiar-green { color: var(--cgiar-green); }
        .bg-cgiar-green { background-color: var(--cgiar-green); }
        .bg-cgiar-green-light { background-color: var(--cgiar-green-light); }
        .text-deep-blue { color: var(--deep-blue); }
        .bg-deep-blue { background-color: var(--deep-blue); }
        .text-warm-gold { color: var(--warm-gold); }
        .bg-warm-gold { background-color: var(--warm-gold); }
        .bg-cream { background-color: var(--cream); }
        .bg-stone { background-color: var(--stone); }
        .border-cgiar-green { border-color: var(--cgiar-green); }
        .border-warm-gold { border-color: var(--warm-gold); }
        .section-card {
            background: white;
            border-radius: 16px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .section-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.06), 0 16px 40px rgba(0,0,0,0.08);
        }
        .progress-bar { height: 4px; background: #e5e5e5; border-radius: 2px; overflow: hidden; }
        .progress-fill { height: 100%; background: var(--cgiar-green); transition: width 0.4s ease; }
        .btn-primary {
            background: var(--cgiar-green);
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-weight: 500;
            transition: all 0.2s ease;
        }
        .btn-primary:hover { background: var(--cgiar-green-light); transform: translateY(-1px); }
        .btn-secondary {
            background: white;
            color: var(--deep-blue);
            border: 1px solid #e5e5e5;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-weight: 500;
            transition: all 0.2s ease;
        }
        .btn-secondary:hover { background: var(--stone); border-color: var(--warm-gold); }
        .question-label { font-weight: 600; color: var(--deep-blue); font-size: 1.05rem; line-height: 1.5; }
        .question-subtext { color: #666; font-size: 0.9rem; margin-top: 0.25rem; }
        .option-card {
            border: 1.5px solid #e5e5e5;
            border-radius: 10px;
            padding: 0.75rem 1rem;
            cursor: pointer;
            transition: all 0.15s ease;
        }
        .option-card:hover { border-color: var(--cgiar-green); background: #f8faf8; }
        .option-card.selected { border-color: var(--cgiar-green); background: #f0f7f0; }
        .matrix-cell { text-align: center; padding: 0.5rem; }
        .matrix-header { font-weight: 600; color: var(--deep-blue); font-size: 0.85rem; }
        .ranking-select { width: 60px; padding: 0.4rem; border-radius: 6px; border: 1.5px solid #ddd; text-align: center; }
        .longtext-input {
            width: 100%; min-height: 120px; padding: 0.75rem;
            border: 1.5px solid #e5e5e5; border-radius: 10px;
            font-family: inherit; font-size: 0.95rem;
            transition: border-color 0.2s ease;
        }
        .longtext-input:focus { outline: none; border-color: var(--cgiar-green); }
        .text-input {
            width: 100%; padding: 0.6rem 0.875rem;
            border: 1.5px solid #e5e5e5; border-radius: 8px;
            font-size: 0.95rem; transition: border-color 0.2s ease;
        }
        .text-input:focus { outline: none; border-color: var(--cgiar-green); }
        .validation-error { color: #dc2626; font-size: 0.85rem; margin-top: 0.25rem; }
        .hero-gradient {
            background: linear-gradient(135deg, var(--deep-blue) 0%, #2a4a6a 50%, var(--cgiar-green) 100%);
        }
        .section-banner {
            background: linear-gradient(135deg, var(--deep-blue) 0%, #2a4a6a 100%);
            color: white;
            padding: 2rem;
            border-radius: 16px 16px 0 0;
        }
        .fade-in { animation: fadeIn 0.4s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    </style>
    @stack('styles')
</head>
<body class="min-h-screen bg-cream">
    @yield('content')
    @stack('scripts')
</body>
</html>
