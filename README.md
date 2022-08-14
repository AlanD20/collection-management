## Personal Collection Management

### [LIVE Demo](https://a20-collection-management.herokuapp.com)


## Main Goals:
- [x] A collection may have many items.
- [x] Single item.
- [x] Each item supports tags.
- [x] Like and comment for each items in the collection.
- [ ] Must support two languages.
- [ ] Support two visual themes (dark, light).
- [ ] Must be responsive.
- [x] Each Collection has
	- Name.
	- Description with markdown supported.
	- Topic is a one value from the predefined list, like "Books", "Signs".
	- Thumbnail to the collection which is an optional field.
- [x] A Collection allows custom fields that each item in the collection must have:
	- Fixed fields are: id, name, tags.
	- Custom fields which the creator of the collection may allow are 3 fields of each (integer, string, multi-line, boolean, date).
	- The creator of the collection also specifies the name of the custom fields.

#### Everyone:
- Search including tag search.
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
- [ ] List of the latest items (name, collections, authors)
- [ ] List of top 5 largest collection
- [ ] Tag search (should work like the search result)
- [ ] Tags are clickable which shows all the items with the clicked tag.
- [x] Register/Login form.
- [x] Each item has comments at the bottom of the item page.
- [ ] Must support live comments.
- [x] Likes from users.
- [ ] All pages are accessible from the nav bar.
- [ ] Search bar.
- [ ] Search results are links to the items itself, even if the text found in the comment section of the item.
- [x] Personal page for each user where they can manage their collections and items. Each collection is a clickable link where it goes to the collection page. The page has a table of each items in the collection with sorting/filtering capabilities and managing items in the collection.
- [x] When adding tags to the item, it must auto-complete it.			

#### Optionals:
- Auth via social media.
- [x] Custom fields with types chosen by the user.
- [x] Adding more than 3 custom fields.
- Exporting a collection to a CSV File.


### Packages:

- [Laravel-Markdown](https://github.com/GrahamCampbell/Laravel-Markdown)

## License

This repository is under [MIT LICENSE](LICENSE)
