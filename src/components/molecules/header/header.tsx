import React from "react"
import "./header.scss"

const Header: React.FC<{}> = () => {
    return(
        <header className="header">
            <a className="header__item" href="https://twitter.com/home" target="_self" rel="noreferrer noopener">Profile</a>
            <a className="header__item" href="https://twitter.com/home" target="_self" rel="noreferrer noopener">Twitter</a>
            <a className="header__item" href="https://twitter.com/home" target="_self" rel="noreferrer noopener">Top</a>
        </header>
    )
}

export default Header