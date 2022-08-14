import Input from '@@/Form/Input';
import Button from '@@/Form/Button';
import Checkbox from '@@/Form/Checkbox';
import TitleText from '@@/Misc/TitleText';
import React, { ChangeEvent } from 'react';
import ButtonLink from '@@/Form/ButtonLink';
import { UsePage } from '@/@types/Response';
import PageContainer from '@/Layouts/PageContainer';
import { usePage, useForm } from '@inertiajs/inertia-react';

const Register = () => {
  const $ = usePage<UsePage>().props;
  const { post, data, setData, processing, reset } = useForm({
    name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    tos: false,
  });

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    post(route('register'), {
      data,
      onSuccess: () => reset(),
      onError: () => reset('password', 'password_confirmation'),
    });
  };

  return (
    <>
      <TitleText label={__('form.create_account')} />
      <form onSubmit={handleSubmit} className="w-full">
        <Input
          type="text"
          label={__('form.name')}
          name="name"
          value={data.name}
          className="block mt-1 w-full"
          onChange={(e) => setData('name', e.target.value)}
          required
          autoFocus
        />
        <Input
          type="text"
          label={__('form.username')}
          name="username"
          value={data.username}
          autoComplete="username"
          className="block mt-1 w-full"
          onChange={(e) => setData('username', e.target.value)}
          required
        />
        <Input
          type="email"
          label={__('form.email')}
          name="email"
          value={data.email}
          autoComplete="username"
          className="block mt-1 w-full"
          onChange={(e) => setData('email', e.target.value)}
          required
        />
        <Input
          type="password"
          name="password"
          label={__('form.password')}
          value={data.password}
          autoComplete="new-password"
          className="block mt-1 w-full"
          onChange={(e) => setData('password', e.target.value)}
          required
        />
        <Input
          type="password"
          name="password_confirmation"
          label={__('form.password_confirm')}
          value={data.password_confirmation}
          autoComplete="new-password"
          className="block mt-1 w-full"
          onChange={(e) => setData('password_confirmation', e.target.value)}
          required
        />
        <div className="w-max">
          <Checkbox
            required
            name="tos"
            label={__('form.tos')}
            onChange={(e) => setData('tos', e.target.checked)}
          />
        </div>

        <Button
          type="submit"
          label={__('form.register')}
          disabled={processing}
          className={`mt-6 ml-auto text-lg ${processing ? 'loading' : ''}`}
        />
      </form>

      <div className="divider"></div>

      <div className="flex justify-center">
        <ButtonLink
          href={route('login')}
          label={__('form.already_registered')}
          className="btn-link bnt-md underline text-sm text-gray-600 hover:text-gray-900"
        />
      </div>
    </>
  );
};

export default PageContainer({
  tabTitle: 'Register',
  body: { component: Register },
  small: true,
});
