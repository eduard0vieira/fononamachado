import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: string
  className?: string
  light?: boolean
}

export default function SectionLabel({ children, className, light = false }: SectionLabelProps) {
  return (
    <p
      className={cn(
        'text-[0.68rem] font-semibold tracking-[0.2em] uppercase mb-3',
        light ? 'text-honey-light' : 'text-honey',
        className,
      )}
    >
      {children}
    </p>
  )
}
