<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ItemResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
   */
  public function toArray($request)
  {
    $collection = $this->whenLoaded('collection');
    $likes = $this->whenLoaded('likes');
    $comments = $this->whenLoaded('comments');
    $tags = $this->whenLoaded('tags');

    return [
      'id' => $this->id,
      'name' => $this->name,
      'collection' => new collectionResource($collection),
      'likes' => LikeResource::collection($likes),
      'comments' => CommentResource::collection($comments),
      'tags' => TagResource::collection($tags),
      'updatedAt' => $this->updated_at,
      'createdAt' => $this->created_at,
    ];
  }
}
