import React, { Component } from 'react';
import { connect } from 'react-redux';
import './About.scss';
import { FormattedMessage } from 'react-intl';


class About extends Component {



    render() {

        return (
            <div className="section-about">
                <div className="section-about-header">
                    Truyền thông
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe
                            width="60%"
                            height="400px"
                            src="https://www.youtube.com/embed/lzRHitkVtFI"
                            title="flork meme: bác sĩ hảo Hán"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="content-right">
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
