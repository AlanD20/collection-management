import { UsePage } from '@/@types/Global';
import React, { ChangeEvent } from 'react';
import Input from '@@/Form/Input';
import Button from '@@/Form/Button';
import Checkbox from '@@/Form/Checkbox';
import { usePage, useForm } from '@inertiajs/inertia-react';
import PageContainer from '@/Layouts/PageContainer';
import ButtonLink from '@@/Form/ButtonLink';
import TitleText from '@@/Misc/TitleText';

const Login = () => {
  const $ = usePage<UsePage>().props;
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
    });
  };

  return (
    <>
      <TitleText label={$._.form.login} />
      <form onSubmit={handleSubmit} className="w-full">
        <Input
          type="text"
          label={$._.form.username}
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
          label={$._.form.password}
          value={data.password}
          autoComplete="current-password"
          className="block mt-1 w-full"
          onChange={(e) => setData('password', e.target.value)}
          required
        />
        <div className="w-max">
          <Checkbox name="remember" label={$._.form.remember} />
        </div>

        <Button
          type="submit"
          label={$._.form.login}
          disabled={processing}
          className="mt-6 ml-auto text-lg"
        />
      </form>
      <div className="divider"></div>

      <div className="-flex justify-center">
        <ButtonLink
          href={route('register')}
          label={$._.form.create_account}
          className={`mt-6 mx-auto text-lg ${processing ? 'loading' : ''}`}
        />
      </div>
    </>
  );
};

export default PageContainer({
  component: Login,
  title: 'Login',
  small: true,
});
