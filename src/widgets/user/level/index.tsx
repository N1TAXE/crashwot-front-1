import styles from './styles.module.scss'
import {Icon} from "../../../shared/ui/icon";
import {Button} from "../../../shared/ui/button";

export const ProfileLevel = () => {
    return (
        <div className={styles.profileLevel}>
            <div className={styles.profileLevelHeader}>
                <div className={styles.profileLevelHeaderInfo}>
                    <Icon icon="star" size={12}/>
                    <div className={styles.profileLevelHeaderInfoTitle}>
                        <h4>Уровень</h4>
                        <p>Система прогрессии</p>
                    </div>
                </div>
                <div className={styles.profileLevelHeaderButtons}>
                    <Button icon="question" color="dark" size="small" />
                    <Button icon="arrow" color="blue" size="small">Награды</Button>
                </div>
            </div>
            <div className={styles.profileLevelContent}>
                <div className={styles.profileLevelContentLevel}>
                    <div className={styles.profileLevelContentLevelInfo}>
                        <h4>2</h4>
                        <p>уровень аккаунта</p>
                    </div>
                    <Icon icon="star" size={14}/>
                </div>
                <div className={styles.profileLevelContentWarning}>
                    <p>ВНИМАНИЕ! Если вы перестанете играть у вас будут сгорать бонусы.</p>
                    <Button icon="cross" size="small"/>
                </div>
                <div className={styles.profileLevelContentProgressWrapper}>
                    <div className={styles.profileLevelContentProgressHeader}>
                        <div className={styles.profileLevelContentProgressHeaderExp}>
                            <span>
                                <p>2365</p>
                                <Icon icon="star" size={12}/>
                            </span>
                            <p>опыта</p>
                        </div>
                        <div className={styles.profileLevelContentProgressHeaderExp}>
                            <span>
                                <p>2365</p>
                                <Icon icon="star" size={12}/>
                            </span>
                            <p>до след. уровня</p>
                        </div>
                    </div>
                    <div className={styles.profileLevelContentProgressBar}>
                        <div className={styles.profileLevelContentProgressBarProgress} style={{width: '50%'}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};