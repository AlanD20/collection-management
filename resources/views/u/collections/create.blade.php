<x-app-layout>

  <x-page.title-text>
    Create Collection
  </x-page.title-text>

  <x-small-page-layout>
    <form method="POST" action="{{ route('u.collections.store') }}" class="w-full">
      @csrf

      <!-- Email Address -->

      <x-form.input type="text" label="{{__('form.col_name')}}" name="name" value="{{old('name')}}" required autofocus
        class="block mt-1 w-full" />

      <x-form.input type="textarea" label="{{__('form.col_description')}}" name="description"
        value="{{old('description')}}" required autofocus class="block mt-1 w-full" />

      <x-form.input type="email" label="{{__('form.col_category')}}" name="email" value="{{old('email')}}" required
        class="block mt-1 w-full" />

      <x-form.input type="file" label="{{__('form.col_thumbnail')}}" name="thumbnail" value="{{old('thumbnail')}}"
        required autofocus class="block mt-1 w-full" />


      <x-form.button label="{{ __('form.create') }}" class="mt-6 ml-auto text-lg" />
    </form>

    <div class="divider"></div>

    <div class="flex justify-center">
      <a class="underline  text-gray-600 hover:text-gray-900 text-lg" href="{{ route('u.collections.index') }}">
        {{ __('form.back') }}
      </a>
    </div>
  </x-small-page-layout>

</x-app-layout>
