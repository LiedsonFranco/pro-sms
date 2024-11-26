import * as React from "react"
import { GalleryVerticalEnd } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
// This is sample data.
const data = {
  navMain: [
    {
      title: "Overview",
      url: "/admin",
    },
    {
      title: "Cadastro",
      url: "#",
      items: [
        {
          title: "Clientes",
          url: "/admin/clients",
        },
        {
          title: "Grupos",
          url: "/admin/groups/new",
        },
        {
          title: "Templates",
          url: "/admin/messages/templates",
        },
        {
          title: "usuarios",
          url: "/admin/users/new",
        },
      ],
    },
    {
      title: "Enviar Mensagens",
      url: "#",
      items: [
        {
          title: "Normais",
          url: "/admin/messages",
        },
        {
          title: "Por grupos",
          url: "/admin/messages/groups",
        },
        {
          title: "Baseadas em templates",
          url: "/admin/messages/templates/send",
        },
        {
          title: "Por grupos por templates",
          url: "/admin/messages/templates/send/groups",
        },
      ],
    },
    {
      title: "Listar",
      url: "#",
      items: [
        {
          title: "Clientes",
          url: "/admin/clients/list",
        },
        {
          title: "Grupos",
          url: "/admin/groups/list",
        },
        {
          title: "Templates",
          url: "/admin/messages/templates/list",
        },
        {
          title: "Usuarios",
          url: "/admin/users/list",
        },
        {
          title: "Mensagens",
          url: "/admin/messages/list",
        },
      ],
    },
    {
      title: "Comprar Saldo",
      url: "/admin/balance/buy",
    },
    {
      title: "Configurações",
      url: "/admin/config",
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">SMS-app</span>
                  <span className="">v0.6.1</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-bold">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
      </SidebarFooter>
    </Sidebar>
  )
}
