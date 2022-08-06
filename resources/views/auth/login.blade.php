<x-app-layout>

  <x-page.title-text>
    Login
  </x-page.title-text>

  <x-small-page-layout>
    <form method="POST" action="{{ route('login') }}" class="w-full">
      @csrf

      <!-- Email Address -->

      <x-form.input type="text" label="{{__('form.username')}}" name="username" value="{{old('username')}}" required
        autofocus autocomplete="username" class="block mt-1 w-full" />

      <x-form.input type="password" name="password" label="{{__('form.password')}}" required autofocus
        autocomplete="current-password" class="block mt-1 w-full" />

      <!-- Remember Me -->
      <div class="w-max">
        <label class="label cursor-pointer flex w-max gap-4 items-center">
          <input type="checkbox" name="remember" class="checkbox checkbox-primary" />
          <span class="label-text">{{ __('form.remember') }}</span>
        </label>
      </div>


      <x-form.button label="{{ __('form.login') }}" class="mt-6 ml-auto text-lg" />
    </form>

    <div class="divider"></div>

    <div class="flex justify-center">
      <a href="{{route('register')}}" class="btn text-base">{{__('form.create_account')}}</a>
    </div>
  </x-small-page-layout>

</x-app-layout>
