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
        [
          'required' => true,
          'id' => 'j9P9YfI9scuWkk',
          'label' => 'Single line text',
          'name' => 'single',
          'type' => 'text',
          'value' => fake()->sentence(12),
        ],
        [
          'required' => true,
          'id' => 'OsEYhJyHRjamMI',
          'label' => 'This is a multi line text',
          'name' => 'multi',
          'type' => 'textarea',
          'value' => fake()->paragraph(7),
        ],
        [
          'required' => true,
          'id' => 'zjgQlSRy5bb0ks',
          'label' => 'Integer/Number',
          'name' => 'int',
          'type' => 'number',
          'value' => fake()->creditCardNumber(),
        ],
        [
          'required' => true,
          'id' => 'Lz2Mh93Nzj562i',
          'label' => 'this is bool',
          'name' => 'bool',
          'type' => 'checkbox',
          'value' => fake()->boolean(),
        ],
        [
          'required' => true,
          'id' => 'AUXHeUCPgh8tSB',
          'label' => 'This is a date field',
          'name' => 'date',
          'type' => 'datetime',
          'value' => fake()->iso8601(),
        ],
      ]

    ];
  }
}
