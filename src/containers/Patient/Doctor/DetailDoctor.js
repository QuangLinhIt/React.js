import React, { Component } from 'react';
import { connect } from "react-redux";

class DetailDoctor extends Component {
    render() {

        const { DetailDoctorMenuPath, isLoggedIn } = this.props;
        return (
            <div>detail doctor</div>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);