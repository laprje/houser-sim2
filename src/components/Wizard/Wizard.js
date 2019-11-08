import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            image: '',
            show: true
        }
        this.baseState = this.state;
        this.createHouse = this.createHouse.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.addButton = this.addButton.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clearForm() {
        let form = document.getElementById('form')
        form.reset();
        this.setState(this.baseState)
    }

    createHouse() {
        axios
            .post('/api/house', this.state)
            .then(res => {
                this.setState({
                    houses: res.data
                })
            })
    }

    addButton() {
        this.clearForm();
        this.createHouse();
    }

    render() {
        return (
            <div>
                <form id='form'>
                    <input
                        className="input"
                        placeholder="Add a Property Name"
                        onChange={(e) => this.handleChange(e)}
                        name='name'
                        value={this.state.name}
                    />

                    <input
                        className="input"
                        placeholder="Add an Address"
                        onChange={(e) => this.handleChange(e)}
                        name='address'
                        value={this.state.address}
                    />

                    <input
                        className="input"
                        placeholder="Add a City"
                        onChange={(e) => this.handleChange(e)}
                        name='city'
                        value={this.state.city}
                    />

                    <input
                        className="input"
                        placeholder="Add a State"
                        onChange={(e) => this.handleChange(e)}
                        name='state'
                        value={this.state.state}
                    />

                    <input
                        className="input"
                        placeholder="Add a Zip"
                        onChange={(e) => this.handleChange(e)}
                        name='zip'
                        value={this.state.zip}
                    />

                    <input
                        className="input"
                        placeholder="Add a Price"
                        onChange={(e) => this.handleChange(e)}
                        name='price'
                        value={this.state.price}
                    />

                    <input
                        className="input"
                        placeholder="Add an Image URL"
                        onChange={(e) => this.handleChange(e)}
                        name='image'
                        value={this.state.image}
                    />
                </form>
                <Link to='/'>
                    <button onClick={this.clearForm} className="cancel-btn">Cancel</button>
                </Link>


                <button hidden={!this.state.show} onClick={this.addButton} className='complete-btn'>Complete</button>

            </div>
        )
    }
}