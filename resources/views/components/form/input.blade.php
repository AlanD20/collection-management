<div class="input-container mb-2 [&+.input-container]:mb-4">

  <label for={{$name}} class="label capitalize">
    {{$label}}
  </label>

  <input type="{{$type}}" name="{{$name}}" {{ $attributes->merge([
  'class'=>'input input-bordered border-2 border-solid input-md w-full text-base focus:outline-none
  focus:border-gray-500 '. $class
  ])
  }}
  />

  <div class="mt-2">
    @error($name)
    <span class="ml-4 text-red-500">* {{$message}}</span>
    @enderror
  </div>

</div>
