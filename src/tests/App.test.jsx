import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react"
import App from "../App";
import userEvent from "@testing-library/user-event";


describe("<App/>", () => {

    test("should add a new item and remove the item ", async () => {

        const user = userEvent.setup();
        render(<App />)
        //buscamos el input
        const input = screen.getByRole("textbox");
        expect(input).toBeDefined();

        //buscamos el form 
        const form = screen.getByRole("form");
        expect(form).toBeDefined();

        const botton = form.querySelector("button");
        expect(botton).toBeDefined();

        const text = crypto.randomUUID();
        await user.type(input, text);
        await user.click(botton);



        //validamos que el elemento se agrego
        const list = screen.getByRole("list");
        expect(list).toBeDefined();
        expect(list.childNodes.length).toBe(1);

        //validamos que el elemento se elimine
        const item = screen.getByText(text);
        const removeBottom = item.querySelector("button");
        expect(removeBottom).toBeDefined();

        await user.click(removeBottom);
        screen.getByText("No hay elementos")
    })

})