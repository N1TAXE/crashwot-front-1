import React from 'react';
import styles from "./styles.module.scss";
import {Icon} from "../../shared/ui/icon";
import {useSwiper} from "swiper/react";

const SliderButtons = () => {
    const swiper = useSwiper()
    return (
        <div className={styles.modalSliderNavigation}>
            <button onClick={() => swiper.slidePrev()}>
                <Icon icon="arrow" size={8}/>
            </button>
            <button onClick={() => swiper.slideNext()}>
                <Icon icon="arrow" size={8}/>
            </button>
        </div>
    );
};

export default SliderButtons;