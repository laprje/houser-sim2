import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div> <div className>Houser</div>
            <Link to='/' ><button className="header-btn">Dashboard</button></Link>
            <Link to='/wizard'><button className="header-btn">Add New Property</button></Link></div>
        )
    }
}