import React, { Component } from 'react'

function updateTaken() {
    console.log("changed team")
}

class TeamSelector extends Component {
    render() {
        return(
            <div className="teamselect"> 
                <p>{this.props.label}</p>
                <select onChange={this.props.onChange} name={this.props.label} id={this.props.label}>
                    <option disabled selected value> - - select team - - </option>
                    {this.props.options.map((team) => 
                        <option key={team} value={team}>{team}</option>
                    )}
                </select>
            </div>
        )
    }
}

export default TeamSelector;