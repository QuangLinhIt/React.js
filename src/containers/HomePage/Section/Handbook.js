import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Handbook.scss';
import { FormattedMessage } from 'react-intl';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Handbook extends Component {



    render() {
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
        };
        return (
            <div className="section-handbook">
                <div className="handbook-container">
                    <div className="handbook-header">
                        <span className="title-section">Cẩm nang</span>
                        <button className="btn-section">tất cả bài viết</button>
                    </div>
                    <div className="handbook-body">
                        <Slider {...settings}>
                            <div className="handbook-customize">
                                <div className="bg-image1">
                                    <div className="text1">Cắt bao quy đầu ở đâu TPHCM: địa chỉ uy tín, thông tin rõ ràng</div>
                                </div>
                            </div>
                            <div className="handbook-customize">
                                <div className="bg-image2">
                                    <div className="text2">Top 6 bệnh viện, phòng khám Nam khoa Hà Nội đáng tin cậy</div>
                                </div>
                            </div>
                            <div className="handbook-customize">
                                <div className="bg-image3">
                                    <div className="text3">Review khám cơ xương khớp tại bệnh viện Sài Gòn: Danh sách bác sĩ, chi phí khám</div>
                                </div>
                            </div>
                            <div className="handbook-customize">
                                <div className="bg-image4">
                                    <div className="text4">Khám tai mũi họng tại bệnh viện Nam Sài Gòn có tốt không? Review chi tiết</div>
                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Handbook);
