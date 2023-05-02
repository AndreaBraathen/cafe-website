export default {
   title: 'Hot Drink',
   name: 'hotDrink',
   type: 'document',
   fields: [
      {
         title: 'Name',
         name: 'name',
         type: 'string',
      },
      {
         title: 'Slug',
         name: 'slug',
         type: 'slug',
         options: {
				source: 'name'
			}
      },
      {
         title: 'Price',
         name: 'price',
         type: 'number',
         description: 'Prices in U.S. dollar',
      },
      {
         title: 'Image',
         name: 'image',
         type: 'image',
      },
      {
         title: 'Description',
         name: 'description',
         type: 'text',
      },
      {
         title: 'Ingredients',
         name: 'ingedients',
         type: 'text',
      },
      {
         title: 'Allergens',
         name: 'allergens',
         type: 'array',
         of: [
            {
               type: 'reference',
               to: [
                  {
                     type: 'allergen'
                  }
               ]
            }
         ]
      },
      {
         title: 'May Contain Traces of',
         name: 'mayContainTracesOf',
         type: 'array',
         of: [
            {
               type: 'reference',
               to: [
                  {
                     type: 'allergen'
                  }
               ]
            }
         ]
      },
      {
         title: 'Category',
         name: 'category',
			type: 'array',
			of: [
				{
					type: 'reference',
               to: [
                  {
                     type: 'category'
                  }
               ]
				}
			]
      }

   ]
}
