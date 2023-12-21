import { render, screen } from "@testing-library/react";
import About from "../About";
import "@testing-library/jest-dom";

describe('About us page test cases', () => {
    test("Should load about us component", () => {
        render(<About />);
    
        const heading = screen.getByText('About');
    
        expect(heading).toBeInTheDocument()
    })
    
    test("Should load all heading component", () => {
        render(<About />);
    
        const heading = screen.getAllByRole('heading');
    
        expect(heading.length).toBe(5)
    })
});
