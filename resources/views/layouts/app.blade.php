<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>{{ config('app.name', 'PCM') }}</title>

  <!-- Fonts -->
  <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">
  <link rel="stylesheet" type="text/css"
    href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css" />

  <!-- Scripts -->
  @vite(['resources/css/app.css', 'resources/ts/app.ts'])
</head>

<body class="font-sans antialiased">
  <div class="min-h-screen flex flex-col items-center relative w-full ">
    @include('components.nav.index')

    <!-- Page Content -->
    <main class="flex flex-col items-center relative w-full h-screen bg-gray-100 py-4 px-8">
      {{ $slot }}
    </main>
  </div>

</body>

</html>
