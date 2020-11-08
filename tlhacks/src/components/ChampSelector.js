import React, { Component } from 'react'

class ChampSelector extends Component {
    render() {
        var className = ""
        if (this.props.indent) {
            className = "indent"
        }
        return(
            <div className={className}> 
                <p>{this.props.label}</p>
                <select onChange={this.props.onChange} name={this.props.label} id={this.props.label}>
                    <option disabled selected value> - - select champion - - </option>
                    {this.props.options.map((champ) => 
                        <option key={champ} value={champ}>{champ}</option>
                    )}
                </select>
            </div>
        )
    }
}

export default ChampSelector;