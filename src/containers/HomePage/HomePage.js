import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Handbook from './Section/Handbook';
import MedicalFacility from './Section/MedicalFacility';
import OutStandingDoctor from './Section/OutStandingDoctor';
import Specialty from './Section/Specialty';
import About from './Section/About';
import HomeFooter from './HomeFooter';

class HomePage extends Component {

    render() {

        return (
            <div>
                <HomeHeader />
                <Specialty />
                <MedicalFacility />
                <OutStandingDoctor />
                <Handbook />
                <About />
                <HomeFooter />
                <div style={{ height: '300px' }}> </div>
            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
