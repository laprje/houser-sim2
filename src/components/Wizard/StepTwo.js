import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { updateImage } from '../../ducks/reducer';


class Wizard2 extends Component {


    render() {      
        const { updateImage } = this.props;
        return (
            <div>

                <div className="dashboard-flex">
                    <h3>Add New Listing</h3>
                    <Link to="/">
                            <button className="cancel">Cancel</button>
                    </Link>
                </div>

                <div>Image Url</div>
                    <input
                    className="input"
                    type="text" 
                    placeholder={this.props.image}
                    onChange={e => updateImage(e.target.value)}
                    name='zipcode'
                    
                    />


            <button className="back-btn" onClick={() => this.props.history.push("/step1")}>Back</button>
            <button className="next-btn" onClick={() => this.props.history.push("/step3")}>Next</button>


            </div>
        )
    }
}

function mapStateToProps( state ) {
    const { image } = state;

    return {
        image,
    };
}

export default connect( mapStateToProps, {updateImage } )( Wizard2)