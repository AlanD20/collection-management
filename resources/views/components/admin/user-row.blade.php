@php
$block = $user->detail->block;
$admin = $user->detail->admin;
@endphp
<tr class="hover">
  <th>{{$user->id}}</th>
  <td>{{$user->name}}</td>
  <td>{{$user->username}}</td>
  <td>{{$user->email}}</td>
  <td class="capitalize text-{{$block ? 'red' : 'green'}}-500 font-semibold">
    {{$block ? 'blocked' : 'active'}}
  </td>
  <td><i class="fas fa-{{$admin ? 'check' : 'tiems'}}"></i></td>

  <td class="flex gap-4">

    {{-- Promote/Demote user --}}
    <form action="{{route('admin.users.'.($admin?'demote':'promote'),['id'=>$user->id])}}" method="post">
      @csrf
      <x-form.button type='submit' class="btn-outline btn-{{$admin?'error':'success'}}">
        <i class="fas fa-user-{{$admin?'slash':'crown'}}"></i>
      </x-form.button>
    </form>

    {{-- Block/Unblock user --}}
    <form action="{{route('admin.users.'.($block?'unblock':'block'),['id'=>$user->id])}}" method="post">
      @csrf
      <x-form.button type='submit' class="btn-outline btn-{{$block?'success':'error'}}">
        <i class="fas fa-user-{{$block?'unlock':'lock'}}"></i>
      </x-form.button>
    </form>

    {{-- Delete User --}}
    <form action="{{route('admin.users.destroy',['id'=>$user->id])}}" method="post">
      @csrf
      @method('DELETE')
      <x-form.button type='submit' class="btn-outline btn-error">
        <i class="fas fa-trash"></i>
      </x-form.button>
    </form>
  </td>
</tr>
