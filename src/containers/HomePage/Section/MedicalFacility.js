import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss';
import { FormattedMessage } from 'react-intl';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class MedicalFacility extends Component {



    render() {
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };
        return (
            <div className="section-medical-facility">
                <div className="medical-facility-container">
                    <div className="medical-facility-header">
                        <span className="title-section">Cơ sở t tế nổi bật</span>
                        <button className="btn-section">tìm kiếm</button>
                    </div>
                    <div className="medical-facility-body">
                        <Slider {...settings}>
                            <div className="medical-facility-customize">
                                <div className="bg-image1" />
                                <div>Bệnh viện Hữu nghị Việt Đức</div>
                            </div>
                            <div className="medical-facility-customize">
                                <div className="bg-image2" />
                                <div>Bệnh viện Chợ Rẫy</div>
                            </div>
                            <div className="medical-facility-customize">
                                <div className="bg-image3" />
                                <div>Bệnh viện Trung ương Quân đội 108</div>
                            </div>
                            <div className="medical-facility-customize">
                                <div className="bg-image4" />
                                <div>Bệnh viện Ung bướu Hưng Việt</div>
                            </div>
                            <div className="medical-facility-customize">
                                <div className="bg-image5" />
                                <div>Hệ thống y tế MEDLATEC</div>
                            </div>
                            <div className="medical-facility-customize">
                                <div className="bg-image6" />
                                <div>Trung tâm xét nghiệm Diag Laboratories</div>
                            </div>
                            <div className="medical-facility-customize">
                                <div className="bg-image7" />
                                <div>Hệ thống y tế Thu Cúc TCI</div>
                            </div>
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
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
