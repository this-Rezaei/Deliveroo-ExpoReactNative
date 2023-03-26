import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of dish',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'Short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price of the dish description',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image of the Dish',
      type: 'array',
      of: [{type: 'image'}],
    },
  ],
})
