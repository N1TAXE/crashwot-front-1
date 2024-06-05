import styles from "../referrals/styles.module.scss";
import {Icon} from "../../../shared/ui/icon";
import {Button} from "../../../shared/ui/button";
import {Input} from "../../../shared/ui/input";
import {useCopyToClipboard} from "usehooks-ts";
import toast from "react-hot-toast";

export const ProfileReferrals = () => {
    const [, copy] = useCopyToClipboard();
    const handleCopy = (text: string) => () => {
        copy(text)
            .then(() => {
                toast.success('Ссылка скопирована!')
            })
            .catch(error => {
                console.error('Failed to copy!', error)
            })
    }
    return (
        <div className={styles.profileReferrals}>
            <div className={styles.profileReferralsHeader}>
                <div className={styles.profileReferralsHeaderInfo}>
                    <Icon icon="star" size={12}/>
                    <div className={styles.profileReferralsHeaderInfoTitle}>
                        <h4>Рефералы</h4>
                        <p>Бонусная система</p>
                    </div>
                </div>
                <div className={styles.profileReferralsHeaderButtons}>
                    <Button icon="question" color="dark" size="small" />
                    <Button icon="arrow" color="blue" size="small">Уровни</Button>
                </div>
            </div>
            <div className={styles.profileReferralsContent}>
                <div className={styles.profileReferralsContentStats}>
                    <div className={styles.profileReferralsContentStatsItem}>
                        <div className={styles.profileReferralsContentStatsItemInfo}>
                            <h4>3254</h4>
                            <p>доход</p>
                        </div>
                        <Icon icon="coins"/>
                    </div>
                    <div className={styles.profileReferralsContentStatsItem}>
                        <div className={styles.profileReferralsContentStatsItemInfo}>
                            <h4>155</h4>
                            <p>рефералов</p>
                        </div>
                        <Icon icon="user"/>
                    </div>
                </div>
                <div onClick={handleCopy('273541')} className={styles.profileReferralsContentLink}>
                    <Input name="link" type="text" icon="copy" value="https://domen.com/nickname" disabled={true}/>
                </div>
            </div>
        </div>
    );
};