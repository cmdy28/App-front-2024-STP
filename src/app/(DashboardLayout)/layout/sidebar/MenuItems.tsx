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
    subheader: "Gestión Administrativa",
  },
  {
    id: uniqueId(),
    title: "Conductores",
    icon: IconUserPlus,
    href: "/conductores",
    hrefCreate: "/conductores/nuevo",
    hrefEdit: "/conductores/editar"
  },
  {
    id: uniqueId(),
    title: "Vehículos",
    icon: IconTir,
    href: "/vehiculos",
    hrefCreate: "/vehiculos/nuevo",
    hrefEdit: "/vehiculos/editar"
  },
  // {
  //   id: uniqueId(),
  //   title: "Maquinaria",
  //   icon: IconTractor,
  //   href: "/maquinaria",
  // },
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
    hrefEdit: "/clientes/editar"

  },
  {
    id: uniqueId(),
    title: "Pedidos",
    icon: IconChecklist,
    href: "/pedidos",
    hrefCreate: "/pedidos/nuevo",
    hrefEdit: "/pedidos/editar"
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
    hrefCreate: "/rutas/nuevo",
    hrefEdit: "/rutas/editar"
  },
  {
    id: uniqueId(),
    title: "Mantenimientos",
    icon: IconSettingsCog,
    href: "/mantenimientos",
    hrefCreate: "/mantenimientos/nuevo",
    hrefEdit: "/mantenimientos/editar"
  },
  {
    navlabel: true,
    subheader: "Reportes",
  },
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
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
