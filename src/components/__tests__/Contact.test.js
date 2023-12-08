import "@testing-library/jest-dom";
import { screen,render } from "@testing-library/react";
import Contact from "../Contact";
test("Should load heading inside contact us component",()=>{
    render(<Contact/>)
    const heading=screen.getByText("Contact Us");
    //Assertion
    expect(heading).toBeInTheDocument();
})