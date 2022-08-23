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
            'name' => \strtolower(fake()->word()),
            'fields' => [
                [
                    'required' => true,
                    'id' => 'j9P9YfI9scuWkk',
                    'label' => 'single line text',
                    'name' => 'single',
                    'type' => 'text',
                    'value' => \strtolower(fake()->sentence(12)),
                ],
                [
                    'required' => true,
                    'id' => 'OsEYhJyHRjamMI',
                    'label' => 'this is a multi line text',
                    'name' => 'multi',
                    'type' => 'textarea',
                    'value' => \strtolower(fake()->paragraph(7)),
                ],
                [
                    'required' => true,
                    'id' => 'zjgQlSRy5bb0ks',
                    'label' => 'integer/number',
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
                    'label' => 'this is a date field',
                    'name' => 'date',
                    'type' => 'datetime',
                    'value' => fake()->iso8601(),
                ],
            ],

        ];
    }
}
