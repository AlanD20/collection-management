<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('collections', function (Blueprint $table) {
      $table->id();
      $table->foreignId('user_id')->constrained('users', 'id')->onDelete('cascade');
      $table->foreignId('category_id')->nullable()->constrained('categories', 'id');
      $table->string('name');
      $table->longText('description');
      $table->string('thumbnail')->nullable();
      $table->json('fields')->nullable();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('collections');
  }
};
