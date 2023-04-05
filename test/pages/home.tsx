import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Home from "@/pages"

const getSubmitButton = () => screen.getByRole('button', { name: 'Guardar' })

describe('Home Page', () => {
    // beforeEach(() => {
    //     render(<Home />)
    // })
    // describe('Form', () => {
    //     describe('Static validation', () => {
    //         it('should have a title', () => {
    //             screen.getByRole('heading', { name: 'Agregue ingredientes para la Receta' })
    //         })
    //         it('should have 3 inputs as default', () => {
    //             const inputs = screen.getAllByRole('textbox')
    //             expect(inputs).toHaveLength(3)
    //         })
    //         it('should have 1 submit button as default', () => {
    //             getSubmitButton()
    //         })
    //     })
    //     describe('Error messages', () => {
    //         it('should show error message when name is empty', async () => {
    //             const button = getSubmitButton()
    //             fireEvent.click(button)
    //             await waitFor(() => {
    //                 screen.getByText('Debes ingresar un nombre para la receta')
    //             })
    //         })
    //         it('should show error message when ingredient is empty', async () => {
    //             const button = getSubmitButton()
    //             button.click()
    //             await waitFor(() => {
    //                 const messages = screen.queryAllByText('Debes ingresar el ingrediente')
    //                 expect(messages).toHaveLength(2)
    //             })
    //         })
    //     })
    //     describe('Add ingredient', () => {
    //         it('should add a new ingredient', async () => {
    //             const button = screen.getByRole('button', { name: 'Agregar nuevo ingrediente' })
    //             button.click()
    //             await waitFor(() => {
    //                 const inputs = screen.getAllByRole('textbox')
    //                 expect(inputs).toHaveLength(4)
    //             })
    //         })
    //     })
    //     describe('Remove ingredient', () => {
    //         it('should remove an ingredient', async () => {
    //             const button = screen.getByRole('button', { name: 'Agregar nuevo ingrediente' })
    //             button.click()
    //             await waitFor(() => {
    //                 const inputs = screen.getAllByRole('textbox')
    //                 expect(inputs).toHaveLength(4)
    //             })
    //             const removeButtons = screen.getAllByRole('button', { name: 'Borrar' })
    //             expect(removeButtons).toHaveLength(3)
    //             removeButtons[0].click()
    //             await waitFor(() => {
    //                 const inputs = screen.getAllByRole('textbox')
    //                 expect(inputs).toHaveLength(3)
    //             })
    //         })
    //     })
    //     describe('Happy path', () => {
    //         it('should submit the form', async () => {
    //             const nameInput = screen.getByRole('textbox', { name: 'Nombre de la receta' })
    //             const ingredientInput = screen.getByRole('textbox', { name: 'Ingrediente' })
    //             const submitButton = getSubmitButton()
    //             fireEvent.change(nameInput, { target: { value: 'Receta de prueba' } })
    //             fireEvent.change(ingredientInput, { target: { value: 'Ingrediente de prueba' } })
    //             fireEvent.click(submitButton)
    //             await waitFor(() => {
    //                 screen.getByText('Receta guardada correctamente')
    //             })
    //         })
    //     })
    // })
})