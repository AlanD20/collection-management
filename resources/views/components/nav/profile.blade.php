@php
$uname = auth()->user()->username;
$admin = auth()->user()->detail->admin;
@endphp

<div class="dropdown dropdown-end">

  <label tabindex="0" class="btn btn-ghost">
    <div class="w-10 rounded-full flex items-center gap-4">
      <i class="fas fa-user text-3xl"></i>
    </div>
    <span class="font-semibold text-xl capitalize">
      {{$uname}}
    </span>
  </label>

  <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
    <li>
      <a href="{{route('u.collections.index',['uname'=>$uname])}}" class="justify-between">
        {{__('nav.my_collection')}}
        <span class="badge">New</span>
      </a>
    </li>
    @if ($admin)

    <li><a href="{{route('admin.index')}}">Admin Panel</a></li>
    @endif
    <form method="post" action="{{route('logout')}}">
      <li>
        @csrf
        <button type="submit">{{__('nav.logout')}}</button>
      </li>
    </form>
  </ul>
</div>
