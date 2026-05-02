"use client"

import { FolderOpen, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
  className?: string
}

export function ProjectSidebar({ isOpen, onClose, className }: ProjectSidebarProps) {
  return (
    <aside
      className={cn(
        "fixed left-0 top-12 z-30 flex h-[calc(100vh-3rem)] w-72 flex-col border-r border-surface-border bg-elevated/95 backdrop-blur-sm transition-transform duration-200",
        isOpen ? "translate-x-0" : "-translate-x-full",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-surface-border px-4 py-3">
        <span className="text-sm font-medium text-copy-primary">Projects</span>
        <Button variant="ghost" size="icon-sm" onClick={onClose}>
          <X className="h-4 w-4" />
          <span className="sr-only">Close sidebar</span>
        </Button>
      </div>

      <div className="flex flex-1 flex-col overflow-hidden px-3 py-3">
        <Tabs defaultValue="my-projects" className="flex flex-1 flex-col">
          <TabsList className="w-full">
            <TabsTrigger value="my-projects" className="flex-1">
              My Projects
            </TabsTrigger>
            <TabsTrigger value="shared" className="flex-1">
              Shared
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="my-projects"
            className="flex flex-1 flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-3 py-8 text-center">
              <FolderOpen className="h-8 w-8 text-copy-faint" />
              <p className="text-sm text-copy-muted">No projects yet</p>
            </div>
          </TabsContent>

          <TabsContent
            value="shared"
            className="flex flex-1 flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-3 py-8 text-center">
              <FolderOpen className="h-8 w-8 text-copy-faint" />
              <p className="text-sm text-copy-muted">No shared projects</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="border-t border-surface-border p-3">
        <Button className="w-full gap-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </aside>
  )
}
