
import React from "react"
import { Root, Indicator } from "@radix-ui/react-progress"
import cn from "../../utils/cn"


const Progress = React.forwardRef<
  React.ComponentRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>(({ className, value, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-violet-500/20",
      className
    )}
    {...props}
  >
    <Indicator
      className="h-full w-full flex-1 bg-violet-500 transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </Root>
))
Progress.displayName = Root.displayName

export { Progress }
