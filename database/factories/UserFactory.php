<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition()
  {
    return [
      'name' => fake()->name(),
      'username' => \str_replace('.', '', fake()->unique()->userName()),
      'email' => fake()->unique()->safeEmail(),
      'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
      'remember_token' => Str::random(10),
    ];
  }

  /**
   * Configure the model factory.
   *
   * @return $this
   */
  public function configure()
  {
    return $this->afterCreating(function (User $user) {
      $user->detail()->create([]);
    });
  }
}
