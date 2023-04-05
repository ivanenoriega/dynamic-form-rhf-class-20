import Home from "@/pages";
import { fireEvent, render, screen, waitFor } from "@testing-library/react"

let container;

describe('RecipesForm', () => {
    beforeEach(() => {
        const { container: rtlContainer } = render(<Home />);
        container = rtlContainer;
    })
    it('Should render', () => {
        screen.getByRole('heading', {
            name: /agregue ingredientes para la receta/i
        })

        // Validar cantidad de borones borrar
        const botonesBorrar = screen.getAllByRole('button', { name: /borrar/i })
        expect(botonesBorrar).toHaveLength(2)

        // Validar boton "agregar nuevo ingrediente"
        screen.getByRole('button', { name: /agregar nuevo ingrediente/i })
    })
    it('Error messages', async () => {
        const botonGuardar = screen.getByRole('button', {
            name: /guardar/i
        })
        fireEvent.click(botonGuardar)
        await waitFor(() => {
            screen.getByText('Debes ingresar un nombre para la receta')
            const mesajesError = screen.queryAllByText('Debes ingresar el ingrediente')
            expect(mesajesError).toHaveLength(2)
            screen.getByText('Error al guardar la receta')
        })
    })
    it('Happy Path', async () => {
        const botonGuardar = screen.getByRole('button', {
            name: /guardar/i
        })
        const inputNombre = screen.getByRole('textbox', {
            name: /nombre de la receta/i
        }) as HTMLInputElement
        const inputIngrediente1 = screen.getByRole('textbox', {
            name: /ingrediente #1/i
        }) as HTMLInputElement
        const inputIngrediente2 = screen.getByRole('textbox', {
            name: /ingrediente #2/i
        }) as HTMLInputElement

        fireEvent.change(inputNombre, { target: { value: 'Milanesa con pure' } })
        fireEvent.change(inputIngrediente1, { target: { value: 'Carne' } })
        fireEvent.change(inputIngrediente2, { target: { value: 'Papas' } })
        fireEvent.click(botonGuardar)

        await waitFor(() => {
            screen.getByText('Receta guardada correctamente')
        })
    })
})