<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class StoreCollectionRequest extends FormRequest
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
      'category_id' => ['required', 'exists:categories,id'],
      'thumbnail' => [
        'nullable',
        'file',
        'image',
        'max:8192',
        'mimetypes:image/jpeg,image/png',
        'mimes:jpg,png',
      ],
      'fields' => ['present', 'nullable', 'array'],
      'fields.*.id' => ['required', 'string'],
      'fields.*.label' => ['required', 'string'],
      'fields.*.name' => ['required', 'string'],
      'fields.*.type' => ['required', 'string'],
    ];
  }

  public function attributes()
  {
    $attributes = [];
    foreach ($this->fields as $key => $value) {
      $num = $key + 1;
      $attributes["fields.{$key}.id"] = "#{$num} ID";
      $attributes["fields.{$key}.label"] = "#{$num} Title";
      $attributes["fields.{$key}.name"] = "#{$num} Name";
      $attributes["fields.{$key}.type"] = "#{$num} Type";
    }
    return $attributes;
  }
}
