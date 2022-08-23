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

const EditPassword = ({ user }: Props) => {
  const { patch, data, setData, processing } = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
  });

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    patch(
      route('u.update.password', {
        uname: user.username,
      }),
      { data }
    );
  };

  return (
    <div className="flex w-full justify-center gap-8">
      <form onSubmit={handleSubmit} className="min-w-[35ch] max-w-[45ch]">
        <Input
          type="password"
          label={__('form.current_password')}
          name="current_password"
          value={data.current_password}
          className="block mt-1 w-full"
          onChange={(e) => setData('current_password', e.target.value)}
          autoComplete="current_password"
          required
        />
        <Input
          type="password"
          label={__('form.new_password')}
          name="new_password"
          value={data.password}
          className="block mt-1 w-full"
          onChange={(e) => setData('password', e.target.value)}
          autoComplete="current_password"
          required
        />
        <Input
          type="password"
          label={__('form.password_confirmation')}
          name="password_confirmation"
          className="block mt-1 w-full"
          onChange={(e) => setData('password_confirmation', e.target.value)}
          autoComplete="current_password"
          required
        />

        <Button
          type="submit"
          label={__('form.change_password')}
          disabled={processing}
          className={`mt-6 ml-auto text-lg ${processing ? 'loading' : ''}`}
        />
        <div className="divider"></div>
        <Link
          href={route('u.edit', {
            uname: user.username,
          })}
          className={`w-full btn btn-natural mt-6 ml-auto text-lg`}
        >
          {__('form.edit_profile')}
        </Link>
      </form>
    </div>
  );
};

export default UserPageContainer({
  tabTitle: 'Change Password',
  body: { component: EditPassword },
  header: {
    component: UserHeaderCompact,
    props: {
      title: 'main.change_password',
      backRoute: {
        label: __('back_profile'),
        name: 'u.update',
        params: ['uname'],
      },
    },
  },
});
