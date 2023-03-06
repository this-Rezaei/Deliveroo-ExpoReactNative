import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Deliveroo-app',

  projectId: 'ntez7rqd',
  dataset: 'deliveroo-data',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
