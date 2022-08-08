<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TagResource extends JsonResource
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

    return [
      'id' => $this->id,
      'name' => $this->name,
      'items' => ItemResource::collection($items),
      'updatedAt' => $this->updated_at,
      'createdAt' => $this->created_at,
    ];
  }
}
