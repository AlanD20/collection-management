import React, { ChangeEvent } from "react"
import { UsePage } from "@/@types/global";
import Input from "@/Components/Form/Input";
import { usePage, useForm } from "@inertiajs/inertia-react"
import SmallPageContainer from "@/Layouts/SmallPageContainer"
import Checkbox from "@/Components/Form/Checkbox";
import Button from "@/Components/Form/Button";

interface Props { }

const Login = (props: Props) => {

  const $ = usePage<UsePage>().props;
  const { post, data, setData, errors, processing } = useForm({
    username: '',
    password: '',
    remember: false
  });

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    post(route('login'), {
      data
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full"
    >
      <Input
        type="text"
        label={$._.form.username}
        name="username"
        value={data.username}
        autoComplete="username"
        className="block mt-1 w-full"
        onChange={e => setData('username', e.target.value)}
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
        onChange={e => setData('password', e.target.value)}
        required
      />
      <div className="w-max">
        <Checkbox name="remember" label={$._.form.remember} />
      </div>

      <Button
        type='submit'
        label={$._.form.login}
        disabled={processing}
        className="mt-6 ml-auto text-lg"
      />
    </form>
  )
}

export default SmallPageContainer({
  component: Login,
  title: 'Login'
})
