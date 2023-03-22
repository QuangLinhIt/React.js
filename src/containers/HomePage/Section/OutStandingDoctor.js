import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OutStandingDoctor.scss';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../../utils';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import * as actions from '../../../store/actions';
class OutStandingDoctor extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrDoctors: [],
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
            this.setState({
                arrDoctors: this.props.topDoctorsRedux
            })
        }
    }
    componentDidMount() {
        this.props.loadTopDoctors();
    }

    render() {
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };
        let language = this.props.language;
        let arrDoctors = this.state.arrDoctors;
        return (
            <div className="section-OutStandingDoctor">
                <div className="OutStandingDoctor-container">
                    <div className="OutStandingDoctor-header">
                        <span className="title-section">
                            <FormattedMessage id="homepage.outstanding-doctor" />
                        </span>
                        <button className="btn-section">
                            <FormattedMessage id="homepage.more-infor" />
                        </button>
                    </div>
                    <div className="OutStandingDoctor-body">
                        <Slider {...settings}>
                            {arrDoctors && arrDoctors.length > 0 && arrDoctors.map((item, index) => {
                                let imageBase64 = '';
                                if (item.image) {
                                    imageBase64 = new Buffer(item.image, 'base64').toString('binary');
                                }
                                let nameVi = `${item.positionData.valueVi}, ${item.lastName} ${item.firstName}`;
                                let nameEn = `${item.positionData.valueEn}, ${item.firstName} ${item.lastName}`;
                                return (
                                    <div className="OutStandingDoctor-customize" key={index}>
                                        <div className="bg-image edit-image"
                                            style={{ backgroundImage: `url(${imageBase64})` }}
                                        />
                                        <div className="text-center">{language === LANGUAGES.VI ? nameVi : nameEn}</div>
                                    </div>)
                            })}
                        </Slider>
                    </div>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        topDoctorsRedux: state.admin.topDoctors,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctors: () => dispatch(actions.fetchTopDoctor()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
