"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { TeamSwitcher } from "./team-switcher";
import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";
import { dashboardMenu } from "@/data/dashboard-menu";

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" dir="" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={dashboardMenu.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={dashboardMenu.navMain} />
        <NavProjects projects={dashboardMenu.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={dashboardMenu.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
