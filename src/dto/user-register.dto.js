import { Type } from "@sinclair/typebox";
import Ajv from "ajv"
import addFormats from "ajv-formats"
import addErrors from "ajv-formats"

const RegisterDTOschema = Type.Object({
    _id: Type.String({
        format: 'uuid',
        errorMessage: {
            type: 'El tipo debe ser un String',
            format: 'El formato debe ser un id'
        }
    }),
    name: Type.String({
        minLength: 2,
        maxLength: 15,
        errorMessage: {
            type: 'El tipo name debe ser un String',
            maxLength: 'la longitud maxima de name es 15', 
            minLength: 'la longitud minima de name es 2',
        }
    }),
    surname: Type.String({
        minLength: 4,
        maxLength: 50,
        errorMessage: {
            type: 'El tipo surname debe ser un String',
            maxLength: 'la longitud maxima de surname es 4', 
            minLength: 'la longitud minima de surname es 50',
        }
    }),
    email: Type.String({
        format: 'email',
        errorMessage: {
            type: 'El tipo email debe ser un String',
            format: 'El formato email debe ser un correo electronico valido'
        }
    }),
    password: Type.String({ format: 'password',
    minLength: 10, 
    maxLength: 25,
    errorMessage: {
        minLength: 'la longitud minima de password es 10 ',
        maxLength: 'la longitud maxima de password es 25'
    }
    }),
})

const ajv = new Ajv({allErrors: true})

addFormats(ajv, ['email', 'uuid']);
ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
addErrors();

const validateSchema = ajv.compile( RegisterDTOschema )

const userRegisterDto = (req, res, next) => {

    const isValid = validateSchema(req.body)
    if( !isValid ) return res.status(400).send( ajv.errorText( {separator: '\n'} ))
    next()
}

export default userRegisterDto 