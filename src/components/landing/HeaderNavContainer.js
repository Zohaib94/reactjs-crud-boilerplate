import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


export const HeaderNavContainer = ({apiCallsInProgress}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavLink className="nav-item nav-link" exact activeClassName="active" to="/">Home</NavLink>
                    <NavLink className="nav-item nav-link" activeClassName="active" to="/courses" >Courses</NavLink>
                    <NavLink className="nav-item nav-link" activeClassName="active" to="/about">About</NavLink>
                </ul>
            </div>
        </nav>
    );
};




HeaderNavContainer.propTypes = {
    apiCallsInProgress: PropTypes.number.isRequired
};



const mapStateToProps = state => ({
    apiCallsInProgress: state.apiReducer.apiCallsInProgress
});



export default connect(mapStateToProps)(HeaderNavContainer);

