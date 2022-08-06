<button {{$attributes->merge([
  'class'=>'btn btn-primary btn-md capitalize flex gap-2 items-center ' .$class
  ])}}>
  {{$slot}}
  <span>{{$label}}</span>
</button>
