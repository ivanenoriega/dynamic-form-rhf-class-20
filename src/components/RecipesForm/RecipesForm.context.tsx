import { FC, PropsWithChildren } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

// Error messages
const ERR_MSG_NAME_REQ = 'Debes ingresar un nombre para la receta';
const ERR_MSG_INGREDIENT_REQ = 'Debes ingresar el ingrediente';
const ERR_MSG_INGREDIENT_LENGTH = 'El ingrediente debe tener al menos 3 caracteres';
const ERR_MSG_INGREDIENTS_MIN = 'Debes ingresar al menos dos ingredientes';

// Validations values
const MIN_INGREDIENTS = 2;
const MIN_INGREDIENT_LENGTH = 3;

// Yup schema
const schema = yup.object().shape({
    nombre: yup.string().required(ERR_MSG_NAME_REQ),
    ingredientes: yup.array()
        .of(
            yup.object().shape({
                value: yup
                    .string()
                    .required(ERR_MSG_INGREDIENT_REQ)
                    .min(MIN_INGREDIENT_LENGTH, ERR_MSG_INGREDIENT_LENGTH)
            })
        )
        .min(MIN_INGREDIENTS, ERR_MSG_INGREDIENTS_MIN)
});

const RecipesFormContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const methods = useForm({
        defaultValues: {
            nombre: '',
            ingredientes: [
                { value: '' },
                { value: '' },
            ]
        },
        resolver: yupResolver(schema)
    });

    return (
        <FormProvider {...methods} >
            {children}
        </FormProvider>
    )
}

export default RecipesFormContextProvider