import { render, screen } from "@testing-library/react";
import Article from "../components/Article";

describe("Article component", () => {
    test("renders article with title, date, preview, and minutes", () => {
        render(
            <Article 
                title="Test Title"
                date="February 1, 2024"
                preview="Test preview content"
                minutes={10}
            />
        );
        
        expect(screen.getByText("Test Title")).toBeInTheDocument();
        expect(screen.getByText("February 1, 2024 • ☕️☕️ 10 min read")).toBeInTheDocument();
        expect(screen.getByText("Test preview content")).toBeInTheDocument();
    });
    
    test("uses default date when no date is provided", () => {
        render(
            <Article 
                title="Test Title"
                preview="Test preview"
                minutes={5}
            />
        );
        
        expect(screen.getByText("January 1, 1970 • ☕️ 5 min read")).toBeInTheDocument();
    });
    
    test("displays coffee emoji for less than 30 minutes", () => {
        render(
            <Article 
                title="Coffee Article"
                preview="Short read"
                minutes={15}
            />
        );
        
        expect(screen.getByText(/☕️☕️☕️ 15 min read/)).toBeInTheDocument();
    });
    
    test("displays bento emoji for 30 minutes or more", () => {
        render(
            <Article 
                title="Long Article"
                preview="Long read"
                minutes={45}
            />
        );
        
        expect(screen.getByText(/🍱🍱🍱🍱 45 min read/)).toBeInTheDocument();
    });
});
