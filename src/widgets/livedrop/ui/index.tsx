import React, {useState} from 'react';
import styles from "./styles.module.scss";
import {Icon} from "../../../shared/ui/icon";
import {LiveDropItem} from "../../../entities/livedrop-item";
import {testDataLiveDrop} from "../../../shared/testData";

export const LiveDrop = () => {
    const [state, setState] = useState<string>('all')

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
                {testDataLiveDrop.map((item, i) => (
                    <LiveDropItem key={i} data={item}/>
                ))}
            </div>
        </div>
    );
};