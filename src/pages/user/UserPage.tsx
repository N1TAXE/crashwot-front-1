import styles from './styles.module.scss'
import {ProfileLevel, ProfileReferrals, ProfileUser} from "../../widgets/user";
export const UserPage = () => {
    return (
        <div className={`container ${styles.profile}`}>
            <div className={styles.profileTop}>
                <ProfileUser/>
                <ProfileLevel/>
                <ProfileReferrals/>
            </div>
        </div>
    )
}