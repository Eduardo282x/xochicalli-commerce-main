import { NavbarItems } from "@/interfaces";

export const linksData: NavbarItems[] = [
    {
        id: 1,
        text: "Usuarios",
        path: "/admin/user",
        icon: 'person'
    },
    {
        id: 2,
        text: "Ventas",
        path: "/admin/dashboard",
        icon: 'point_of_sale'
    },
    {
        id: 3,
        text: "Backup",
        path: "/admin/backups",
        icon: 'backup'
    },
    {
        id: 4,
        text: "Comentarios",
        path: "/admin/comentarios",
        icon: 'forum'
        // icon: 'comment'
    },
    {
        id: 5,
        text: "Encuestas",
        path: "/admin/encuestas",
        icon: 'contract_edit'
    },
    {
        id: 5,
        text: "Blog",
        path: "/admin/blog-create",
        icon: 'text_snippet'
    },
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



