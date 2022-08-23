<?php

namespace App\Events;

use App\Models\Comment;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class CommentDeleted implements ShouldBroadcast
{
    use Dispatchable;
    use InteractsWithSockets;
    use SerializesModels;

    public Comment $comment;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(int $commentId)
    {
        $this->comment = Comment::query()
      ->with([
          'user' => fn ($q) => $q->select('id', 'name', 'username'),
      ])
      ->find($commentId);
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('u.collections.items.comments');
    }

    public function broadcastAs()
    {
        return 'comments.deleted';
    }

    public function broadcastWith()
    {
        return [
            'id' => $this->comment->id,
            'item_id' => $this->comment->item->id,
            'user' => [
                'id' => $this->comment->user->id,
                'name' => $this->comment->user->name,
                'username' => $this->comment->user->username,
            ],
        ];
    }
}
