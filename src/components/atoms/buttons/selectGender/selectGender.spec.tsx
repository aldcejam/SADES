import { fireEvent, render, screen } from "@testing-library/react"
import SelectGender, { ButtonSelectGenderProps, TranslateGenderToPortuguese } from "."
import { GenderOptionsProps } from "defaultTypes/GendersProps"

const mockUpdateGenderCategorySelected = jest.fn()
const selectGenderProps: ButtonSelectGenderProps = {
    gender: "male",
    isSelect: true,
    updateGenderCategorySelected: mockUpdateGenderCategorySelected
}
describe("Atom Component: SelectGender", () => {
    it("should to call function to update gender", () => {
        render(<SelectGender
            {...selectGenderProps}
        />)

        const button = screen.getByRole("button")
        fireEvent.click(button)

        expect(mockUpdateGenderCategorySelected).toBeCalledTimes(1)
    })
    it("gender name must be rendered in Portuguese", () => {
        const genderOptions: GenderOptionsProps[] = ["female", "male", "mixed"]

        genderOptions.forEach(gender => {
            render(<SelectGender
                {...selectGenderProps}
                gender={gender}
            />)

            const correctText = TranslateGenderToPortuguese(gender)
            expect(screen.getByText(correctText as string)).toBeInTheDocument
        });
    })
    it("should render accessibility text correctly",()=>{
        render(<SelectGender
            {...selectGenderProps}
        />)

        const button = screen.getByRole("button")
        const arialLabel = button.getAttribute("aria-label")
        const translatedGender = TranslateGenderToPortuguese(selectGenderProps.gender)
        const accessibilityText = `Selecionar categoria de gênero ${translatedGender}`
        expect(arialLabel).toBe(accessibilityText)

    }) 
})
