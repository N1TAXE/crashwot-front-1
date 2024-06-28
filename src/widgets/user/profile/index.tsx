import styles from './styles.module.scss'
import {Button} from "../../../shared/ui/button";
import {Icon} from "../../../shared/ui/icon";
import { useCopyToClipboard } from 'usehooks-ts';
import toast from "react-hot-toast";
import {useModalStore} from "../../../app/stores";
import {useUserStore} from "../../../app/stores/userStore.tsx";
import {ModalUserSettings} from "../../../entities/modals";
export const ProfileUser = () => {
    const [, copy] = useCopyToClipboard();
    const { openModal } = useModalStore();
    const {user} = useUserStore()
    const handleCopy = (text: string) => () => {
        copy(text)
            .then(() => {
                toast.success('ID пользователя успешно скопировано!')
            })
            .catch(error => {
                console.error('Failed to copy!', error)
            })
    }

    if (!user) return <>Loading...</>

    return (
        <div className={styles.profileUser}>
            <div className={styles.profileUserTop}>
                <Button onClick={() => openModal(<ModalUserSettings />)} color="dark" icon="cog"/>
                <div className={styles.profileUserTopInfo}>
                    <h4>{user.name}</h4>
                    <div className={styles.profileUserTopInfoStats}>
                        <div className={styles.badgeTop}>
                            #3245
                        </div>
                        <div onClick={handleCopy('273541')} className={styles.badgeId}>
                            ID #{user.id}
                            <Icon icon="copy" size={10}/>
                        </div>
                    </div>
                </div>
                <div className={styles.profileUserTopImage}>
                    <img src={user.avatar} alt={user.name}/>
                    <Icon icon="wg" size={12}/>
                </div>
            </div>
            <div className={styles.profileUserBottom}>
                <div className={styles.profileUserBottomWithdraw}>
                    <div className={styles.profileUserBottomWithdrawState}>
                        {user.balance}
                        <Icon icon="coins"/>
                    </div>
                    <Button color="blue" size="regular" icon="withdraw">Вывод</Button>
                </div>
            </div>
            <Button color="green" size="medium" icon="add">Пополнение</Button>
        </div>
    );
};