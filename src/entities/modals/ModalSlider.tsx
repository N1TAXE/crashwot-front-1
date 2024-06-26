import React, {Fragment} from 'react';
import styles from "./styles.module.scss";
import {Icon, IconTypes} from "../../shared/ui/icon";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import SliderButtons from "./SliderButtons.tsx";

export interface ModalSliderType {
    slides: {
        image?: string
        video?: string
        title: string
        icon?: IconTypes
        desc: string
    }[]
}

export const ModalSlider = ({data}: {data: ModalSliderType}) => {
    return (
        <Fragment>
            <Swiper
                className={styles.modalSlider}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                wrapperClass={styles.modalSliderContent}
                loop>
                {data.slides.map((item, i) => (
                    <SwiperSlide key={i} className={styles.modalSliderContentItem}>
                        {item.image ? <img src={item.image} alt={item.title}/> : item.video ? <video src={item.video} autoPlay={true} controls={false} muted loop /> : null}
                        <div className={styles.modalSliderContentItemContent}>
                            <div className={styles.modalHeader}>
                                {item.icon ? <Icon icon={item.icon}/> : null}
                                <h4>{item.title}</h4>
                            </div>
                            <span>{item.desc}</span>
                        </div>
                    </SwiperSlide>
                ))}
                <SliderButtons/>
            </Swiper>
        </Fragment>
    );
};