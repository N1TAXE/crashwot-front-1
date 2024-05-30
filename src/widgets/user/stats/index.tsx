import styles from './styles.module.scss'
import {Icon} from "../../../shared/ui/icon";
const ProfileStats = () => {
    return (
        <div className={styles.stats}>
            <div className={styles.statsItem}>
                <div className={styles.statsItemInfo}>
                    <h4>32</h4>
                    <p>игр сыграно</p>
                </div>
                <div className={styles.statsItemInfoIcon}>
                    <Icon icon="gamepad"/>
                </div>
            </div>
            <div className={styles.statsItem}>
                <div className={styles.statsItemInfo}>
                    <h4>3256</h4>
                    <p>выигрыш</p>
                </div>
                <div className={styles.statsItemInfoIcon}>
                    <Icon icon="coins"/>
                </div>
            </div>
            <div className={styles.statsItem}>
                <div className={styles.statsItemInfo}>
                    <h4>321656</h4>
                    <p>топ выигрыш</p>
                </div>
                <div className={styles.statsItemInfoIcon}>
                    <Icon icon="trophy"/>
                </div>
            </div>
        </div>
    );
};

export default ProfileStats;