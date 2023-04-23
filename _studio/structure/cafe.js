export default Structure => {
	const { divider, editor, list, listItem, documentTypeList, documentTypeListItem } = Structure

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


				
			// .items([
			// 	documentTypeListItem('menuItem'),

			// 	divider(),

			// 	documentTypeListItem('babyFood'),
			// 	documentTypeListItem('coldDrink'),
			// 	documentTypeListItem('hotDrink'),
			// 	documentTypeListItem('salad'),
			// 	documentTypeListItem('sandwich'),
			// 	documentTypeListItem('sweet'),

			// ])
			
			

}