import Input from '@@/Form/Input';
import Button from '@@/Form/Button';
import TitleText from '@@/Misc/TitleText';
import { Tag } from '@/@types/Models';
import React, { ChangeEvent } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import AdminHeader from '@@/Headers/Admin/AdminHeader';
import AdminPageContainer from '@/Layouts/AdminPageContainer';

interface Props {
  tag: Tag;
}

const Edit = ({ tag }: Props) => {
  const { patch, data, setData, processing } = useForm({
    name: tag.name,
  });

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    patch(route('admin.tags.update', { id: tag.id }), {
      data,
    });
  };

  return (
    <>
      <TitleText
        label={__('model.edit_title', {
          model: 'Tag',
        })}
      />
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
          label={__('form.update')}
          disabled={processing}
          className={`mt-6 ml-auto text-lg ${processing ? 'loading' : ''}`}
        />
      </form>
    </>
  );
};

export default AdminPageContainer({
  tabTitle: 'Edit Tag',
  body: { component: Edit },
  header: {
    component: AdminHeader,
    props: {
      componentName: 'Admin/Tag/Edit',
    },
  },
  small: true,
});
