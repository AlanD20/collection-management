import Input from '@@/Form/Input';
import Button from '@@/Form/Button';
import TitleText from '@@/Misc/TitleText';
import { UsePage } from '@/@types/Global';
import { Category } from '@/@types/Models';
import SelectDropDown from '@@/Form/SelectDropDown';
import React, { ChangeEvent, useMemo } from 'react';
import UserPageContainer from '@/Layouts/UserPageContainer';
import { usePage, useForm } from '@inertiajs/inertia-react';
import CreateCustomField from '@@/User/Collection/CreateCustomField';
import UserHeaderCompact from '@@/Headers/User/UserHeaderCompact';

interface Props {
  categories: Category[];
}

const Create = ({ categories }: Props) => {
  const { params } = usePage<UsePage>().props;

  const { post, data, setData, processing, reset, progress } = useForm<{
    [key: string]: any;
  }>({
    name: '',
    description: '',
    category_id: null,
    thumbnail: undefined,
    fields: [],
  });

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    post(route('u.collections.store', { uname: params.uname }), {
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
      <TitleText
        label={__('model.create_title', {
          model: 'Collection',
        })}
      />
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
          label={__('form.create')}
          disabled={processing}
          className={`mt-6 ml-auto text-lg ${processing ? 'loading' : ''}`}
        />
      </form>
    </>
  );
};

export default UserPageContainer({
  tabTitle: 'Create Collection',
  body: { component: Create },
  header: {
    component: UserHeaderCompact,
    props: {
      title: ":uname's Collection Item",
      backRoute: {
        name: 'u.collections.index',
        params: ['uname'],
      },
    },
  },
  small: true,
});
