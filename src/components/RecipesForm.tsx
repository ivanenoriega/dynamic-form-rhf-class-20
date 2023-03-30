import { Typography, Box, TextField, Button, Stack } from "@mui/material"
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    nombre: yup.string().required("Debes ingresar un nombre para la receta"),
    // Para este campo, indicamos que estamos
    // esperando un array y mediante el método
    // "of" definimos el contenido del mismo.
    ingredientes: yup.array()
        .of(
            yup.object().shape({
                // validamos que cada input tenga contenido
                value: yup.string().required("Debes ingresar el ingrediente")
            })
        )
        // Validamos que al menos se ingresen dos ingredientes
        .min(2, "Debes ingresar al menos dos ingredientes")
});

const RecipesForm = () => {
    const { register, control, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            nombre: "Test User",
            ingredientes: [
                { value: 'Leche' }
            ]
        },
        resolver: yupResolver(schema)
    });
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "ingredientes", // unique name for your Field Array
    });

    console.log('errors', errors)
    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <Typography variant="h4" sx={{ mb: 4 }}>
                Agregue ingredientes para la Receta
            </Typography>
            <TextField
                id="outlined-basic"
                label="Nombre de la receta"
                variant="outlined"
                {...register(`nombre`)}
                className="input"
                sx={{ width: 1, my: 2, borderRadius: 1 }}
                helperText={errors.nombre?.message}
                error={!!errors.nombre}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                {fields && fields.map((field, index) => {
                    return (<>
                        <TextField
                            id="outlined-basic"
                            label="Ingrediente"
                            variant="outlined"
                            {...register(`ingredientes.${index}.value`)}
                            className="input"
                            sx={{
                                width: 1,
                                my: 2,
                                borderRadius: 1,
                            }}
                            helperText={errors.ingredientes?.[index]?.value?.message}
                            error={!!errors.ingredientes?.[index]?.value}
                        />
                        <Button
                            variant="outlined"
                            className="button"
                            onClick={() => remove(index)}
                        >
                            Borrar
                        </Button>
                    </>
                    )
                })}
                {!!errors.ingredientes &&
                    <Typography
                        variant="body2"
                        sx={{ color: 'red' }}
                    >
                        {errors.ingredientes?.message}
                    </Typography>}
            </Box>
            <Button
                variant="contained"
                className="button"
                sx={{ width: 1, mt: 4, borderRadius: 1 }}
                onClick={() => append({ value: '' })}
            >
                Agregar nuevo ingrediente
            </Button>
            <Button
                variant="contained"
                type="submit"
                className="button"
                sx={{ width: 1, mt: 4, borderRadius: 1 }}
            >
                Guardar
            </Button>
        </form>
    )
}

export default RecipesForm