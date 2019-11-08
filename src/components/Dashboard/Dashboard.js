import React, { Component } from 'react'
import House from '../House/House'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            houses: []
        }
        // this.getAll = this.getAll.bind(this)
        this.deleteHouse = this.deleteHouse.bind(this)
    }


    // getAll() {
    //     axios
    //         .get('/api/houses')
    //         .then(res => [
    //             this.setState({
    //                 houses: res.data
    //             })
    //         ])
    // }


    componentDidMount() {
        axios
        .get('/api/houses')
        .then(res => [
            this.setState({
                houses: res.data
            })
        ])
    }

    deleteHouse(id) {
        axios
            .delete(`/api/houses/${id}`)
            .then(res => {
         
                this.componentDidMount();
            }
            )
            .catch(err => {
                console.log(err)
            })
    }


    render() {
        console.log(this.state)
        return (
            <div>
                {this.state.houses.map(el => (
                    <House 
                    houseObj={el} key={'house' + el.id} 
                    deleteHouse = {this.deleteHouse}
                    />
                ))}
            </div>
        )
    }
}