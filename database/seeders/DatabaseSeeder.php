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

    $tags = \App\Models\Tag::factory(100)->create()->pluck('id');

    $items = [];
    $users = \App\Models\User::factory(50)->create()
      ->each(function ($user) use ($categories, $tags, &$items) {

        $cols = \App\Models\Collection::factory(5)->create([
          'user_id' => $user->id,
          'category_id' => fake()->randomElement($categories)
        ]);

        for ($i = 0; $i < 7; $i++) {
          $id = collect($cols->pluck('id')->all())->random();

          $item = \App\Models\Item::factory()->create([
            'collection_id' => $id,
          ]);
          $item->tags()
            ->attach(collect($tags)->random(7)->all());

          \array_push($items, [
            'item' => $item->id,
            'user' => $user->id
          ]);
        }
      });

    $userIds = $users->pluck('id')->all();
    $comments = [];
    for ($i = 0; $i < 500; $i++) {
      $itemId = collect($items)->random(1)->all();
      $comments[] = [
        'user_id' => collect($userIds)->random(),
        'item_id' => $itemId[0]['item'],
        'item_user_id' => $itemId[0]['user'],
        'body' => fake()->paragraph(20)
      ];
    }

    foreach (array_chunk($comments, 100) as $chunk_comments) {
      \App\Models\Comment::insert($chunk_comments);
    }


    // \App\Models\User::factory()->create([
    //     'name' => 'Test User',
    //     'email' => 'test@example.com',
    // ]);
  }
}
