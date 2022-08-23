<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $detail = $this->whenLoaded('detail');
        $collections = $this->whenLoaded('collections');
        $likes = $this->whenLoaded('likes');
        $comments = $this->whenLoaded('comments');

        return [
            $this->mergeWhen($detail, new DetailResource($detail)),
            'id' => $this->id,
            'name' => $this->name,
            'username' => $this->username,
            'email' => $this->email,
            'collections' => CollectionResource::collection($collections),
            'likes' => LikeResource::collection($likes),
            'comments' => CommentResource::collection($comments),
            'updatedAt' => $this->updated_at,
            'createdAt' => $this->created_at,
        ];
    }
}
