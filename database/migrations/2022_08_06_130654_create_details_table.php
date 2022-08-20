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
    Schema::create('details', function (Blueprint $table) {
      $table->id();
      $table->foreignId('user_id')->constrained('users', 'id')->onDelete('cascade');
      $table->boolean('block')->default(false);
      $table->boolean('admin')->default(false);
      $table->string('theme')->default('emerald');
      $table->string('locale')->default('en');
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
    Schema::dropIfExists('details');
  }
};
