import { useEffect } from "react"

export const useSEO = ({ title, description }) => {

    useEffect(() => {
        document.title = title
        document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    }, [title, description])

}