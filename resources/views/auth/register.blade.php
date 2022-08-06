<x-app-layout>

  <x-page.title-text>
    Create An Account
  </x-page.title-text>

  <x-small-page-layout>
    <form method="POST" action="{{ route('register') }}" class="w-full">
      @csrf

      <!-- Email Address -->

      <x-form.input type="text" label="{{__('form.name')}}" name="name" value="{{old('name')}}" required autofocus
        class="block mt-1 w-full" />

      <x-form.input type="text" label="{{__('form.username')}}" name="username" value="{{old('username')}}" required
        autofocus class="block mt-1 w-full" />

      <x-form.input type="email" label="{{__('form.email')}}" name="email" value="{{old('email')}}" required autofocus
        autocomplete="username" class="block mt-1 w-full" />

      <x-form.input type="password" name="password" label="{{__('form.password')}}" required autofocus
        autocomplete="new-password" class="block mt-1 w-full" />

      <x-form.input type="password" name="password_confirmation" label="{{__('form.password_confirm')}}" required
        autofocus class="block mt-1 w-full" />

      <div class="w-max">
        <label class="label cursor-pointer flex w-max gap-4 items-center">
          <input type="checkbox" name="tos" class="checkbox checkbox-primary" />
          <span class="label-text">{{ __('form.tos') }}</span>
        </label>
      </div>


      <x-form.button label="{{ __('form.register') }}" class="mt-6 ml-auto text-lg" />
    </form>

    <div class="divider"></div>

    <div class="flex justify-center">
      <a class="underline text-sm text-gray-600 hover:text-gray-900" href="{{ route('login') }}">
        {{ __('form.already_registered') }}
      </a>
    </div>
  </x-small-page-layout>

</x-app-layout>
