import { render , screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

describe("Contact us Page Test cases",()=>{
    it("Should load Contact Us component",()=>{
        render(<Contact/>);
        const heading=screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })
    
    it("Should load Button inside Contact Us component",()=>{
        render(<Contact/>);
        const button=screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    })
    
    it("Should load 2 input boxes inside Contact Us component",()=>{
        render(<Contact/>);
        const inputBoxes=screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2);
    })
})

