<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LikeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $item = $this->whenLoaded('item');
        $user = $this->whenLoaded('user');

        return [
            'id' => $this->id,
            'itemId' => $this->item_id,
            'userId' => $this->user_id,
            'item' => new ItemResource($item),
            'user' => new UserResource($user),
            'updatedAt' => $this->updated_at,
            'createdAt' => $this->created_at,
        ];
    }
}
