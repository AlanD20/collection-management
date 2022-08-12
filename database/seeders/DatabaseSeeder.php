<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   *
   * @return void
   */
  public function run()
  {
    // Admin
    \App\Models\User::factory()->create([
      'name' => 'aland',
      'username' => 'a20',
      'email' => 'aland20@pm.me',
    ])->detail()->update([
      'admin' => true
    ]);

    $categories = \App\Models\Category::factory(100)->create()->pluck('id');

    \App\Models\User::factory(50)->create()
      ->each(function ($user) use ($categories) {
        \App\Models\Collection::factory(5)->create([
          'user_id' => $user->id,
          'category_id' => fake()->randomElement($categories)
        ]);
      });


    // \App\Models\User::factory()->create([
    //     'name' => 'Test User',
    //     'email' => 'test@example.com',
    // ]);
  }
}
