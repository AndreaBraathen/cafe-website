export default {
   title: 'Menu Item',
   name: 'menuItem',
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
      // {
      //    title: 'Menu selection',
      //    name: 'menuSelection',
      //    type: 'array',
      //    of: [
      //       {
      //          type: 'reference',
      //          to: [
      //             {
      //                type: 'babyFood'
      //             },
      //             {
      //                type: 'coldDrink'
      //             },
      //             {
      //                type: 'hotDrink'
      //             },
      //             {
      //                type: 'salad'
      //             },
      //             {
      //                type: 'sandwich'
      //             },
      //             {
      //                type: 'sweet'
      //             },
      //          ]
      //       }
      //    ]
      // },
   ]
}
