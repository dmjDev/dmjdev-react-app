export const ListMapItem = ({ nombre, visto }) => {
    const html =
        <li>
            {nombre}
            {visto && '✅'}
        </li>
    return html
}
