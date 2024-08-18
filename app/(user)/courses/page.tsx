import { CoursesList } from '@/components/user/courses/CoursesList'
import { getCourses } from '@/db/queries'

const CoursesPage = async () => {
  const courses = await getCourses()
  return (
    <div className="mx-auto w-full max-w-[912px] space-y-6">
      <h1 className="font-display text-2xl font-bold">Мои курсы</h1>
      <CoursesList courses={courses} activeId={1} />
    </div>
  )
}

export default CoursesPage
