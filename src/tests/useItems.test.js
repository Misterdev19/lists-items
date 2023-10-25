import { describe, test, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useItems } from "../hooks/items";
import { act } from "react-dom/test-utils";


describe("use items hook", () => {

    test("should add a new item and remove the item ", async () => {

        const { result } = renderHook(() => useItems())

        expect(result.current.items.length).toBe(0)
        act(() => {

            result.current.addItem('addItem')

        })

    })

})