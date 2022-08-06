<button {{$attributes->merge([
  'class'=>'btn btn-primary btn-md capitalize flex items-center ' .$class
  ])}}>
  {{$slot}}
  <span>{{$label}}</span>
</button>
