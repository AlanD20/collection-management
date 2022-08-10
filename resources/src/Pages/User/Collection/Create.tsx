import Input from '@@/Form/Input';
import Button from '@@/Form/Button';
import TitleText from '@@/Misc/TitleText';
import { UsePage } from '@/@types/Global';
import UserHeader from '@@/User/UserHeader';
import { Category } from '@/@types/Models';
import SelectDropDown from '@@/Form/SelectDropDown';
import React, { ChangeEvent, useMemo } from 'react';
import UserPageContainer from '@/Layouts/UserPageContainer';
import { usePage, useForm } from '@inertiajs/inertia-react';
import CreateCustomField from '@@/User/Collection/CreateCustomField';

interface Props {
  categories: Category[];
}

const Create = ({ categories }: Props) => {
  const $ = usePage<UsePage>().props;

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

    post(route('u.collections.store'), {
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
      <TitleText label={$._.user.collection.create_title} />
      <form onSubmit={handleSubmit} className="form-control gap-4 w-full">
        <Input
          type="text"
          label={$._.form.col_name}
          name="name"
          value={data.name}
          className="block mt-1 w-full"
          onChange={(e) => setData('name', e.target.value)}
          required
          autoFocus
        />
        <Input
          type="textarea"
          label={$._.form.col_description}
          name="description"
          value={data.description}
          className="block mt-1 w-full"
          onChange={(e) => setData('description', e.target.value)}
          required
        />

        <SelectDropDown
          name="category_id"
          label={$._.form.col_category}
          options={CategoryList}
          onChange={(e: any) => setData('category_id', e.value)}
        />

        <Input
          type="file"
          label={$._.form.col_thumbnail}
          name="thumbnail"
          className="block mt-1 w-full"
          onChange={(e) =>
            setData('thumbnail', e.target.files ? e.target.files[0] : undefined)
          }
          progress={progress}
        />

        <div className="divider text-lg font-semibold">
          {$._.form.col_field_title}
        </div>

        <CreateCustomField keyName="fields" data={data} setData={setData} />

        <Button
          type="submit"
          label={$._.form.create}
          disabled={processing}
          className={`mt-6 ml-auto text-lg ${processing ? 'loading' : ''}`}
        />
      </form>
    </>
  );
};

export default UserPageContainer({
  title: 'Create Collection',
  body: { component: Create },
  header: {
    component: UserHeader,
    props: {
      back: {
        name: 'u.collections.index'
      },
    },
  },
  small: true,
});
