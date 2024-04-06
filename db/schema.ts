import { pgTable, serial, text } from 'drizzle-orm/pg-core'

export const courses = pgTable('courses', {
  id: serial('id').primaryKey(),
  text: text('title').notNull(),
  imageSrc: text('image_src').notNull(),
})
