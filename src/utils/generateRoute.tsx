import type { ISidebarItems } from "@/types";

export const generateRoutes = (sidebarItems: ISidebarItems[]) => {
  return sidebarItems.map((section) => ({
    path: section.url,
    Component: section.component,
  }));
};
