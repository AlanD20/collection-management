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
    Schema::create('item_tag_tables', function (Blueprint $table) {
      $table->id();
      $table->foreignId('item_id')->constrained('items', 'id');
      $table->foreignId('tag_id')->constrained('tags', 'id');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('item_tag_tables');
  }
};
