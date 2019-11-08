import React, { Component } from 'react'

export default class House extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className='house'>
                    <div>
                        <img src={this.props.houseObj.image} alt={this.props.houseObj.name}></img>
                        <h3>{this.props.houseObj.name}</h3>
                        <h4>{this.props.houseObj.address}</h4>
                        <h4>${this.props.houseObj.price}</h4>
                        <h5>{this.props.houseObj.city}</h5>
                        <h5>{this.props.houseObj.state}</h5>
                        <h6>{this.props.houseObj.zip}</h6>
                        <button onClick={() => this.props.deleteHouse(this.props.houseObj.id)} className="delete-btn">Delete</button>
                    </div>
            </div>
        )
    }
}