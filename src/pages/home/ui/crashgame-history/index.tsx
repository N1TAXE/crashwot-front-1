import styles from './styles.module.scss'
import clsx from 'clsx';
export const CrashGameHistory = () => {
    return (
        <div className={styles.card}>
            {Array.from({ length: 20 }, (_, index) =>
                <div key={index} className={clsx(styles.item, styles.purple)}>
                    3.21x
                </div>
            )}
        </div>
    )
}