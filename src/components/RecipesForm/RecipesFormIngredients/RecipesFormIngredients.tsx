import { Stack, TextField, Button, Typography } from "@mui/material"
import { useFieldArray, useFormContext } from "react-hook-form";

const RecipesFormIngredients = () => {
    const { control, register, formState: { errors } } = useFormContext()
    const { fields, append, remove } = useFieldArray({
        control,
        name: "ingredientes",
    });

    return (
        <>
            <Stack sx={{ gap: 3 }}>
                {fields && fields.map((field, index) => {
                    return (<Stack key={field.id} direction="row" gap={3} alignItems="center">
                        <TextField
                            id={"ingredinte_" + index}
                            label={"Ingrediente #" + (index + 1)}
                            variant="outlined"
                            {...register(`ingredientes.${index}.value`)}
                            className="input"
                            sx={{
                                width: 1,
                                my: 2,
                                borderRadius: 1,
                            }}
                            // @ts-ignore
                            helperText={errors?.ingredientes?.[index]?.value?.message}
                            // @ts-ignore
                            error={!!errors?.ingredientes?.[index]?.value}
                        />
                        <Button
                            variant="outlined"
                            className="button"
                            onClick={() => remove(index)}
                        >
                            Borrar
                        </Button>
                    </Stack>
                    )
                })}
                {!!errors.ingredientes &&
                    <Typography
                        variant="body2"
                        sx={{ color: 'red' }}
                    >
                        {errors?.ingredientes?.message as string || ''}
                    </Typography>
                }
            </Stack>
            <Button
                variant="contained"
                className="button"
                sx={{ width: 1, mt: 4, borderRadius: 1 }}
                onClick={() => append({ value: '' })}
            >
                Agregar nuevo ingrediente
            </Button>
        </>
    )
}

export default RecipesFormIngredients