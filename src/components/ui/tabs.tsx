import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const TabsContext = React.createContext<{
  value: string
  setValue: (value: string) => void
} | null>(null)

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue: string
  className?: string
  children: React.ReactNode
}

export function Tabs({ defaultValue, className, children, ...props }: TabsProps) {
  const [value, setValue] = React.useState(defaultValue)
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export function TabsList({ className, children, ...props }: TabsListProps) {
  return (
    <div className={cn("flex gap-2", className)} {...props}>
      {children}
    </div>
  )
}

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  className?: string
  children: React.ReactNode
}

export function TabsTrigger({ value, className, children, ...props }: TabsTriggerProps) {
  const ctx = React.useContext(TabsContext)
  if (!ctx) throw new Error("TabsTrigger must be used within Tabs")
  const isActive = ctx.value === value
  return (
    <button
      type="button"
      className={cn(
        "px-4 py-2 rounded-lg font-semibold text-sm transition-all",
        isActive ? "bg-primary text-primary-foreground shadow" : "bg-muted text-muted-foreground hover:bg-primary/10",
        className
      )}
      aria-selected={isActive}
      aria-controls={`tab-content-${value}`}
      onClick={() => ctx.setValue(value)}
      {...props}
    >
      {children}
    </button>
  )
}

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  className?: string
  children: React.ReactNode
}

export function TabsContent({ value, className, children, ...props }: TabsContentProps) {
  const ctx = React.useContext(TabsContext)
  if (!ctx) throw new Error("TabsContent must be used within Tabs")
  if (ctx.value !== value) return null
  return (
    <div
      id={`tab-content-${value}`}
      className={cn("w-full", className)}
      {...props}
    >
      {children}
    </div>
  )
} 