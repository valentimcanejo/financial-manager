import { Users, Settings, LayoutGrid, LucideIcon, Home } from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "",
          label: "Página Inicial",
          icon: Home,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          icon: LayoutGrid,
        },
        {
          href: "/usuarios",
          label: "Usuários",
          icon: Users,
        },
        {
          href: "/configuracoes",
          label: "Configurações",
          icon: Settings,
        },
      ],
    },
  ];
}
