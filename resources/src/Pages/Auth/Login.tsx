import Input from '@@/Form/Input';
import Button from '@@/Form/Button';
import Checkbox from '@@/Form/Checkbox';
import TitleText from '@@/Misc/TitleText';
import React, { ChangeEvent } from 'react';
import ButtonLink from '@@/Form/ButtonLink';
import { UsePage } from '@/@types/Response';
import PageContainer from '@/Layouts/PageContainer';
import { usePage, useForm } from '@inertiajs/inertia-react';

const Login = () => {
  const { post, data, setData, processing, reset } = useForm({
    username: '',
    password: '',
    remember: false,
  });

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    post(route('login'), {
      data,
      onSuccess: () => reset(),
      onError: () => reset('password'),
    });
  };

  return (
    <>
      <TitleText label={__('form.login')} />
      <form onSubmit={handleSubmit} className="w-full">
        <Input
          type="text"
          label={__('form.username')}
          name="username"
          value={data.username}
          autoComplete="username"
          className="block mt-1 w-full"
          onChange={(e) => setData('username', e.target.value)}
          required
          autoFocus
        />
        <Input
          type="password"
          name="password"
          label={__('form.password')}
          value={data.password}
          autoComplete="current-password"
          className="block mt-1 w-full"
          onChange={(e) => setData('password', e.target.value)}
          required
        />
        <div className="w-max">
          <Checkbox name="remember" label={__('form.remember')} />
        </div>

        <Button
          type="submit"
          label={__('form.login')}
          disabled={processing}
          className={`mt-6 ml-auto text-lg ${processing ? 'loading' : ''}`}
        />
      </form>
      <div className="divider"></div>

      <div className="-flex justify-center">
        <ButtonLink
          href={route('register')}
          label={__('form.create_account')}
          className="mt-6 mx-auto text-lg"
        />
      </div>
    </>
  );
};

export default PageContainer({
  tabTitle: 'Login',
  body: { component: Login },
  small: true,
});
