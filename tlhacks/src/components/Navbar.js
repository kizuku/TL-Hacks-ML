import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return(
            <div id="navbar">
                <h1 id="logo">TL//ML</h1>
                <ul id="navlist">
                    <li className="navbutton"><a href="/stats">Stats</a></li>
                    <li className="navbutton"><a href="/predict">Predict</a></li>
                    <li className="navbutton"><a href="/about">About</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;