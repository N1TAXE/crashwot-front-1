import styles from './styles.module.scss'
import {Icon} from "../../../shared/ui/icon";
import {Button} from "../../../shared/ui/button";
import {useModalStore} from "../../../app/stores";
import {ModalSliderType} from "../../../entities/modals/ModalSlider.tsx";

export const ProfileLevel = () => {
    const {openModal} = useModalStore()
    const hiw_level: ModalSliderType = {
        slides: [
            {
                image: 'https://skinlords.com/wp-content/uploads/2022/09/ggdrop-com-landing-page.jpg',
                title: 'Система прогрессии',
                desc: 'test',
                icon: "star",
            },
            {
                video: 'http://localhost:3000/static/media/1.86dda4521875dcb41ad7.mp4',
                title: 'Система прогрессии',
                desc: 'test2'
            }
        ]
    }
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
                    <Button onClick={() => openModal('user_hiw_level', hiw_level)} icon="question" color="dark" size="small" />
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