"use client"

import * as React from "react"
import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { authClient } from "@/lib/auth-client"
import Link from "next/link"
import { User } from "@/types/user.type"

// This is sample data.


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const {data : session , isPending} = authClient.useSession() ;

  const user :User = session?.user
  const versions = ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"]

  const providerRoute = [

    { title : "Dashboard",url : "/provider-dashboard" },
    { title : "My Meals", url : "/provider-dashboard/my-meals"
    },
    { title : "Add Meal", url : "/provider-dashboard/add-meal"
    },
    { title : "My Profile", url : "/provider-dashboard/my-profile" },
    
  ]

  const adminRoutes = [

    { title : "Dashboard", url : "/admin-dashboard"},
    { title : "All Meals", url : "/admin-dashboard/all-meals"},
    { title : "All Users", url : "/admin-dashboard/all-users"},
    { title : "My Profile", url : "/admin-dashboard/my-profile" },

  ]

  const navMain = [

    {
      title: "Getting Started",
      url: "#",
      items: user?.role == 'provider' ? providerRoute
            : user?.role == 'admin' ? adminRoutes
            : []
    },
  ]

  
  if(isPending) return null

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={versions}
          defaultVersion={versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
