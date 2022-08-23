import Input from '@@/Form/Input';
import Button from '@@/Form/Button';
import { UsePage } from '@/@types/Response';
import React, { ChangeEvent, useMemo } from 'react';
import SelectDropDown from '@@/Form/SelectDropDown';
import { Collection, Item, Tag } from '@/@types/Models';
import { usePage, useForm } from '@inertiajs/inertia-react';
import UserPageContainer from '@/Layouts/UserPageContainer';
import RenderCustomField from '@@/User/Item/RenderCustomField';
import UserHeaderCompact from '@@/Headers/User/UserHeaderCompact';

interface Props {
  item: Item;
  tags: Tag[];
  collection: Collection;
}

const Edit = ({ collection, item, tags }: Props) => {
  const { params, ts } = usePage<UsePage>().props;

  const { patch, data, setData, processing } = useForm<{
    [key: string]: any;
  }>({
    name: item.name,
    tags: Array.isArray(item.tags) ? item.tags.map((t) => t.id) : [],
    fields: item.fields,
  });

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    patch(
      route('u.collections.items.update', {
        uname: params.uname,
        collection: params.collection,
        item: params.item,
      }),
      { data }
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

  const DefaultTagList = useMemo(
    () =>
      item.tags.map((tag) => ({
        value: tag.id,
        label: tag.name,
      })),
    [ts]
  );

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
        defaultValue={DefaultTagList}
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

      {item &&
        item.fields.length > 0 &&
        item.fields.map((field, index) => (
          <RenderCustomField
            key={field.id}
            index={index}
            keyName="fields"
            field={field}
            data={data}
            setData={setData}
          />
        ))}

      <Button
        type="submit"
        label={__('form.update')}
        disabled={processing}
        className={`mt-6 ml-auto text-lg ${processing ? 'loading' : ''}`}
      />
    </form>
  );
};

export default UserPageContainer({
  tabTitle: 'Edit Item',
  body: { component: Edit },
  header: {
    component: UserHeaderCompact,
    props: {
      title: 'main.edit_item',
      backRoute: {
        name: 'u.collections.items.show',
        params: ['uname', 'collection', 'item'],
      },
    },
  },
  small: true,
});
