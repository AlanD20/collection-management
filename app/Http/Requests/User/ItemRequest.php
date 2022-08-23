<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class ItemRequest extends FormRequest
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
            'name' => ['required', 'string', 'max:25'],
            'tags' => ['present', 'nullable', 'array'],
            'fields' => ['present', 'nullable', 'array'],
            'fields.*.required' => ['required', 'boolean'],
            'fields.*.id' => ['required', 'string'],
            'fields.*.label' => ['required_if:fields.*.required,true', 'string'],
            'fields.*.name' => ['required_if:fields.*.required,true', 'string'],
            'fields.*.type' => ['required_if:fields.*.required,true', 'string'],
            'fields.*.value' => ['required_if:fields.*.required,true'],
        ];
    }

    public function attributes()
    {
        $attributes = [];
        foreach ($this->fields as $key => $value) {
            $label = $value['label'];
            $attributes["fields.{$key}.id"] = "{$label} ID";
            $attributes["fields.{$key}.label"] = "{$label} Label";
            $attributes["fields.{$key}.name"] = "{$label} Name";
            $attributes["fields.{$key}.type"] = "{$label} Type";
            $attributes["fields.{$key}.value"] = "{$label} Value";
            $attributes["fields.{$key}.required"] = "{$label} Required";
        }

        return $attributes;
    }
}
