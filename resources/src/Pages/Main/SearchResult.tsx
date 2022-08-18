import React from 'react';
import TitleText from '@@/Misc/TitleText';
import Collapser from '@@/Misc/Collapser';
import { Paginator } from '@/@types/Response';
import PageContainer from '@/Layouts/PageContainer';
import TagResult from '@@/Main/Search/Section/TagResult';
import { Collection, Item, User } from '@/@types/Models';
import UserResult from '@@/Main/Search/Section/UserResult';
import ItemResult from '@@/Main/Search/Section/ItemResult';
import CommentResult from '@@/Main/Search/Section/CommentResult';
import CategoryResult from '@@/Main/Search/Section/CategoryResult';
import CollectionResult from '@@/Main/Search/Section/CollectionResult';

interface Props {
  items: Paginator<Item[]>;
  users: Paginator<User[]>;
  collections: Paginator<Collection[]>;
  tags: Paginator<Item[]>;
  categories: Paginator<Collection[]>;
  comments: Paginator<Item[]>;
}

const SearchResult = ({
  items,
  users,
  collections,
  tags,
  categories,
  comments,
}: Props) => {
  const query = new URL(window.location.href).searchParams.get('query');

  return (
    <div className="flex flex-col gap-4">
      <TitleText>
        <span>{__('main.search_for')}</span>
        <span className="italic underline">{query}</span>
      </TitleText>

      <Collapser
        title={__('main.search_result', {
          model: 'users',
          count: users.meta.total,
        })}
      >
        <UserResult users={users} />
      </Collapser>

      <Collapser
        title={__('main.search_result', {
          model: 'items',
          count: items.meta.total,
        })}
      >
        <ItemResult items={items} />
      </Collapser>

      <Collapser
        title={__('main.search_result', {
          model: 'item tags',
          count: tags.meta.total,
        })}
      >
        <TagResult items={tags} />
      </Collapser>

      <Collapser
        title={__('main.search_result', {
          model: 'comments',
          count: comments.meta.total,
        })}
      >
        <CommentResult items={comments} />
      </Collapser>

      <Collapser
        title={__('main.search_result', {
          model: 'collections',
          count: collections.meta.total,
        })}
      >
        <CollectionResult collections={collections} />
      </Collapser>

      <Collapser
        title={__('main.search_result', {
          model: 'categories',
          count: categories.meta.total,
        })}
      >
        <CategoryResult collections={categories} />
      </Collapser>
    </div>
  );
};

export default PageContainer({
  tabTitle: 'Search Result',
  body: { component: SearchResult },
});
