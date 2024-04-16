import styles from './styles.module.scss'
import {Button} from "../../../shared/ui/button";
import {Icon} from "../../../shared/ui/icon";
import { useCopyToClipboard } from 'usehooks-ts';
import {toast} from "react-toastify";
export const ProfileUser = () => {
    const [copiedText, copy] = useCopyToClipboard();
    const handleCopy = (text: string) => () => {
        copy(text)
            .then(() => {
                toast.success('ID пользователя успешно скопировано!')
            })
            .catch(error => {
                console.error('Failed to copy!', error)
            })
    }
    return (
        <div className={styles.profileUser}>
            <div className={styles.profileUserTop}>
                <Button color="dark" icon="cog"/>
                <div className={styles.profileUserTopInfo}>
                    <h4>Константин Константиновский</h4>
                    <div className={styles.profileUserTopInfoStats}>
                        <div className={styles.badgeTop}>
                            #3245
                        </div>
                        <div onClick={handleCopy('273541')} className={styles.badgeId}>
                            ID #273541
                            <Icon icon="copy" size="10"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};