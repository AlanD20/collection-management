<x-page-layout>

  <div class="overflow-x-auto flex flex-col gap-4">
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

        @foreach ($users as $user)
        <x-admin.user-row :user="$user" />
        @endforeach

      </tbody>
    </table>
    {{$users->links()}}
  </div>
</x-page-layout>
