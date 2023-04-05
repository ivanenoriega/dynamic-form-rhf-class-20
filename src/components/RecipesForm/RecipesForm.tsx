import { Typography, TextField, Button, Alert, AlertColor } from "@mui/material"
import { useFormContext } from "react-hook-form";
import RecipesFormIngredients from "./RecipesFormIngredients";
import { FC, useState } from "react";

type RecipesFormProps = {
    setActiveStep: (step: number) => void
}

const RecipesForm: FC<RecipesFormProps> = ({ setActiveStep }) => {
    const { register, handleSubmit, formState: { errors } } = useFormContext()
    const [showAlert, setShowAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')
    const [alertSeverity, setAlertSeverity] = useState<AlertColor>('success')

    const submitHandler = () => {
        setShowAlert(true)
        setAlertMessage('Receta guardada correctamente')
        setAlertSeverity('success')
        setTimeout(() => {
            setShowAlert(false)
            setActiveStep(1) // Go to next step
        }, 3000)
    }

    const submitErrorHandler = () => {
        setShowAlert(true)
        setAlertMessage('Error al guardar la receta')
        setAlertSeverity('error')
        setTimeout(() => {
            setShowAlert(false)
        }, 3000)
    }

    return (
        <form onSubmit={handleSubmit(submitHandler, submitErrorHandler)}>
            <Typography variant="h4" sx={{ mb: 4 }}>
                Agregue ingredientes para la Receta
            </Typography>
            <TextField
                id="nombre"
                label="Nombre de la receta"
                variant="outlined"
                {...register(`nombre`)}
                className="input"
                sx={{ width: 1, my: 2, borderRadius: 1 }}
                helperText={errors?.nombre?.message as string || ''}
                error={!!errors?.nombre}
            />
            <RecipesFormIngredients />
            <Button
                variant="contained"
                type="submit"
                className="button"
                sx={{ width: 1, mt: 4, borderRadius: 1 }}
            >
                Guardar
            </Button>
            {showAlert && <Alert sx={{
                position: 'absolute',
                bottom: 10,
            }} severity={alertSeverity}>{alertMessage}</Alert>}
        </form>
    )
}

export default RecipesForm