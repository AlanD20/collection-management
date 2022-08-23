import Input from '@@/Form/Input';
import Button from '@@/Form/Button';
import { User } from '@/@types/Models';
import React, { ChangeEvent } from 'react';
import { Link, useForm } from '@inertiajs/inertia-react';
import UserPageContainer from '@/Layouts/UserPageContainer';
import UserHeaderCompact from '@@/Headers/User/UserHeaderCompact';

interface Props {
  user: User;
}

const Edit = ({ user }: Props) => {
  const { patch, data, setData, processing } = useForm({
    username: user.username,
    name: user.name,
    email: user.email,
  });

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    patch(
      route('u.update', {
        uname: user.username,
      }),
      { data }
    );
  };

  return (
    <div className="flex w-full justify-center gap-8">
      <form onSubmit={handleSubmit} className="min-w-[35ch] max-w-[45ch]">
        <Input
          type="text"
          label={__('form.username')}
          name="username"
          value={data.username}
          className="block mt-1 w-full"
          onChange={(e) => setData('username', e.target.value)}
          required
          autoFocus
        />
        <Input
          type="text"
          label={__('form.name')}
          name="name"
          value={data.name}
          className="block mt-1 w-full"
          onChange={(e) => setData('name', e.target.value)}
          required
        />
        <Input
          type="text"
          label={__('form.email')}
          name="email"
          value={data.email}
          className="block mt-1 w-full"
          onChange={(e) => setData('email', e.target.value)}
          autoComplete="username"
          required
        />

        <Button
          type="submit"
          label={__('form.update')}
          disabled={processing}
          className={`mt-6 ml-auto text-lg ${processing ? 'loading' : ''}`}
        />
        <div className="divider"></div>
        <Link
          href={route('u.edit.password', {
            uname: user.username,
          })}
          className={`w-full btn btn-natural mt-6 ml-auto text-lg`}
        >
          {__('form.change_password')}
        </Link>
        <Link
          href={route('u.destroy', {
            uname: user.username,
          })}
          method="delete"
          as="button"
          className={`w-full btn btn-error mt-6 ml-auto text-lg`}
        >
          {__('form.delete_account')}
        </Link>
      </form>
    </div>
  );
};

export default UserPageContainer({
  tabTitle: 'Edit',
  body: { component: Edit },
  header: {
    component: UserHeaderCompact,
    props: {
      title: 'main.edit_profile',
      backRoute: {
        label: __('back_profile'),
        name: 'u.update',
        params: ['uname'],
      },
    },
  },
});
