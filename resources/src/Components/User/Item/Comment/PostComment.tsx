import Input from '@@/Form/Input';
import Button from '@@/Form/Button';
import React, { ChangeEvent } from 'react';
import { UsePage } from '@/@types/Response';
import { usePage, useForm } from '@inertiajs/inertia-react';

const PostComment = () => {
  const {
    params,
    auth: { user },
  } = usePage<UsePage>().props;

  const { post, data, setData, processing, reset } = useForm({
    body: '',
  });

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    post(
      route('u.collections.items.comments.store', {
        uname: params.uname,
        collection: params.collection,
        item: params.item,
      }),
      {
        data,
        onSuccess: () => reset(),
        preserveScroll: true,
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mb-12">
      <Input
        type="textarea"
        label={__('form.comment_body')}
        name="body"
        value={data.body}
        className="block mt-1 w-full"
        onChange={(e) => setData('body', e.target.value)}
        required
      />

      <div className="flex justify-between items-center w-full mt-6">
        <span className="font-bold">
          {__('user.comment_as', {
            user: user.username,
          })}
        </span>
        <Button
          type="submit"
          label={__('form.comment_post')}
          disabled={processing}
          className={`text-lg ${processing ? 'loading' : ''}`}
        />
      </div>
    </form>
  );
};

export default PostComment;
