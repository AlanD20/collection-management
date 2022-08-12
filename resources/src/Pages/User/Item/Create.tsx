import Input from '@@/Form/Input';
import Button from '@@/Form/Button';
import { Collection, Tag } from '@/@types/Models';
import TitleText from '@@/Misc/TitleText';
import { UsePage } from '@/@types/Global';
import SelectDropDown from '@@/Form/SelectDropDown';
import React, { ChangeEvent, useEffect, useMemo } from 'react';
import UserHeader from '@@/Headers/User/UserHeaderCompact';
import UserPageContainer from '@/Layouts/UserPageContainer';
import { usePage, useForm } from '@inertiajs/inertia-react';
import CreateCustomField from '@@/User/Collection/CreateCustomField';
import RenderCustomField from '@@/User/Item/RenderCustomField';

interface Props {
  collection: Collection;
  tags: Tag[];
}

const Create = ({ collection, tags }: Props) => {
  const { params, ts } = usePage<UsePage>().props;

  const { post, data, setData, processing, reset, progress } = useForm<{
    [key: string]: any;
  }>({
    name: '',
    tags: [],
    fields: collection.fields,
  });

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    post(
      route('u.collections.items.store', {
        uname: params.uname,
        collection: params.collection,
      }),
      {
        data,
        onSuccess: () => reset(),
        preserveScroll: true,
      }
    );
  };

  const TagList = useMemo(
    () =>
      tags.map((tag) => ({
        value: tag.id,
        label: tag.name,
      })),
    [ts]
  );

  useEffect(() => console.log(data), [data]);

  return (
    <form onSubmit={handleSubmit} className="form-control gap-4 w-full">
      <Input
        type="text"
        label={__('form.item_name')}
        name="name"
        value={data.name}
        className="block mt-1 w-full"
        onChange={(e) => setData('name', e.target.value)}
        required
        autoFocus
      />

      <SelectDropDown
        isMulti
        closeMenuOnSelect={false}
        name="tags"
        label={__('form.item_tag')}
        options={TagList}
        onChange={(e: any) =>
          setData(
            'tags',
            e.map((s: any) => s.value)
          )
        }
      />

      <div className="divider text-lg font-semibold">
        {__('form.item_field_title')}
      </div>

      {collection &&
        collection.fields.length > 0 &&
        collection.fields.map((field) => (
          <RenderCustomField
            key={field.id}
            keyName="fields"
            field={field}
            data={data}
            setData={setData}
          />
        ))}

      <Button
        type="submit"
        label={__('form.create')}
        disabled={processing}
        className={`mt-6 ml-auto text-lg ${processing ? 'loading' : ''}`}
      />
    </form>
  );
};

export default UserPageContainer({
  tabTitle: 'Create Item',
  body: { component: Create },
  header: {
    component: UserHeader,
    props: {
      title: 'Create Item',
      backRoute: {
        name: 'u.collections.items.index',
        params: ['uname', 'collection'],
      },
    },
  },
  small: true,
});
