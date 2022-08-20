<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @if(!App::isLocale('en')) dir="rtl" @endif>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Fonts -->
  <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">
  <link rel="stylesheet" type="text/css"
    href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css" />

  <!-- Scripts -->
  @routes
  @viteReactRefresh
  @vite('resources/src/app.tsx')
  @inertiaHead
</head>

<body class="font-sans antialiased">
  @inertia
</body>

</html>
