import logo from '../media/rocket.svg'

import './header.scss'

export function Header() {
    return (
        <header>
            <img src={logo} alt="TODO desafio" />
            <strong>todo</strong>
        </header>
    )
}