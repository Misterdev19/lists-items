import { useState } from "react";
export const useItems = () => {


    const [items, setItam] = useState([]);


    const haldelSubmit = (event) => {

        event.preventDefault()
        const { elements } = event.currentTarget
        const input = elements.namedItem("item")
        const isImput = input instanceof HTMLInputElement
        if (!isImput || input == null) return
        setItam([...items, { id: crypto.randomUUID(), timestamp: Date.now(), text: input.value }])
        event.target.item.value = '';

    }

    const hlandleDelete = (id) => () => {
        setItam(prevItmes => {
            return prevItmes.filter(currentItems => currentItems.id !== id)
        })
    }


    return {
        items,
        haldelSubmit,
        hlandleDelete
    }

}