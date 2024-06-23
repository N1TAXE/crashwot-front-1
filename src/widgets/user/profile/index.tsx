import styles from './styles.module.scss'
import {Button} from "../../../shared/ui/button";
import {Icon} from "../../../shared/ui/icon";
import { useCopyToClipboard } from 'usehooks-ts';
import toast from "react-hot-toast";
import {useModalStore} from "../../../app/stores";
export const ProfileUser = () => {
    const [, copy] = useCopyToClipboard();
    const { openModal } = useModalStore();
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
                <Button onClick={() => openModal('user_settings')} color="dark" icon="cog"/>
                <div className={styles.profileUserTopInfo}>
                    <h4>Константин Константиновский</h4>
                    <div className={styles.profileUserTopInfoStats}>
                        <div className={styles.badgeTop}>
                            #3245
                        </div>
                        <div onClick={handleCopy('273541')} className={styles.badgeId}>
                            ID #273541
                            <Icon icon="copy" size={10}/>
                        </div>
                    </div>
                </div>
                <div className={styles.profileUserTopImage}>
                    <img src="https://avatars.steamstatic.com/892663c574bc2716786540cdbb4e585b1d23406a_full.jpg" alt=""/>
                    <Icon icon="wg" size={12}/>
                </div>
            </div>
            <div className={styles.profileUserBottom}>
                <div className={styles.profileUserBottomWithdraw}>
                    <div className={styles.profileUserBottomWithdrawState}>
                        5560.53
                        <Icon icon="coins"/>
                    </div>
                    <Button color="blue" size="regular" icon="withdraw">Вывод</Button>
                </div>
            </div>
            <Button color="green" size="medium" icon="add">Пополнение</Button>
        </div>
    );
};