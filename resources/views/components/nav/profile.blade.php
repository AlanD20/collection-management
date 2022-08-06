<div class="dropdown dropdown-end">

  <label tabindex="0" class="btn btn-ghost">
    <div class="w-10 rounded-full flex items-center gap-4">
      <i class="fas fa-user text-3xl"></i>
    </div>
    <span class="font-semibold text-xl capitalize">
      {{auth()->user()->username}}
    </span>
  </label>

  <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
    <li>
      <a href="{{route('u.collection.index',['uname'=>auth()->user()->username])}}" class="justify-between">
        My Collections
        <span class="badge">New</span>
      </a>
    </li>
    <li><a>Settings</a></li>
    <form method="post" action="{{route('logout')}}">
      <li>
        @csrf
        <button type="submit">Logout</button>
      </li>
    </form>
  </ul>
</div>
