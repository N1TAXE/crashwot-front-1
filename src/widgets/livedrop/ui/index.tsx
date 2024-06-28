import React, {useEffect, useState} from 'react';
import styles from "./styles.module.scss";
import {Icon} from "../../../shared/ui/icon";
import {LiveDropItem} from "../../../entities/livedrop-item";
import {DataLiveDropType} from "../../../shared/types";
import {testDataLiveDrop} from "../../../shared/testData";
export const LiveDrop = () => {
    const [data, setData] = useState<DataLiveDropType[]>([])
    const [state, setState] = useState<string>('all')
    useEffect(() => {
        setData(testDataLiveDrop)
    }, []);
    const handleClick = () => {
        setState(prevState => prevState === 'all' ? 'best' : 'all')
    }
    return (
        <div className={styles.livedrop}>
            <div className={styles.livedropButtons}>
                <span>LIVE DROPS</span>
                <div className={styles.livedropButtonsInner}>
                    <button onClick={handleClick} className={`${styles.livedropButtonsInnerButton}${state === 'all' ? ` ${styles.active}` : ''}`}>
                        <Icon icon="link" size={16}/>
                    </button>
                    <button onClick={handleClick} className={`${styles.livedropButtonsInnerButton}${state === 'best' ? ` ${styles.active}` : ''}`}>
                        <Icon icon="trophy" size={16}/>
                    </button>
                </div>
            </div>
            <div className={styles.livedropList}>
                {data.map((item, i) => (
                    <LiveDropItem key={i} data={item}/>
                ))}
            </div>
        </div>
    );
};