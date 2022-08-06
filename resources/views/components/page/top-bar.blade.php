@php
$uname = auth()->user()->username;
@endphp

<div class="py-4 px-8 flex bg-base-100 shadow-md w-full rounded-md">

  @if ($route && request('uname') === $uname)
  <a href="{{route($route,['uname'=>$uname])}}" class="ml-auto btn btn-primary">Create</a>
  @endif
</div>
