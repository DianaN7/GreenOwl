import { Atom, Earth, Trophy, Zap } from 'lucide-react'
import { AnimatedTitle } from '@/components/motion/AnimatedTitle'
import { ReasonsItem } from '@/components/landing/ReasonsItem'

export function Reasons() {
  return (
    <section className="space-y-28 px-1 pb-1">
      <AnimatedTitle>
        <h2 className="heading-section">
          Изучение <span className="text-highlight-depth">языков с нами</span>{' '}
          <span className="relative inline-block before:absolute before:-bottom-0 before:-right-[0.6em] before:-z-1 before:size-[1.375em] before:rounded-full before:bg-primary-light/60">
            это
          </span>
        </h2>
      </AnimatedTitle>
      <ul className="sm:text:text-3xl space-y-1 text-2xl md:text-4xl">
        <li>
          <ReasonsItem
            className="bg-primary/80 text-primary-dark hover:bg-primary/65 dark:hover:bg-primary"
            reason="Эффективное быстрое обучение"
          >
            <Zap />
          </ReasonsItem>
        </li>
        <li>
          <ReasonsItem
            className="bg-secondary/60 text-secondary-depth hover:bg-secondary/40 dark:bg-secondary/85 dark:hover:bg-secondary"
            reason="Глубокое погружение в язык"
            delay={0.2}
          >
            <Atom />
          </ReasonsItem>
        </li>
        <li>
          <ReasonsItem
            className="bg-highlight/60 text-highlight-depth hover:bg-highlight/40 dark:bg-highlight/85 dark:hover:bg-highlight"
            reason="Интересные вызовы и челленджи"
            delay={0.3}
          >
            <Trophy />
          </ReasonsItem>
        </li>
        <li>
          <ReasonsItem
            className="bg-primary-light/60 text-primary-depth hover:bg-primary-light/40 dark:hover:bg-primary-light"
            reason="Изучайте языки с Green Owl где бы вы ни находились"
            delay={0.4}
          >
            <Earth />
          </ReasonsItem>
        </li>
      </ul>
    </section>
  )
}
