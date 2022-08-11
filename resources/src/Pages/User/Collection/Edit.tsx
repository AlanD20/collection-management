import Input from '@@/Form/Input';
import Button from '@@/Form/Button';
import TitleText from '@@/Misc/TitleText';
import { UsePage } from '@/@types/Global';
import UserHeader from '@@/User/UserHeader';
import SelectDropDown from '@@/Form/SelectDropDown';
import React, { ChangeEvent, useMemo } from 'react';
import { Category, Collection } from '@/@types/Models';
import UserPageContainer from '@/Layouts/UserPageContainer';
import { usePage, useForm } from '@inertiajs/inertia-react';
import CreateCustomField from '@@/User/Collection/CreateCustomField';

interface Props {
  collection: Collection;
  categories: Category[];
}

const Edit = ({ collection, categories }: Props) => {

  const { params } = usePage<UsePage>().props;

  console.log(collection);

  const { patch, data, setData, processing, reset, progress } = useForm<{
    [key: string]: any;
  }>({
    name: collection.name,
    description: collection.description,
    category_id: collection.category.id,
    thumbnail: undefined,
    fields: collection.fields,
  });

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    patch(route('u.collections.update', {
      uname: params.uname,
      col_id: params.col_id
    }), {
      data,
      onSuccess: () => reset(),
      preserveScroll: true,
    });
  };

  const CategoryList = useMemo(
    () =>
      categories.map((category) => ({
        value: category.id,
        label: category.name,
      })),
    [categories]
  );

  return (
    <>
      <TitleText label={__('model.update_title', {
        model: 'Collection'
      })} />
      <form onSubmit={handleSubmit} className="form-control gap-4 w-full">
        <Input
          type="text"
          label={__('form.col_name')}
          name="name"
          value={data.name}
          className="block mt-1 w-full"
          onChange={(e) => setData('name', e.target.value)}
          required
          autoFocus
        />
        <Input
          type="textarea"
          label={__('form.col_description')}
          name="description"
          value={data.description}
          className="block mt-1 w-full"
          onChange={(e) => setData('description', e.target.value)}
          required
        />

        <SelectDropDown
          name="category_id"
          label={__('form.col_category')}
          options={CategoryList}
          defaultInputValue={collection.category.name}
          onChange={(e: any) => setData('category_id', e.value)}
        />

        <Input
          type="file"
          label={__('form.col_thumbnail')}
          name="thumbnail"
          className="block mt-1 w-full"
          onChange={(e) =>
            setData('thumbnail', e.target.files ? e.target.files[0] : undefined)
          }
          progress={progress}
        />

        <div className="divider text-lg font-semibold">
          {__('form.col_field_title')}
        </div>

        <CreateCustomField keyName="fields" data={data} setData={setData} />

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

export default UserPageContainer({
  title: 'Edit Collection',
  body: { component: Edit },
  header: {
    component: UserHeader,
    props: {
      back: {
        name: 'u.collections.index',
      },
    },
  },
  small: true,
});
