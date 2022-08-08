
export interface UserInfo {
  id: number;
  admin: boolean;
  block: boolean;
  theme: boolean;
  locale: boolean;
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
  collections: Collection[],
  likes: Like[],
  comments: Comment[],
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
  category: Category;
  updatedAt: string;
  createdAt: string;
}

export interface Comment {
  id: number;
  user_id: number;
  item_id: number;
  body: string;
  item: Item;
  user: User;
  updatedAt: string;
  createdAt: string;
}

export interface Like {
  id: number;
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
  updatedAt: string;
  createdAt: string;
}

