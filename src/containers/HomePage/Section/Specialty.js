import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import specialtyImg1 from "../../../assets/specialty/co-xuong-khop.jpg";
// import specialtyImg2 from "../../../assets/specialty/than-kinh.jpg";
// import specialtyImg3 from "../../../assets/specialty/tieu-hoa.jpg";
// import specialtyImg4 from "../../../assets/specialty/tim-mach.jpg";
// import specialtyImg5 from "../../../assets/specialty/tai-mui-hong.jpg";
// import specialtyImg6 from "../../../assets/specialty/cot-song.jpg";

class Specialty extends Component {



    render() {
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };
        return (
            <div className="section-specialty">
                <div className="specialty-container">
                    <div className="specialty-header">
                        <span className="title-section">Chuyên khoa phổ biến</span>
                        <button className="btn-section">xem thêm</button>
                    </div>
                    <div className="specialty-body">
                        <Slider {...settings}>
                            <div className="specialty-customize">
                                <div className="bg-image1" />
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className="specialty-customize">
                                <div className="bg-image2" />
                                <div>Thần kinh</div>
                            </div>
                            <div className="specialty-customize">
                                <div className="bg-image3" />
                                <div>Tiêu hóa</div>
                            </div>
                            <div className="specialty-customize">
                                <div className="bg-image4" />
                                <div>Tim mạch</div>
                            </div>
                            <div className="specialty-customize">
                                <div className="bg-image5" />
                                <div>Tai mũi họng</div>
                            </div>
                            <div className="specialty-customize">
                                <div className="bg-image6" />
                                <div>Cột sống</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
