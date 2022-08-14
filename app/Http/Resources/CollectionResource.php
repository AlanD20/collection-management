<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CollectionResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
   */
  public function toArray($request)
  {
    $items = $this->whenLoaded('items');
    $category = $this->whenLoaded('category');

    return [
      'id' => $this->id,
      'name' => $this->name,
      'description' => $this->description,
      'thumbnail' => $this->thumbnail,
      'fields' => $this->fields,
      'itemsCount' => $this->items_count,
      'items' => ItemResource::collection($items),
      'category' => new CategoryResource($category),
      'updatedAt' => $this->updated_at,
      'createdAt' => $this->created_at,
    ];
  }
}
