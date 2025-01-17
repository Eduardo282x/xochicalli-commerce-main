import { CategoryData, InputData } from "./interface";

const flores: InputData[] = [
    {
        name: "Especie",
        type: "text",
        component: "input",
    },
    {
        name: "Variedad",
        type: "text",
        component: "input",
    },
    {
        name: "Descripción",
        type: "text",
        component: "input",
    },
    {
        name: "Marca",
        type: "text",
        component: "input",
    },
    {
        name: "Aroma",
        type: "text",
        component: "input",
    },
    {
        name: "Disponibilidad",
        type: "text",
        component: "select",
        option: ["Por temporada", "Aromática", "Exóticas"],
    },
    {
        name: "Floración",
        type: "text",
        component: "input",
    },
    {
        name: "Tiempo de vida",
        type: "text",
        component: "input",
    },
    {
        name: "Estado",
        type: "text",
        component: "input",
    },
    {
        name: "Altura",
        type: "number",
        component: "duplex",
        option: ["Cm", "Mm"],
    },
    {
        name: "Presentación",
        type: "text",
        component: "input",
    },
    {
        name: "instrucciones",
        type: "text",
        component: "tags",
    },
    {
        name: "Recomendaciones",
        type: "text",
        component: "tags",
    },
];

const semillas: InputData[] = [
    {
        name: "Especie",
        type: "text",
        component: "input",
    },
    {
        name: "Variedad",
        type: "text",
        component: "input",
    },
    {
        name: "Cantidad",
        type: "number",
        component: "input",
    },
    {
        name: "Presentación",
        type: "text",
        component: "select",
        option: ["bolsa", "caja", "paquete", "sobre"],
    },
    {
        name: "Peso",
        type: "number",
        component: "duplex",
        option: ["Gramos", "Miligramos"],
    },
];

export const dataInputs: Record<string, CategoryData> = {
    INSUMOS: {
        Fertilizantes: [
            {
                name: "Presentación",
                type: "text",
                component: "select",
                option: ["Bolsa", "Caja", "Paquete"],
            },
            {
                //No debe ser un numero negativo
                name: "Contenido",
                type: "number",
                component: "duplex",
                option: ["Kg", "Gr", "L", "Ml"],
            },
            {
                name: "Material",
                type: "text",
                component: "input",
            },
            {
                name: "Graduacion",
                type: "number",
                component: "pin",
            },
            {
                name: "instrucciones",
                type: "text",
                component: "tags",
            },
            {
                name: "Recomendaciones",
                type: "text",
                component: "tags",
            },
        ],
        Abonos: [
            {
                name: "Presentación",
                type: "text",
                component: "select",
                option: ["Bolsa", "Envase", "Sobre"],
            },
            {
                //No debe ser un numero negativo
                name: "Contenido",
                type: "number",
                component: "duplex",
                option: ["Kg", "Gr", "L", "Ml"],
            },
            {
                name: "instrucciones",
                type: "text",
                component: "tags",
            },
            {
                name: "Recomendaciones",
                type: "text",
                component: "tags",
            },
        ],
        Macetas: [
            {
                name: "Material",
                type: "text",
                component: "input",
            },
            {
                name: "Color",
                type: "text",
                component: "input",
            },
            {
                name: "Tamaño",
                type: "number",
                component: "select",
                option: ["#1", "#2", "#3", "#4", "#5", "#6"],
            },
            {
                //No debe ser un numero negativo
                name: "Altura",
                type: "number",
                component: "duplex",
                option: ["M", "Cm"],
            },
            {
                //No debe ser un numero negativo
                name: "Diametro",
                type: "number",
                component: "duplex",
                option: ["M", "Cm"],
            },
            {
                //No debe ser un numero negativo
                name: "Capacidad",
                type: "number",
                component: "duplex",
                option: ["Kg", "Gr",  "L",  "Ml"],
            },
        ],
        Tratamientos: [
            {
                name: "Presentación",
                type: "text",
                component: "select",
                option: ["Bolsa", "Envase", "Sobre"],
            },
            {
                //No debe ser un numero negativo
                name: "Contenido",
                type: "number",
                component: "duplex",
                option: ["Kg", "Gr", "L", "Ml"],
            },
            {
                name: "Material",
                type: "text",
                component: "input",
            },
            {
                name: "instrucciones",
                type: "text",
                component: "tags",
            },
            {
                name: "Recomendaciones",
                type: "text",
                component: "tags",
            },
            {
                name: "Precauciónes",
                type: "text",
                component: "tags",
            },
        ],
        Herramientas: [
            {
                name: "Material",
                type: "text",
                component: "input",
            },
            {
                name: "Color",
                type: "text",
                component: "input",
            },
            {
                name: "Tamaño",
                type: "text",
                component: "select",
                option: ["Grande", "Mediano", "Chico"],
            },
            {
                //No debe ser un numero negativo
                name: "Altura",
                type: "number",
                component: "duplex",
                option: ["M", "Cm"],
            },
            {
                //No debe ser un numero negativo
                name: "Ancho",
                type: "number",
                component: "duplex",
                option: ["Cm", "M"],
            },
            {
                //No debe ser un numero negativo
                name: "Codigo",
                type: "text",
                component: "input",
            },
        ],
    },

    //Esta parte no se muestra y debe ser corregida segun el documento PowerPoint
    FLORES: {
        Rosas: [
            {
                name: "Especie",
                type: "text",
                component: "input",
            },
            {
                name: "Aroma",
                type: "text",
                component: "input",
            },
            {
                name: "Disponibilidad",
                type: "text",
                component: "select",
                option: ["Por temporada", "Por Pedido", "Disponible todo el año"],
            },
            {
                name: "Floración",
                type: "text",
                component: "input",
            },
            {
                name: "Tiempo de vida",
                type: "text",
                component: "input",
            },
            {
                name: "Estado",
                type: "text",
                component: "input",
            },
            {
                //No debe ser un numero negativo
                name: "Altura",
                type: "number",
                component: "duplex",
                option: ["M", "Cm"],
            },
            {
                name: "Presentación",
                type: "text",
                component: "input",
            },
            {
                name: "instrucciones",
                type: "text",
                component: "tags",
            },
        ],
        Petalos: [
            {
                name: "Especie",
                type: "text",
                component: "input",
            },
            {
                name: "Aroma",
                type: "text",
                component: "input",
            },
            {
                name: "Disponibilidad",
                type: "text",
                component: "select",
                option: ["Por temporada", "Aromática", "Exóticas"],
            },
            {
                name: "Floración",
                type: "text",
                component: "input",
            },
            {
                name: "Tiempo de vida",
                type: "text",
                component: "input",
            },
            {
                name: "Estado",
                type: "text",
                component: "input",
            },
            {
                //No debe ser un numero negativo
                name: "Altura",
                type: "number",
                component: "duplex",
                option: ["Cm", "Mm"],
            },
            {
                name: "Presentación",
                type: "text",
                component: "input",
            },
            {
                name: "instrucciones",
                type: "text",
                component: "tags",
            },
        ],
        Claveles: [
            {
                name: "Especie",
                type: "text",
                component: "input",
            },
            {
                name: "Aroma",
                type: "text",
                component: "input",
            },
            {
                name: "Disponibilidad",
                type: "text",
                component: "select",
                option: ["Por temporada", "Aromática", "Exóticas"],
            },
            {
                name: "Floración",
                type: "text",
                component: "input",
            },
            {
                name: "Tiempo de vida",
                type: "text",
                component: "input",
            },
            {
                name: "Estado",
                type: "text",
                component: "input",
            },
            {
                //No debe ser un numero negativo
                name: "Altura",
                type: "number",
                component: "duplex",
                option: ["Cm", "Mm"],
            },
            {
                name: "Presentación",
                type: "text",
                component: "input",
            },
            {
                name: "instrucciones",
                type: "text",
                component: "tags",
            },
        ]
    },
    PLANTAS: {
        Arbustos: [
            {
                name: "Especie",
                type: "text",
                component: "input",
            },
            {
                name: "Variedad",
                type: "text",
                component: "input",
            },
            {
                name: "Floración",
                type: "text",
                component: "input",
            },
            {
                //No debe ser un numero negativo
                name: "Edad",
                type: "number",
                component: "duplex",
                option: ["Dias", "Semanas", "Meses", "Años"],
            },
            {
                name: "Estado",
                type: "text",
                component: "input",
            },
            {
                //No debe ser un numero negativo
                name: "Altura",
                type: "number",
                component: "duplex",
                option: ["M", "Cm"],
            },
            {
                //No debe ser un numero negativo
                name: "Ancho",
                type: "number",
                component: "duplex",
                option: ["M", "Cm"],
            },
            {
                name: "Presentación",
                type: "text",
                component: "select",
                option: [
                    "Maceta #1",
                    "Maceta #2",
                    "Maceta #3",
                    "Maceta #4",
                    "Maceta #5",
                ],
            },
            {
                name: "Recomendaciones",
                type: "text",
                component: "tags",
            },
            {
                name: "Precauciónes",
                type: "text",
                component: "tags",
            },
            
        ],
        Arboles: [
            {
                name: "Especie",
                type: "text",
                component: "input",
            },
            {
                name: "Variedad",
                type: "text",
                component: "input",
            },
            {
                name: "Floración",
                type: "text",
                component: "input",
            },
            {
                //No debe ser un numero negativo
                name: "Edad",
                type: "number",
                component: "duplex",
                option: ["Dias", "Semanas", "Meses", "Años"],
            },
            {
                name: "Estado",
                type: "text",
                component: "input",
            },
            {
                //No debe ser un numero negativo
                name: "Altura",
                type: "number",
                component: "duplex",
                option: ["M", "Cm"],
            },
            {
                //No debe ser un numero negativo
                name: "Ancho",
                type: "number",
                component: "duplex",
                option: ["M", "Cm"],
            },
            {
                name: "Presentación",
                type: "text",
                component: "select",
                option: [
                    "Maceta #1",
                    "Maceta #2",
                    "Maceta #3",
                    "Maceta #4",
                    "Maceta #5",
                ],
            },
            {
                name: "Recomendaciones",
                type: "text",
                component: "tags",
            },
            {
                name: "Precauciónes",
                type: "text",
                component: "tags",
            },
        ],
        Orquídeas: [
            {
                name: "Especie",
                type: "text",
                component: "input",
            },
            {
                name: "Variedad",
                type: "text",
                component: "input",
            },
            {
                name: "Floración",
                type: "text",
                component: "input",
            },
            {
                //No debe ser un numero negativo
                name: "Edad",
                type: "number",
                component: "duplex",
                option: ["Dias", "Semanas", "Meses", "Años"],
            },
            {
                name: "Estado",
                type: "text",
                component: "input",
            },
            {
                //No debe ser un numero negativo
                name: "Altura",
                type: "number",
                component: "duplex",
                option: ["M", "Cm"],
            },
            {
                //No debe ser un numero negativo
                name: "Ancho",
                type: "number",
                component: "duplex",
                option: ["M", "Cm"],
            },
            {
                name: "Presentación",
                type: "text",
                component: "select",
                option: [
                    "Maceta #1",
                    "Maceta #2",
                    "Maceta #3",
                    "Maceta #4",
                    "Maceta #5",
                ],
            },
            {
                name: "Recomendaciones",
                type: "text",
                component: "tags",
            },
            {
                name: "Precauciónes",
                type: "text",
                component: "tags",
            },
        ],
    },
    SEMILLAS: {
        Semilla: [
            {
                name: "Especie",
                type: "text",
                component: "input",
            },
            {
                name: "Variedad",
                type: "text",
                component: "input",
            },
            {
                //No debe ser un numero negativo
                name: "Cantidad",
                type: "number",
                component: "input",
            },
            {
                name: "Presentación",
                type: "text",
                component: "select",
                option: ["Bolsa", "Envase", "Sobre"]
            },
            {
                //No debe ser un numero negativo
                name: "Peso",
                type: "number",
                component: "duplex",
                option: ["Kg", "Gr"],
            },
        ],
    },
};

export const dataInputsOld: Record<string, CategoryData> = {
    INSUMOS: {
        Fertilizantes: [
            {
                name: "Presentación",
                type: "text",
                component: "select",
                option: ["bolsa", "caja", "paquete"],
            },
            {
                name: "Contenido",
                type: "number",
                component: "duplex",
                option: ["gr", "kg", "onz", "lb"],
            },
            {
                name: "Material",
                type: "text",
                component: "input",
            },
            {
                name: "Graduacion",
                type: "number",
                component: "pin",
            },
            {
                name: "instrucciones",
                type: "text",
                component: "tags",
            },
            {
                name: "Recomendaciones",
                type: "text",
                component: "tags",
            },
        ],
        Abonos: [
            {
                name: "Presentación",
                type: "text",
                component: "select",
                option: ["bolsa", "caja", "paquete"],
            },
            {
                name: "Contenido",
                type: "number",
                component: "duplex",
                option: ["gr", "kg", "onz", "lb"],
            },
            {
                name: "instrucciones",
                type: "text",
                component: "tags",
            },
            {
                name: "Recomendaciones",
                type: "text",
                component: "tags",
            },
        ],
        Macetas: [
            {
                name: "Material",
                type: "text",
                component: "input",
            },
            {
                name: "Color",
                type: "text",
                component: "input",
            },
            {
                name: "Tamaño",
                type: "number",
                component: "select",
                option: ["1", "2", "3", "4", "5", "6"],
            },
            {
                name: "Altura",
                type: "number",
                component: "duplex",
                option: ["Cm", "Mm"],
            },
            {
                name: "Diametro",
                type: "number",
                component: "duplex",
                option: ["Cm", "Mm"],
            },
            {
                name: "Capacidad",
                type: "number",
                component: "duplex",
                option: ["G", "M"],
            },
        ],
        Tratamientos: [
            {
                name: "Presentación",
                type: "text",
                component: "select",
                option: ["bolsa", "caja", "paquete"],
            },
            {
                name: "Contenido",
                type: "number",
                component: "duplex",
                option: ["gr", "kg", "onz", "lb"],
            },
            {
                name: "Material",
                type: "text",
                component: "input",
            },
            {
                name: "instrucciones",
                type: "text",
                component: "tags",
            },
            {
                name: "Recomendaciones",
                type: "text",
                component: "tags",
            },
        ],
        Herramientas: [
            {
                name: "Descripción",
                type: "text",
                component: "input",
            },
            {
                name: "Marca",
                type: "text",
                component: "input",
            },
            {
                name: "Material",
                type: "text",
                component: "input",
            },
            {
                name: "Color",
                type: "text",
                component: "input",
            },
            {
                name: "Tamaño",
                type: "text",
                component: "select",
                option: ["Grande", "Chico", "Mediano"],
            },
            {
                name: "Altura",
                type: "number",
                component: "duplex",
                option: ["Cm", "Mm"],
            },
            {
                name: "Ancho",
                type: "number",
                component: "duplex",
                option: ["Cm", "Mm"],
            },
            {
                name: "Codigo",
                type: "text",
                component: "input",
            }
        ],
    },
    FLORES: {
        ROSAS: flores
    },
    PLANTAS: {
        Arbustos: [
            {
                name: "Especie",
                type: "text",
                component: "input",
            },
            {
                name: "Variedad",
                type: "text",
                component: "input",
            },
            {
                name: "Floración",
                type: "text",
                component: "input",
            },
            {
                name: "Edad",
                type: "text",
                component: "input",
            },
            {
                name: "Estado",
                type: "text",
                component: "input",
            },
            {
                name: "Altura",
                type: "number",
                component: "duplex",
                option: ["Cm", "Mm"],
            },
            {
                name: "Ancho",
                type: "number",
                component: "duplex",
                option: ["Cm", "Mm"],
            },
            {
                name: "Presentación",
                type: "text",
                component: "select",
                option: [
                    "Maceta #1",
                    "Maceta #2",
                    "Maceta #3",
                    "Maceta #4",
                    "Maceta #5",
                ],
            },
            {
                name: "Recomendaciones",
                type: "text",
                component: "tags",
            },
            
        ],
        Arboles: [
            {
                name: "Especie",
                type: "text",
                component: "input",
            },
            {
                name: "Variedad",
                type: "text",
                component: "input",
            },
            {
                name: "Floración",
                type: "text",
                component: "input",
            },
            {
                name: "Edad",
                type: "text",
                component: "input",
            },
            {
                name: "Estado",
                type: "text",
                component: "input",
            },
            {
                name: "Altura",
                type: "number",
                component: "duplex",
                option: ["Cm", "Mm"],
            },
            {
                name: "Ancho",
                type: "number",
                component: "duplex",
                option: ["Cm", "Mm"],
            },
            {
                name: "Presentación",
                type: "text",
                component: "select",
                option: [
                    "Maceta #1",
                    "Maceta #2",
                    "Maceta #3",
                    "Maceta #4",
                    "Maceta #5",
                ],
            },
            {
                name: "Recomendaciones",
                type: "text",
                component: "tags",
            },
        ],
        Orquídeas: [
            {
                name: "Especie",
                type: "text",
                component: "input",
            },
            {
                name: "Variedad",
                type: "text",
                component: "input",
            },
            {
                name: "Floración",
                type: "text",
                component: "input",
            },
            {
                name: "Edad",
                type: "text",
                component: "input",
            },
            {
                name: "Estado",
                type: "text",
                component: "input",
            },
            {
                name: "Altura",
                type: "number",
                component: "duplex",
                option: ["Cm", "Mm"],
            },
            {
                name: "Ancho",
                type: "number",
                component: "duplex",
                option: ["Cm", "Mm"],
            },
            {
                name: "Presentación",
                type: "text",
                component: "select",
                option: [
                    "Maceta #1",
                    "Maceta #2",
                    "Maceta #3",
                    "Maceta #4",
                    "Maceta #5",
                ],
            },
            {
                name: "Recomendaciones",
                type: "text",
                component: "tags",
            },
        ],
    },
    SEMILLAS: {
        Semilla: semillas
    }
};



// [
//     {
//         name: "Especie",
//         type: "text",
//         component: "input",
//     },
//     {
//         name: "Aroma",
//         type: "text",
//         component: "input",
//     },
//     {
//         name: "Disponibilidad",
//         type: "text",
//         component: "select",
//         option: ["Por temporada", "Aromática", "Exóticas"],
//     },
//     {
//         name: "Floración",
//         type: "text",
//         component: "input",
//     },
//     {
//         name: "Tiempo de vida",
//         type: "text",
//         component: "input",
//     },
//     {
//         name: "Estado",
//         type: "text",
//         component: "input",
//     },
//     {
//         name: "Altura",
//         type: "number",
//         component: "duplex",
//         option: ["Cm", "Mm"],
//     },
//     {
//         name: "Presentación",
//         type: "text",
//         component: "input",
//     },
//     // {
//     //     name: "Instrucciones",
//     //     type: "text",
//     //     component: "tags",
//     // },
//     // {
//     //     name: "Recomendación",
//     //     type: "text",
//     //     component: "tags",
//     // },
// ],        
// PETALOS: [
//     {
//         name: "Especie",
//         type: "text",
//         component: "input",
//     },
//     {
//         name: "Aroma",
//         type: "text",
//         component: "input",
//     },
//     {
//         name: "Disponibilidad",
//         type: "text",
//         component: "select",
//         option: ["Por temporada", "Aromática", "Exóticas"],
//     },
//     {
//         name: "Floración",
//         type: "text",
//         component: "input",
//     },
//     {
//         name: "Tiempo de vida",
//         type: "text",
//         component: "input",
//     },
//     {
//         name: "Estado",
//         type: "text",
//         component: "input",
//     },
//     {
//         name: "Altura",
//         type: "number",
//         component: "duplex",
//         option: ["Cm", "Mm"],
//     },
//     {
//         name: "Presentación",
//         type: "text",
//         component: "input",
//     },
//     {
//         name: "instrucciones",
//         type: "text",
//         component: "tags",
//     },
// ],
// CLAVALES: [
//     {
//         name: "Especie",
//         type: "text",
//         component: "input",
//     },
//     {
//         name: "Aroma",
//         type: "text",
//         component: "input",
//     },
//     {
//         name: "Disponibilidad",
//         type: "text",
//         component: "select",
//         option: ["Por temporada", "Aromática", "Exóticas"],
//     },
//     {
//         name: "Floración",
//         type: "text",
//         component: "input",
//     },
//     {
//         name: "Tiempo de vida",
//         type: "text",
//         component: "input",
//     },
//     {
//         name: "Estado",
//         type: "text",
//         component: "input",
//     },
//     {
//         name: "Altura",
//         type: "number",
//         component: "duplex",
//         option: ["Cm", "Mm"],
//     },
//     {
//         name: "Presentación",
//         type: "text",
//         component: "input",
//     },
//     {
//         name: "instrucciones",
//         type: "text",
//         component: "tags",
//     },
// ]



