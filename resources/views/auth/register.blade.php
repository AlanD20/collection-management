<x-app-layout>

  <x-page-layout>
    <form method="POST" action="{{ route('register') }}" class="w-full">
      @csrf

      <!-- Email Address -->

      <x-form.input type="text" label="Name:" name="name" value="{{old('name')}}" required autofocus
        class="block mt-1 w-full" />

      <x-form.input type="text" label="Username:" name="username" value="{{old('username')}}" required autofocus
        class="block mt-1 w-full" />

      <x-form.input type="email" label="Email:" name="email" value="{{old('email')}}" required autofocus
        autocomplete="username" class="block mt-1 w-full" />

      <x-form.input type="password" name="password" label="Password:" required autofocus autocomplete="new-password"
        class="block mt-1 w-full" />

      <x-form.input type="password" name="password_confirmation" label="Confirm Password:" required autofocus
        class="block mt-1 w-full" />


      <!-- Remember Me -->
      <div class="w-max">
        <label class="label cursor-pointer flex w-max gap-4 items-center">
          <input type="checkbox" name="tos" class="checkbox checkbox-primary" />
          <span class="label-text">{{ __('Accept terms of service') }}</span>
        </label>
      </div>


      <x-form.button label="{{ __('Register') }}" class="mt-6 ml-auto text-lg" />
    </form>

    <div class="divider"></div>

    <div class="flex justify-center">
      <a class="underline text-sm text-gray-600 hover:text-gray-900" href="{{ route('login') }}">
        {{ __('Already have an account?') }}
      </a>
    </div>
  </x-page-layout>

</x-app-layout>
