<?php

namespace App\Http\Requests\User;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize()
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, mixed>
   */
  public function rules()
  {
    $user = $this->route('uname');
    return [
      'name' => ['required', 'string', 'max:35'],
      'username' => [
        'required',
        'string',
        'max:15',
        'alpha_num',
        // * Ignores incoming username from uniqueness..
        Rule::unique('users')
          ->ignore($user->username, 'username')
      ],
      'email' => [
        'required',
        'string',
        'email',
        'max:255',
        // * Ignores incoming email from uniqueness..
        Rule::unique('users')
          ->ignore($user->email, 'email')
      ],
    ];
  }
}
