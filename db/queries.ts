import { cache } from 'react'
import db from './drizzle'

export const getCourses = cache(async () => await db.query.courses.findMany())

export const getCourseById = cache(
  async (courseId: number) =>
    await db.query.courses.findFirst({
      where: ({ id }, { eq }) => eq(id, courseId),
    })
)
