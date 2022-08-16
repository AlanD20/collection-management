import { SelectOption } from '@/@types/Global';

export const CUSTOM_FIELD_TYPES_SP = [
  { value: 'text', label: 'Single-line' },
  { value: 'textarea', label: 'Multi-line' },
  { value: 'number', label: 'Integer' },
  { value: 'checkbox', label: 'Boolean' },
  { value: 'datetime', label: 'Date & Time' },
];

export const U_COLLECTIONS_SP: SelectOption[] = [
  { value: 'asc-created_at', label: 'Oldest Collection Created' },
  { value: 'desc-created_at', label: 'Newest Collection Created' },
  { value: 'asc-updated_at', label: 'Oldest Collection Updated' },
  { value: 'desc-updated_at', label: 'Newest Collection Updated' },
  { value: 'asc-id', label: 'ID By Low to High' },
  { value: 'desc-id', label: 'ID By High to Low' },
  { value: 'asc-title', label: 'Title By Ascending' },
  { value: 'desc-title', label: 'Title By Descending' },
  { value: 'asc-category', label: 'Category By Ascending' },
  { value: 'desc-category', label: 'Category By Descending' },
  { value: 'asc-items', label: 'Item Count By Ascending' },
  { value: 'desc-items', label: 'Item Count By Descending' },
];

export const U_ITEMS_SP: SelectOption[] = [
  { value: 'asc-created_at', label: 'Oldest Item Created' },
  { value: 'desc-created_at', label: 'Newest Item Created' },
  { value: 'asc-updated_at', label: 'Oldest Item Updated' },
  { value: 'desc-updated_at', label: 'Newest Item Updated' },
  { value: 'asc-id', label: 'ID By Low to High' },
  { value: 'desc-id', label: 'ID By High to Low' },
  { value: 'asc-title', label: 'Title By Ascending' },
  { value: 'desc-title', label: 'Title By Descending' },
];

export const ADMIN_USERS_SP: SelectOption[] = [
  { value: 'asc-id', label: 'ID By Low to High' },
  { value: 'desc-id', label: 'ID By High to Low' },
  { value: 'asc-name', label: 'Name By Ascending' },
  { value: 'desc-name', label: 'Name By Descending' },
  { value: 'asc-username', label: 'Username By Ascending' },
  { value: 'desc-username', label: 'Username By Descending' },
  { value: 'asc-status', label: 'Status By Ascending' },
  { value: 'desc-status', label: 'Status By Descending' },
  { value: 'asc-admin', label: 'Admin By Ascending' },
  { value: 'desc-admin', label: 'Admin By Descending' },
];

export const ADMIN_CATEGORIES_SP: SelectOption[] = [
  { value: 'asc-id', label: 'ID By Low to High' },
  { value: 'desc-id', label: 'ID By High to Low' },
  { value: 'asc-name', label: 'Name By Ascending' },
  { value: 'desc-name', label: 'Name By Descending' },
];

export const ADMIN_TAGS_SP: SelectOption[] = [
  { value: 'asc-id', label: 'ID By Low to High' },
  { value: 'desc-id', label: 'ID By High to Low' },
  { value: 'asc-name', label: 'Name By Ascending' },
  { value: 'desc-name', label: 'Name By Descending' },
];
