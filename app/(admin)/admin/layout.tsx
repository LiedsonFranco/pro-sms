import React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { ModeToggle } from "@/components/client/Toggle"
import { Slash } from "lucide-react"
import UserProfile from "@/components/UserProfile"

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="border-b p-2">
          <div className="flex">
            <Breadcrumb className="flex w-full justify-between">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <SidebarTrigger className="-ml-1" />
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <ModeToggle />
                </BreadcrumbItem>
              </BreadcrumbList>

              <BreadcrumbList>
                <BreadcrumbItem>
                  <UserProfile />
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
