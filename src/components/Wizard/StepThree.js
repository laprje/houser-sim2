import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateMortgage, updateRent, updatePrice } from '../../ducks/reducer';

class StepThree extends Component {

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // clearForm() {
    //     let form = document.getElementById('form')
    //     form.reset();
    //     this.setState(this.baseState)
    // }

    createHouse() {
        axios
            .post('/api/house', this.props)
            .then(res => {
                this.setState({
                    houses: res.data
                })
                this.props.history.push('/')
            })
    }

    // addButton() {
    //     this.props.history.push('/')
    //     this.createHouse();
    // }

    render() {
        const { updateMortgage, updateRent, updatePrice } = this.props;
        return (
            <div>
                <form id='form'>
                        <h3>Add New Listing</h3>
                        <Link to="/">
                            <button className="cancel">Cancel</button>
                        </Link>
                    <div> Mortgage </div>
                    <input
                        className="input"
                        type="number"
                        placeholder={this.props.mortgage}
                        onChange={e => updateMortgage(e.target.value)}
                        name='mortgage'
                    />

                    <div>Desired Monthly Rent</div>
                    <input
                        className="input"
                        type="number"
                        placeholder={this.props.rent}
                        onChange={e => updateRent(e.target.value)}
                        name='rent'
                    />

                    <div>Price</div>
                    <input
                        className="input"
                        type="number"
                        placeholder={this.props.price}
                        onChange={e => updatePrice(e.target.value)}
                        name='price'
                    />

                </form>
                <button className="back-btn" onClick={() => this.props.history.push("/step2")}>Back</button>
                <button className="complete-btn" onClick={() => this.createHouse()}>Finish</button>

            </div>
        )
    }
}

function mapStateToProps(state) {
    const { name, address, city, ST, zip, price, mortgage, rent, image } = state;

    return {
        name, address, city, ST, zip, price, mortgage, rent, image
    }
}

export default connect(mapStateToProps, { updateMortgage, updatePrice, updateRent })(StepThree)