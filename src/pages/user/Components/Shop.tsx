import React, { useEffect, useState } from 'react'
import { useGetProductsQuery } from '../../../api_slice/api_product'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Link } from 'react-router-dom'
import instance from '../../../api_slice/port';
import { Button, Input } from 'antd';
import { RootState } from '../../../app/store';
import { useSelector } from 'react-redux';

type Props = {}

const Shop = (props: Props) => {
    // const { data: products = [], isLoading, error } = useGetProductsQuery()


    const dataSearch = useSelector((state: RootState) => state.searchSlice.value)


    return (
        <div>
            {/* Breadcrumb Begin */}
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <Link to={'/'}><i className="fa fa-home" />Trang chủ</Link>
                                <span>Cửa hàng</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}
            {/* Shop Section Begin */}
            <section className="shop spad">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                {dataSearch.map((item: any) => (
                                    <div className="col-lg-3 col-md-6">
                                        <div className="product__item">
                                            <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${item.product_images[0]})` }}>
                                                <div className="label new">Mới</div>
                                                <ul className="product__hover">
                                                    <li><Link to="img/shop/shop-1.jpg" className="image-popup"><span className="arrow_expand" /></Link></li>
                                                    <li><Link to="#"><span className="icon_heart_alt" /></Link></li>
                                                    <li><Link to="#"><span className="icon_bag_alt" /></Link></li>
                                                </ul>
                                            </div>
                                            <div className="product__item__text">
                                                <h6 className='nameProduct'><Link to={`/shop/detail/${item._id}`}>{item.product_name}</Link></h6>
                                                <div className="product__price">{(item.product_discount ? (item.product_discount).toLocaleString('vi-VN', {style: 'currency',currency: 'VND'}) : (item.product_price).toLocaleString('vi-VN', {style: 'currency',currency: 'VND'}))}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}


                                <div className="col-lg-12 text-center">
                                    <div className="pagination__option">
                                        <Link to="#">1</Link>
                                        <Link to="#">2</Link>
                                        <Link to="#">3</Link>
                                        <Link to="#"><i className="fa fa-angle-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shop Section End */}
            {/* Instagram Begin */}
            <div className="instagram">
                <div className="container-fluid">
                    <div className="row">
                        <Swiper
                            // install Swiper modules
                            modules={[A11y]}
                            spaceBetween={50}
                            slidesPerView={6}
                            autoplay
                        >
                            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                                <div className="instagram__item set-bg">
                                    <SwiperSlide><img src="https://res.cloudinary.com/dmc2husvv/image/upload/v1684422775/insta-6_lodtap.jpg" alt="" /></SwiperSlide>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                                <div className="instagram__item set-bg">
                                    <SwiperSlide><img src="https://res.cloudinary.com/dmc2husvv/image/upload/v1684594556/anhvuong5_cwgn6e.jpg" alt="" /></SwiperSlide>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                                <div className="instagram__item set-bg">
                                    <SwiperSlide><img src="https://res.cloudinary.com/dmc2husvv/image/upload/v1684594285/anhvuong_srlmoa.webp" alt="" /></SwiperSlide>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                                <div className="instagram__item set-bg">
                                    <SwiperSlide><img src="https://res.cloudinary.com/dmc2husvv/image/upload/v1684422775/insta-2_n2qvrp.jpg" alt="" /></SwiperSlide>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                                <div className="instagram__item set-bg">
                                    <SwiperSlide><img src="https://res.cloudinary.com/dmc2husvv/image/upload/v1684594556/anhvuong3_xmih3y.jpg" alt="" /></SwiperSlide>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                                <div className="instagram__item set-bg">
                                    <SwiperSlide><img src="https://res.cloudinary.com/dmc2husvv/image/upload/v1684594929/anhvuong8_vk0kil.jpg" alt="" /></SwiperSlide>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                                <div className="instagram__item set-bg">
                                    <SwiperSlide><img src="https://res.cloudinary.com/dmc2husvv/image/upload/v1684422775/insta-6_lodtap.jpg" alt="" /></SwiperSlide>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                                <div className="instagram__item set-bg">
                                    <SwiperSlide><img src="https://res.cloudinary.com/dmc2husvv/image/upload/v1684594928/anhvuong6_wm4sej.jpg" alt="" /></SwiperSlide>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                                <div className="instagram__item set-bg">
                                    <SwiperSlide><img src="https://res.cloudinary.com/dmc2husvv/image/upload/v1684594928/anhvuong7_hlga4v.jpg" alt="" /></SwiperSlide>
                                </div>
                            </div>



                        </Swiper>
                    </div>
                </div>
            </div>
            {/* Instagram End */}
        </div>
    )
}

export default Shop