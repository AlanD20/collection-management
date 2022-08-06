<x-admin-page-layout type='categories'>

  <div class="overflow-x-auto flex flex-col gap-4 w-full">
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Status</th>
          <th>Admin</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>

        {{-- @foreach ($users as $user)
        <x-admin.user-row :user="$user" />
        @endforeach --}}

      </tbody>
    </table>
    {{-- {{$users->links()}} --}}
  </div>
</x-admin-page-layout>
