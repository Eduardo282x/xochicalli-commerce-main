import { NavbarItems } from "@/interfaces";

export const linksData: NavbarItems[] = [
    {
        id: 1,
        text: "Usuarios",
        path: "/admin/user",
        icon: 'person',
        active: false
    },
    {
        id: 2,
        text: "Ventas",
        path: "/admin/dashboard",
        icon: 'point_of_sale',
        active: false
    },
    {
        id: 3,
        text: "Backup",
        path: "/admin/backups",
        icon: 'backup',
        active: false
    },
    {
        id: 4,
        text: "Comentarios",
        path: "/admin/comentarios",
        icon: 'forum',
        active: false
        // icon: 'comment'
    },
    {
        id: 5,
        text: "Encuestas",
        path: "/admin/encuestas",
        icon: 'contract_edit',
        active: false
    },
    {
        id: 6,
        text: "Blog",
        path: "/admin/blog-create",
        icon: 'text_snippet',
        active: false
    },
    {
        id: 7,
        text: "Productos",
        path: "/admin/products",
        icon: 'potted_plant',
        active: false
    },
    {
        id: 8,
        text: "Agregar producto",
        path: "/admin/add",
        icon: 'add',
        active: false
    }
];

export const selectProductsData: NavbarItems[] = [
    {
        id: 1,
        text: "Agregar producto",
        path: "/admin/add",
        icon: ''
    },
    {
        id: 2,
        text: "Productos",
        path: "/admin/products",
        icon: ''
    }
];



