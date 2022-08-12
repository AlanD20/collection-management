import Input from '@@/Form/Input';
import Button from '@@/Form/Button';
import TitleText from '@@/Misc/TitleText';
import React, { ChangeEvent } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import AdminHeader from '@@/Headers/Admin/AdminHeader';
import AdminPageContainer from '@/Layouts/AdminPageContainer';

const Create = () => {

  const { post, data, setData, processing, reset } = useForm({
    name: '',
  });

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    post(route('admin.tags.store'), {
      data,
      onSuccess: () => reset(),
    });
  };

  return (
    <>
      <TitleText label={__('model.create_title', {
        model: 'Tag'
      })} />
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

        <Button
          type="submit"
          label={__('form.create')}
          disabled={processing}
          className={`mt-6 ml-auto text-lg ${processing ? 'loading' : ''}`}
        />
      </form>
    </>
  );
};

export default AdminPageContainer({
  title: 'Create Tag',
  body: { component: Create },
  header: {
    component: AdminHeader,
    props: {
      componentName: 'Admin/Tag/Create',
    },
  },
  small: true,
});
