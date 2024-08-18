'use client'

import { courses } from '@/db/schema'
import { CoursesListCard } from './CoursesListCard'

type CoursesListProps = {
  courses: (typeof courses.$inferSelect)[]
  activeId?: number
}

export const CoursesList = ({ courses, activeId }: CoursesListProps) => {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(210px,100%),1fr))] gap-4">
      {courses.map((course) => (
        <li key={course.id}>
          <CoursesListCard course={course} activeId={activeId} />
        </li>
      ))}
    </ul>
  )
}
