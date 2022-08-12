<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Collection>
 */
class CollectionFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition()
  {
    return [
      'name' => fake()->jobTitle(),
      'description' => fake()->paragraph(),
      'category_id' => fake()->randomDigit(),
      'thumbnail' => null,
      'fields' => fake()->randomElement([
        ["id" => "vAnX1Ut", "label" => "Was it fun?", "name" => "fun", "type" => "checkbox", "required" => false], ["id" => "yym_3rd", "label" => "journey startd", "name" => "start", "type" => "datetime", "required" => true], ["id" => "_qsmnBN", "label" => "Favorite memory\/quote", "name" => "memory", "type" => "textarea", "required" => true],
        ["id" => "vAnX1Ut", "label" => "Was it fun?", "name" => "fun", "type" => "checkbox", "required" => false],
        [["id" => "Z_ZM2fccbfBFO-", "label" => "artist?", "name" => "artist", "type" => "text", "required" => false]],
        [["id" => "R2XBwLJ6tdd7nX", "label" => "favorite numebr?", "name" => "numerb", "type" => "number", "required" => true]],
        [["id" => "ms-UqWC5G1_P39", "label" => "author", "name" => "author", "type" => "text", "required" => true], ["id" => "J0tpVsdBeiY_Bm", "label" => "ISBN", "name" => "isbn", "type" => "number", "required" => true]]
      ])
    ];
  }
}
