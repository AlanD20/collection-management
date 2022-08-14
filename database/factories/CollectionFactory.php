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
      'fields' => [
        [
          'required' => true,
          'id' => 'j9P9YfI9scuWkk',
          'label' => 'Single line text',
          'name' => 'single',
          'type' => 'text',
        ],
        [
          'required' => true,
          'id' => 'OsEYhJyHRjamMI',
          'label' => 'This is a multi line text',
          'name' => 'multi',
          'type' => 'textarea',
        ],
        [
          'required' => true,
          'id' => 'zjgQlSRy5bb0ks',
          'label' => 'Integer/Number',
          'name' => 'int',
          'type' => 'number',
        ],
        [
          'required' => true,
          'id' => 'Lz2Mh93Nzj562i',
          'label' => 'this is bool',
          'name' => 'bool',
          'type' => 'checkbox',
        ],
        [
          'required' => true,
          'id' => 'AUXHeUCPgh8tSB',
          'label' => 'This is a date field',
          'name' => 'date',
          'type' => 'datetime',
        ],
      ]
    ];
  }
}
