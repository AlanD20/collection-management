<div {{$attributes->merge([
  'class'=>'my-4 flex flex-col justify-center gap-4 font-semibold text-lg '.$class
  ])}}>


  @if($message)
  <span class="alert alert-{{$type}} text-white shadow-lg py-2 text-base flex flex-col gap-2">
    {{$message}}
  </span>
  @endif

</div>
