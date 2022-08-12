import Input from '@@/Form/Input';
import Button from '@@/Form/Button';
import TitleText from '@@/Misc/TitleText';
import { UsePage } from '@/@types/Global';
import React, { ChangeEvent } from 'react';
import { Category } from '@/@types/Models';
import AdminHeader from '@@/Headers/Admin/AdminHeader';
import { usePage, useForm } from '@inertiajs/inertia-react';
import AdminPageContainer from '@/Layouts/AdminPageContainer';

interface Props {
  category: Category;
}

const Edit = ({ category }: Props) => {
  const $ = usePage<UsePage>().props;
  const { patch, data, setData, processing } = useForm({
    name: category.name,
  });

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    patch(route('admin.categories.update', { id: category.id }), {
      data,
    });
  };

  return (
    <>
      <TitleText label={__('admin.category.update_title')} />
      <form onSubmit={handleSubmit} className="w-full">
        <Input
          type="text"
          label={__('form.name')}
          name="username"
          value={data.name}
          className="block mt-1 w-full"
          onChange={(e) => setData('name', e.target.value)}
          required
          autoFocus
        />

        <Button
          type="submit"
          label={__('form.update')}
          disabled={processing}
          className={`mt-6 ml-auto text-lg ${processing ? 'loading' : ''}`}
        />
      </form>

      <div className="divider"></div>
    </>
  );
};

export default AdminPageContainer({
  title: 'Edit Category',
  body: { component: Edit },
  header: {
    component: AdminHeader,
    props: {
      componentName: 'Admin/Category/Edit',
    },
  },
  small: true,
});
