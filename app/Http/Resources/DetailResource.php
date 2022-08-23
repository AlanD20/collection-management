<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DetailResource extends JsonResource
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

        return [
            'id' => $this->id,
            'block' => $this->block,
            'admin' => $this->admin,
            'theme' => $this->theme,
            'locale' => $this->locale,
            'user' => new UserResource($user),
            // 'updatedAt' => $this->updated_at,
            // 'createdAt' => $this->created_at,
        ];
    }
}
