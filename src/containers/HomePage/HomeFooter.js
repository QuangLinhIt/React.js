import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeFooter.scss';
import { FormattedMessage } from 'react-intl';


class HomeFooter extends Component {



    render() {

        return (
            <div className="section-home-footer">
                <p>&copy; 2023 Quang Linh Website. More information, please visit my youtube channel.
                    <a target="_blank" href="https://youtu.be/uSqHLvPI4Ag">
                        &#8594; Click here &#8592;
                    </a>
                </p>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);