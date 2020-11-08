import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return(
            <div>
                <ul>
                    <li><a href="/stats">Stats</a></li>
                    <li><a href="/predict">Predict</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;