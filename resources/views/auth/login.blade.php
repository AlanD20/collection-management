<x-app-layout>

  <x-page-layout>
    <form method="POST" action="{{ route('login') }}" class="w-full">
      @csrf

      <!-- Email Address -->

      <x-form.input type="text" label="Username:" name="username" value="{{old('username')}}" required autofocus
        autocomplete="username" class="block mt-1 w-full" />

      <x-form.input type="password" name="password" label="Password:" required autofocus autocomplete="current-password"
        class="block mt-1 w-full" />

      <!-- Remember Me -->
      <div class="w-max">
        <label class="label cursor-pointer flex w-max gap-4 items-center">
          <input type="checkbox" name="remember" class="checkbox checkbox-primary" />
          <span class="label-text">{{ __('Remember me') }}</span>
        </label>
      </div>


      <x-form.button label="{{ __('Log in') }}" class="mt-6 ml-auto text-lg" />
    </form>

    <div class="divider"></div>

    <div class="flex justify-center">
      <a href="{{route('register')}}" class="btn text-base">Create an account</a>
    </div>
  </x-page-layout>

</x-app-layout>
