<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
   */
  public function toArray($request)
  {
    $collections = $this->whenLoaded('collections');

    return [
      'id' => $this->id,
      'name' => $this->name,
      'collections' => CollectionResource::collection($collections),
      'updatedAt' => $this->updated_at,
      'createdAt' => $this->created_at,
    ];
  }
}
