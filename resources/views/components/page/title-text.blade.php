<h2 {{$attributes->merge([
  'class'=>'flex gap-2 items-center text-3xl font-bold pb-4 pt-2 capitalize '.$class
  ])}}>

  {{$slot}}
</h2>
