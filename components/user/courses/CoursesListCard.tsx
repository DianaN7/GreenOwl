import NextImage from 'next/image'
import type { CourseType, UserProgressType } from '@/db/schema'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { AspectRatio } from '@/components/ui/aspect-ratio'

type CoursesListCardProps = {
  course: CourseType
  activeId?: UserProgressType['activeCourseId']
}

export const CoursesListCard = ({ activeId, course }: CoursesListCardProps) => {
  const { id, title, altCode } = course
  const labelId = `${title}-${id}`
  const isActive = id === activeId

  const { push } = useRouter()
  const [pending, startTransition] = useTransition()

  return (
    <div className="relative">
      <Checkbox
        checked={isActive}
        id={labelId}
        className={`absolute right-3 top-3 size-7 rounded-md focus-visible:ring-0 [&_svg]:stroke-[4] ${isActive ? 'opacity-100' : 'opacity-0 disabled:opacity-0'}`}
        onClick={() => {}}
        disabled={pending}
      />
      <label
        htmlFor={labelId}
        className="flex min-h-[217px] cursor-pointer flex-col items-center justify-center gap-y-6 rounded-xl border-2 border-b-4 bg-card px-[30%] pb-6 pt-14 font-bold text-card-foreground ring-offset-background transition-colors hover:bg-border/60 active:border-2 peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 peer-disabled:hover:bg-card peer-disabled:active:border-b-4"
      >
        <AspectRatio ratio={3 / 2}>
          <NextImage
            src={`/img/flags/${altCode}.svg`}
            alt={`${title} flag`}
            fill
            className="rounded-md border object-cover drop-shadow-md"
          />
        </AspectRatio>
        <span>{title}</span>
      </label>
    </div>
  )
}
