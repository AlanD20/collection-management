import { SelectOption } from "@/@types/Global";


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
];
