import { IllustrationByGender } from "./getIllustration" 
import { render, screen} from "@testing-library/react"

describe("Item of Atom Component: SelectGender",()=>{
    it("should return a illustration famale",()=>{
        render(<IllustrationByGender gender="female"/>)

        const illustration = screen.getByTestId("illustration_famale")
        expect(illustration).toBeInTheDocument
    })
    it("should return a illustration male",()=>{
        render(<IllustrationByGender gender="male"/>)

        const illustration = screen.getByTestId("illustration_male")
        expect(illustration).toBeInTheDocument
    })
    it("should return a illustration mixed",()=>{
        render(<IllustrationByGender gender="mixed"/>)

        const illustration = screen.getByTestId("illustration_mixed")
        expect(illustration).toBeInTheDocument
    })
})