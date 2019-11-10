import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { updateName, updateAddress, updateCity, updateST, updateZip } from '../../ducks/reducer';



class StepOne extends Component {

    componentDidMount() {
        console.log(this.props)
    }

    

    render() { 
        
        const { updateName, updateAddress, updateCity, updateST, updateZip } = this.props;
        return (
            <div className="wizard">
                <div className="dashboard-flex">
                    <h3>Add New Listing</h3>
                    <Link to="/">
                            <button className="cancel">Cancel</button>
                    </Link>
                </div>

            <div className="input-box-container">

                <div>Property Name</div>
                    <input
                    className="input"
                    type="text" 
                    placeholder={this.props.name}
                    onChange={e => updateName(e.target.value)}
                    name='name'
                
                    />
                

                <div>Address</div>
                    <input
                    className="input"
                    type="text" 
                    placeholder={this.props.address}
                    onChange={e => updateAddress(e.target.value)}
                    name='address'
                   
                    />

                <div>City</div>
                    <input
                    className="input"
                    type="text" 
                    placeholder={this.props.city}
                    onChange={e => updateCity(e.target.value)}
                    name='city'
                    
                    />

                <div>State</div>
                    <input
                    className="input"
                    type="text" 
                    placeholder={this.props.ST}
                    onChange={e => updateST(e.target.value)}
                    name='state'
                    
                    />

                <div>Zip</div>
                    <input
                    className="input"
                    type="text" 
                    placeholder={this.props.zip}
                    onChange={e => updateZip(e.target.value)}
                    name='zipcode'
                    
                    />
            
            
            </div>

            <button className="back-btn" onClick={() => this.props.history.push("/")}>Back</button>
            <button className="next-btn" onClick={() => this.props.history.push("/step2")}>Next</button>





            </div>
        )
    }
}

    function mapStateToProps( state ) {
        const { name, address, city, ST, zip } = state;

        return {
            name,
            address,
            city, 
            ST, 
            zip
        };
    }

export default connect( mapStateToProps, {updateName, updateAddress, updateCity, updateST, updateZip } )(StepOne)