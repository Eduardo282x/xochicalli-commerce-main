export const buttonsSelects: Btns[] = [
    {
        label: 'Todas',
        value: 'Todas',
        active: true,
    },
    {
        label: 'Macetas',
        value: 'Macetas',
        active: false,
    },
    {
        label: 'Abonos',
        value: 'Abonos',
        active: false,
    },
    {
        label: 'Plantas',
        value: 'Plantas',
        active: false,
    },
    {
        label: 'Fertilizantes',
        value: 'Fertilizantes',
        active: false,
    },
    {
        label: 'Herramientas',
        value: 'Herramientas',
        active: false,
    }
];

export interface Btns {
    label: string;
    value: string;
    active: boolean;
}