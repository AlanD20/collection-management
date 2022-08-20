import { SelectOption } from '@/@types/Global';

export const CUSTOM_FIELD_TYPES_SP = () => [
  { value: 'text', label: __('dropdown.text') },
  { value: 'textarea', label: __('dropdown.textarea') },
  { value: 'number', label: __('dropdown.number') },
  { value: 'checkbox', label: __('dropdown.checkbox') },
  { value: 'datetime', label: __('dropdown.datetime') },
];

export const U_COLLECTIONS_SP: () => SelectOption[] = () => [
  {
    value: 'asc-created_at',
    label: __('dropdown.old_created_col'),
  },
  {
    value: 'desc-created_at',
    label: __('dropdown.new_created_col'),
  },
  {
    value: 'asc-updated_at',
    label: __('dropdown.old_updated_col'),
  },
  {
    value: 'desc-updated_at',
    label: __('dropdown.new_updated_col'),
  },
  { value: 'asc-id', label: __('dropdown.low_to_high_id') },
  { value: 'desc-id', label: __('dropdown.high_to_low_id') },
  { value: 'asc-title', label: __('dropdown.asc_title') },
  { value: 'desc-title', label: __('dropdown.desc_title') },
  { value: 'asc-category', label: __('dropdown.asc_category') },
  { value: 'desc-category', label: __('dropdown.desc_category') },
  { value: 'asc-items', label: __('dropdown.asc_item_count') },
  { value: 'desc-items', label: __('dropdown.desc_item_count') },
];

export const U_ITEMS_SP: () => SelectOption[] = () => [
  {
    value: 'asc-created_at',
    label: __('dropdown.old_created_item'),
  },
  {
    value: 'desc-created_at',
    label: __('dropdown.new_created_item'),
  },
  {
    value: 'asc-updated_at',
    label: __('dropdown.old_updated_item'),
  },
  {
    value: 'desc-updated_at',
    label: __('dropdown.new_updated_item'),
  },
  { value: 'asc-id', label: __('dropdown.low_to_high_id') },
  { value: 'desc-id', label: __('dropdown.high_to_low_id') },
  { value: 'asc-title', label: __('dropdown.asc_title') },
  { value: 'desc-title', label: __('dropdown.desc_title') },
];

export const ADMIN_USERS_SP: () => SelectOption[] = () => [
  { value: 'asc-id', label: __('dropdown.low_to_high_id') },
  { value: 'desc-id', label: __('dropdown.high_to_low_id') },
  { value: 'asc-name', label: __('dropdown.asc_name') },
  { value: 'desc-name', label: __('dropdown.desc_name') },
  { value: 'asc-username', label: __('dropdown.asc_username') },
  { value: 'desc-username', label: __('dropdown.desc_username') },
  { value: 'asc-status', label: __('dropdown.asc_status') },
  { value: 'desc-status', label: __('dropdown.desc_status') },
  { value: 'asc-admin', label: __('dropdown.asc_admin') },
  { value: 'desc-admin', label: __('dropdown.desc_admin') },
];

export const ADMIN_CATEGORIES_SP: () => SelectOption[] = () => [
  { value: 'asc-id', label: __('dropdown.low_to_high_id') },
  { value: 'desc-id', label: __('dropdown.high_to_low_id') },
  { value: 'asc-name', label: __('dropdown.asc_name') },
  { value: 'desc-name', label: __('dropdown.desc_name') },
];

export const ADMIN_TAGS_SP: () => SelectOption[] = () => [
  { value: 'asc-id', label: __('dropdown.low_to_high_id') },
  { value: 'desc-id', label: __('dropdown.high_to_low_id') },
  { value: 'asc-name', label: __('dropdown.asc_name') },
  { value: 'desc-name', label: __('dropdown.desc_name') },
];

export const MAIN_USERS_SP: () => SelectOption[] = () => [
  { value: 'asc-id', label: __('dropdown.low_to_high_id') },
  { value: 'desc-id', label: __('dropdown.high_to_low_id') },
  { value: 'asc-name', label: __('dropdown.asc_name') },
  { value: 'desc-name', label: __('dropdown.desc_name') },
  { value: 'asc-username', label: __('dropdown.asc_username') },
  { value: 'desc-username', label: __('dropdown.desc_username') },
  { value: 'asc-created_at', label: __('dropdown.old_created_acc') },
  { value: 'desc-created_at', label: __('dropdown.new_created_acc') },
  { value: 'asc-updated_at', label: __('dropdown.old_updated_acc') },
  { value: 'desc-updated_at', label: __('dropdown.new_updated_acc') },
];
