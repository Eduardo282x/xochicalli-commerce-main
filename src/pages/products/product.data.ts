import * as yup from "yup";

export const guestSchema = yup.object().shape({
    name: yup
        .string()
        .required("El nombre es requerido")
        .min(4, "El nombre debe tener mínimo 4 caracteres"),
    fatherSurname: yup
        .string()
        .required("El apellido paterno es requerido")
        .min(4, "El apellido debe tener mínimo 4 caracteres"),
    comment: yup
        .string()
        .required("El comentario es requerido")
        .min(6, "El comentario debe tener mínimo 6 caracteres"),
});

export const userSchema = yup.object().shape({
    comment: yup
        .string()
        .required("El comentario es requerido")
        .min(6, "El comentario debe tener mínimo 6 caracteres"),
});