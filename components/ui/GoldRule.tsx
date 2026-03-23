import { cn } from '@/lib/utils'

interface GoldRuleProps {
  className?: string
}

export default function GoldRule({ className }: GoldRuleProps) {
  return (
    <div
      className={cn('w-12 h-0.5 rounded-sm bg-honey my-7', className)}
      aria-hidden="true"
    />
  )
}
