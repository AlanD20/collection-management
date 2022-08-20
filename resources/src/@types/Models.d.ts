export interface UserInfo {
  id: number;
  admin: boolean;
  block: boolean;
  theme: 'dracula' | 'emerald';
  locale: 'en' | 'ku';
  updatedAt: string;
  createdAt: string;
}

export interface UserWithoutRelation extends UserInfo {
  id: number;
  name: string;
  username: string;
  email: string;
  updatedAt: string;
  createdAt: string;
}

export interface User extends UserInfo {
  id: number;
  name: string;
  username: string;
  email: string;
  updatedAt: string;
  createdAt: string;
  collections: Collection[];
  likes: Like[];
  comments: Comment[];
}

export interface Category {
  id: number;
  name: string;
  collections: Collection[];
  updatedAt: string;
  createdAt: string;
}

export interface Collection {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  items: Item[];
  user: User;
  itemsCount: number;
  category: Category;
  updatedAt: string;
  createdAt: string;
  fields: CustomField[];
}

export interface Comment {
  id: number;
  user_id: number;
  item: number;
  body: string;
  item: Item;
  user: User;
  updatedAt: string;
  createdAt: string;
}

export interface Like {
  id: number;
  itemId: number;
  userId: number;
  item: Item;
  user: User;
  updatedAt: string;
  createdAt: string;
}

export interface Tag {
  id: number;
  name: string;
  items: Item[];
  updatedAt: string;
  createdAt: string;
}

export interface Item {
  id: number;
  name: string;
  collection: Collection;
  likes: Likes[];
  comments: Comments[];
  tags: Tags[];
  fields: CustomField[];
  likesCount: number;
  commentsCount: number;
  updatedAt: string;
  createdAt: string;
}

export type CustomFieldTypes =
  | 'text'
  | 'textarea'
  | 'number'
  | 'checkbox'
  | 'datetime';

export interface CustomField {
  id: string;
  label: string;
  name: string;
  required: boolean;
  type: CustomFieldTypes;
  value?: any;
}
