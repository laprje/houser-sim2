import React, { Component } from 'react'
import House from '../House/House'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            houses: []
        }
        this.getAll = this.getAll.bind(this)
    }


    getAll() {
        axios
            .get('/api/houses')
            .then(res => {
                this.setState({
                    houses: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }


    componentDidMount() {
        this.getAll()
    }


    render() {
        return (
            <div>
                {this.state.houses.map( el => (
                    <House houseObj={el} key={'house' + el.id} />
                ))}
            </div>
        )
    }
}