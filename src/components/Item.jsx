export const Item = ({ id, text, hlandleDelete }) => {

    return (

        <li>
            {text}
            <button onClick={hlandleDelete(id)}>Eliminar Elemento</button>
        </li>
    )
}