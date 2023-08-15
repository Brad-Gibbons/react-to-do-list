import React from "react";

const Header = ({sortByPrio}) => {
    return (
        <header>
            <h1>To do list</h1>
            <button onClick={sortByPrio}>Sort by priority</button>
        </header>
    )
}

export default Header