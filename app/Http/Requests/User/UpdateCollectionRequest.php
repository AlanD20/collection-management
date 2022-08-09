<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCollectionRequest extends FormRequest
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
    return [
      'name' => ['required', 'string', 'max:75'],
      'description' => ['required'],
      'category' => ['required', 'exists:categories,id'],
      'thumbnail' => [
        'sometimes',
        'required',
        'file',
        'image',
        'max:8192',
        'mimetypes:image/jpeg,image/png',
        'mimes:jpg,png',
      ],
    ];
  }
}
