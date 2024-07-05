import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
  IconTir,
  IconTractor,
  IconSettingsCog,
  IconChecklist,
  IconMap2,
  IconFileAnalytics,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Inicio",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    navlabel: true,
    subheader: "Gestión Administrativa",
  },
  {
    id: uniqueId(),
    title: "Conductores",
    icon: IconUserPlus,
    href: "/conductores",
  },
  {
    id: uniqueId(),
    title: "Vehículos",
    icon: IconTir,
    href: "/vehiculos",
  },
  {
    id: uniqueId(),
    title: "Maquinaria",
    icon: IconTractor,
    href: "/maquinaria",
  },
  {
    id: uniqueId(),
    title: "Mantenimientos",
    icon: IconSettingsCog,
    href: "/mantenimiento",
  },
  {
    navlabel: true,
    subheader: "Gestión de Pedidos",
  },
  {
    id: uniqueId(),
    title: "Clientes",
    icon: IconUserPlus,
    href: "/clientes",
    hrefCreate: "/clientes/nuevo",
  },
  {
    id: uniqueId(),
    title: "Pedidos",
    icon: IconChecklist,
    href: "/pedidos",
  },
  {
    navlabel: true,
    subheader: "Gestión Operativa",
  },
  {
    id: uniqueId(),
    title: "Rutas",
    icon: IconMap2,
    href: "/rutas",
  },
  {
    navlabel: true,
    subheader: "Reportes",
  },
  {
    id: uniqueId(),
    title: "Reportes",
    icon: IconFileAnalytics,
    href: "/reportes",
  },
  // {
  //   navlabel: true,
  //   subheader: "Extra",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Icons",
  //   icon: IconMoodHappy,
  //   href: "/icons",
  // },
];

export default Menuitems;
