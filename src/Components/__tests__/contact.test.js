//const { default: Contact } = require("../Contact")
import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test ("should load contact us component", () => {
    
    //rendering
    render(<Contact/>);

    //Quering
    const heading = screen.getByRole('heading');
    //Assertion
    expect(heading).toBeInTheDocument();
});