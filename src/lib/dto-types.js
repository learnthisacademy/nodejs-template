import { Type } from "@sinclair/typebox";

export const _idDTOschema =Type.String({
    format: 'uuid',
    errorMessage: {
        type: 'El tipo debe ser un String',
        format: 'El formato debe ser un id'
    }
})

export const emailDTOschema = Type.String({
    format: 'email',
    errorMessage: {
        type: 'El tipo email debe ser un String',
        format: 'El formato email debe ser un correo electronico valido'
    }
})

export const nameDTOschema = Type.String({
    minLength: 2,
    maxLength: 15,
    errorMessage: {
        type: 'El tipo name debe ser un String',
        maxLength: 'la longitud maxima de name es 15', 
        minLength: 'la longitud minima de name es 2',
    }
})

export const passwordDTOschema = Type.String({
    minLength: 8, 
    maxLength: 80,
    errorMessage: {
        type: 'el tipo de la contraseña no es correcto, debe ser un String',
        minLength: 'la longitud minima de la contraseña es 8',
        maxLength: 'la longitud maxima de la contraseña es 15'
    }
})

export const surnameDTOschema = Type.String({
    minLength: 4,
    maxLength: 50,
    errorMessage: {
        type: 'El tipo surname debe ser un String',
        maxLength: 'la longitud maxima de surname es 4', 
        minLength: 'la longitud minima de surname es 50',
    }
})