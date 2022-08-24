## Personal Collection Management

### [LIVE Demo](https://a20-collection-management.herokuapp.com)


## Main Goals:
- [x] A collection has many items.
- [x] Single category has many collections.
- [x] Each item supports tags.
- [x] Single tag belongs to many items.
- [x] Like and comment for each item in the collection.
- [x] Must support two languages.
- [x] Support two visual themes (dark, light).
- [x] Must be responsive.
- [x] Each Collection has
	- [x] Name.
	- [s] Description with markdown supported.
	- [x] Topic is a one value from the predefined list, like "Books", "Signs" (Categories managed by admins).
	- [x] Thumbnail to the collection which is an optional field.
- [x] A Collection allows custom fields that each item in the collection must have:
	- [x] Fixed fields are: id, name, tags.
	- [x] Custom fields which the creator of the collection may allow are 3 fields of each (integer, string, multi-line, boolean, date).
	- [x] The creator of the collection also specifies the name of the custom fields.

#### Everyone:
- [x] Search including tag search.
- [x] View items.
- [x] Can not post comments, likes, but they are viewable by everyone.

#### Auth Users:
- [x] Manage its own items.
- [x] Can likes and commetns.
- [x] Cannot see admin panel.

#### Admin Users:
- [x] Can manage all the items as the author, like managing other user's items.

#### Admin Panel:
- [x] Allows user management such as view, block, unblock, delete a user.
- [x] Promote/demote admin role, even from themselvies.

#### UI:
- [x] List of the latest items (name, collections, authors)
- [x] List of top 5 largest collection
- [x] Tag search (should work like the search result)
- [x] Tags are clickable which shows all the items with the clicked tag.
- [x] Register/Login form.
- [x] Each item has comments at the bottom of the item page.
- [x] Must support live comments.
- [x] Likes from users.
- [x] All pages are accessible from the nav bar.
- [x] Search bar.
- [x] Search results are links to the items itself, even if the text found in the comment section of the item.
- [x] Personal page for each user where they can manage their collections and items. Each collection is a clickable link where it goes to the collection page. The page has a table of each items in the collection with sorting/filtering capabilities and managing items in the collection.
- [x] When adding tags to the item, it must auto-complete it.			

#### Optionals:
- [x] Auth via social media.
- [x] Custom fields with types chosen by the user.
- [x] Adding more than 3 custom fields.
- [ ] Exporting a collection to a CSV File.


### Commands:
- Export Laravel's language file to a single json file.
```bash
php artisan lang:export [language directory]
php artisan lang:export en # Example
```
- Clear Caches.
```bash
yarn cache:clear
```
- Drop all tables and seed the database.
```bash
yarn db:fresh
```
- Formatting Syntax.
```bash
yarn format:js
yarn format:php
```



## License

This repository is under [MIT LICENSE](LICENSE)
