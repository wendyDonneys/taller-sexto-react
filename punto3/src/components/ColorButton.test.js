import {render,screen, fireEvent } from "@testing-library/react";
import ColorButton from "./ColorButton"; 

test("el boton cambia de color al hacer clic",() => {
    render(<ColorButton/>);

    const buttonElement = screen.getByText("change color");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle({backgroundColor: "Black"});
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveStyle({backgroundColor: "White"});
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveStyle({backgroundColor: "Gray"});
};
);