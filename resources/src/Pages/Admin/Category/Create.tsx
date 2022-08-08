import Input from '@@/Form/Input';
import Button from '@@/Form/Button';
import TitleText from '@@/Misc/TitleText';
import { UsePage } from '@/@types/Global';
import React, { ChangeEvent } from 'react';
import { usePage, useForm } from '@inertiajs/inertia-react';
import AdminPageContainer from '@/Layouts/AdminPageContainer';

const Create = () => {
  const $ = usePage<UsePage>().props;
  const { post, data, setData, processing, reset } = useForm({
    name: '',
  });

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    post(route('admin.categories.store'), {
      data,
      onSuccess: () => reset(),
    });
  };

  return (
    <>
      <TitleText label={$._.admin.category.create_title} />
      <form onSubmit={handleSubmit} className="w-full">
        <Input
          type="text"
          label={$._.form.name}
          name="username"
          value={data.name}
          className="block mt-1 w-full"
          onChange={(e) => setData('name', e.target.value)}
          required
          autoFocus
        />

        <Button
          type="submit"
          label={$._.form.create}
          disabled={processing}
          className={`mt-6 ml-auto text-lg ${processing ? 'loading' : ''}`}
        />
      </form>

      <div className="divider"></div>
    </>
  );
};

export default AdminPageContainer({
  component: Create,
  title: 'Create Category',
  name: 'Admin/Category/Create',
  small: true,
});
