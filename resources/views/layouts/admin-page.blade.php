<x-app-layout>


  <div class="tabs tabs-boxed mb-8">
    <a class="tab tab-lg @if($type==='') tab-active @endif" href="{{route('admin.index')}}">Dashboard</a>
    <a class="tab tab-lg @if($type==='users') tab-active @endif" href="{{route('admin.users.index')}}">Manage Users</a>
    <a class="tab tab-lg @if($type==='categories') tab-active @endif" href="{{route('admin.categories.index')}}">Manage
      Categories</a>
  </div>

  <x-status.success />


  {{$slot}}
</x-app-layout>
