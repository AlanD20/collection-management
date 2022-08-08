<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
   */
  public function toArray($request)
  {
    $user = $this->whenLoaded('user');
    $item = $this->whenLoaded('item');

    return [
      'id' => $this->id,
      'user_id' => $this->user_id,
      'item_id' => $this->item_id,
      'body' => $this->body,
      'user' => new UserResource($user),
      'item' => new ItemResource($item),
      'updatedAt' => $this->updated_at,
      'createdAt' => $this->created_at,
    ];
  }
}
