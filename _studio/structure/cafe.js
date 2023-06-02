export default Structure => {
	const { divider, editor, list, listItem, documentTypeList, documentTypeListItem } = Structure

	// How Sanity is grouped
	// https://www.sanity.io/docs/manually-group-items-in-a-pane

	return list()
			.title('Cafe Content')
			.showIcons(false)
			.items([
				listItem()
				.title('Menu Item')
				.child(
					list()
					.showIcons(false)
					.title('Menu')
					.items([
						listItem()
							.title('Hot Drink')
							.child(
								documentTypeList('hotDrink'),
							),
						listItem()
							.title('Cold Drink')
							.child(
								documentTypeList('coldDrink'),
							),
						listItem()
							.title('Food')
							.child(
								documentTypeList('food'),
							),    	
					])
				),

				divider(),

				documentTypeListItem('category'),
				documentTypeListItem('allergen'),
			])
}