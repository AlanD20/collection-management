<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Item>
 */
class ItemFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition()
  {
    return [
      'collection_id' => 3,
      'name' => fake()->word(),
      'fields' => [
        ["required" => true, "id" => "PGzP40KwZe_6G7", "label" => "integer?", "name" => "int", "type" => "number", "value" => "1231"],
        ["required" => true, "id" => "9UEAx6QcNUmhxa", "label" => "singleline", "name" => "single", "type" => "text", "value" => "safasdf"],
        ["required" => true, "id" => "3XWb3Z2bh-eqVj", "label" => "bool", "name" => "bool", "type" => "checkbox", "value" => true]
      ]

    ];
  }
}
