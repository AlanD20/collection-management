<x-app-layout>

  <div class="tabs tabs-boxed mb-8">
    <a class="tab tab-lg tab-active">Manage Users</a>
    <a class="tab tab-lg">Manage Categories</a>
  </div>

  <x-status.success />

  @include('admin.users.index')
</x-app-layout>
