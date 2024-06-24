import React, {useState} from 'react';
import styles from "./styles.module.scss";
import clsx from "clsx";
import {GetRarityName} from "../../../shared/utils";
import {EXTERNAL_LINKS} from "../../../shared/constants";
import {DataCaseType, DataItemType} from "../../../shared/types";

const RouletteLine = ({lineItems, caseData} : {lineItems: DataItemType[]; caseData: DataCaseType}) => {
    const [cardWidth] = useState<number>(204)
    return (
        <div className={styles.caseInfo}>
            <div className={styles.caseImage}>
                <img src={caseData.image} alt={caseData.title}/>
            </div>
            <div className={styles.arrows}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.83467 16.6154C7.79704 18.4615 10.203 18.4615 11.1653 16.6154L17.6613 4.15385C18.6237 2.3077 17.4207 0 15.496 0H2.50403C0.5793 0 -0.623659 2.30769 0.338707 4.15385L6.83467 16.6154Z" fill="#92E7A5"/>
                </svg>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.83467 1.38462C7.79704 -0.461537 10.203 -0.46154 11.1653 1.38461L17.6613 13.8462C18.6237 15.6923 17.4207 18 15.496 18H2.50403C0.5793 18 -0.623659 15.6923 0.338707 13.8462L6.83467 1.38462Z" fill="#92E7A5"/>
                </svg>
            </div>
            <div className={styles.roulette}>
                <div style={{
                    transform: `translateX(-${cardWidth * 4}px)`
                }}
                     className={styles.rouletteRoot}>
                    {lineItems && lineItems.map((item) => (
                        <div key={item.id}
                             className={clsx(styles.rouletteItem, styles[GetRarityName(item.rarity)!])
                             }>
                            <div className={styles.rouletteItemImage}>
                                <img src={`${EXTERNAL_LINKS.STEAM_ITEMS}${item.image}`} alt={item.title}/>
                            </div>
                            <div className={styles.rouletteItemTitle}>
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RouletteLine;