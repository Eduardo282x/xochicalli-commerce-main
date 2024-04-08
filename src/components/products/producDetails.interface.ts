export interface ProductsViewDetails {
    products: ProductsDetails;
}

export interface ProductsDetails {
    category?:        string;
    Aroma?:            string;
    "unidad-Ancho"?:  string;
    tags?:            string;
    Floración?:       string;
    Especie?:         string;
    Disponibilidad?:  string;
    price?:           string | number;
    Presentación?:    string;
    instrucciones?:   string[];
    Variedad?:        string;
    title?:           string;
    subCategory?:     string;
    Edad?:            string;
    description?:     string;
    "unidad-Altura"?: string;
    Estado?:          string;
    image?:           string;
    Recomendaciones?: string[];
    stock?:           number;
    marca?:           string;
    Altura?:          string;
    Ancho?:           string;
    id?:              string;
}
