import styles from './styles.module.scss'
import {DataType, FaqItem} from "./ui/faq-item";
import {Button} from "../../shared/ui/button";
import clsx from "clsx";
export const SupportPage = () => {
    const faqContent : DataType[] = [
        {
            id: 0,
            title: 'Пополнил баланс, а деньги не пришли, что делать?',
            text: 'Если денежные средства не были зачислены автоматически в течении 5-10 минут с момента подтверждения платежа обратитесь в тех поддержку. Чаще всего затруднения с оплатой вызваны на стороне платежного агрегатора, а не магазина, стоит это учитывать!!!'
        },
        {
            id: 1,
            title: 'Аккаунт не работает, что делать?',
            text: 'Для начала внимательно почитать описание к купленному аккаунту, потому что иногда покупатель должен собственно ручно восстанавливать аккаунт Wargaming используя данные от почты аккаунта, которые он купил. \n Также проверить аккаунт на сайте Wargaming.\n Если возникают какие-то проблемы с заходом на сам сайт Wargaming или на почту от аккаунта, обратитесь в тех поддержку'
        },
        {
            id: 2,
            title: 'В течении какого времени приходит золото, которое я выиграл?',
            text: 'Моментально. Важно, чтобы вы указали действующий логин своего аккаунта wargaming, туда будет зачислена голда.'
        }
    ]
    return (
        <div className={`container ${styles.support}`}>
            <div className={styles.supportFaq}>
                {faqContent && faqContent.map((item) => (
                    <FaqItem data={item} key={item.id}/>
                ))}
            </div>
            <div className={styles.supportChatWrapper}>
                <div className={styles.supportChatBanner}>
                    <h2>Не нашли ответ на свой вопрос?</h2>
                    <span>
                            Воспользуйтесь технической поддержкой прямо на сайте!
                            <br/>
                            Мы ответим на все ваши вопросы.
                        </span>
                </div>
                <div className={styles.supportChat}>
                    <div className={styles.supportChatHeader}>
                        <div className={styles.supportChatHeaderBlock}>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#92E7A5"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.5415 20.8066L16.842 26.6589C16.7448 26.7584 16.6339 26.8082 16.5079 26.8082C16.3826 26.8082 16.2711 26.7584 16.1745 26.6589L15.4495 25.9147C15.3529 25.8158 15.3043 25.7018 15.3043 25.5726C15.3043 25.4434 15.3529 25.3293 15.4495 25.2298L22.2081 18.2905C22.3046 18.1917 22.4156 18.1419 22.5415 18.1419C22.6675 18.1419 22.7784 18.1917 22.875 18.2905L32.6957 28.2961V31.1458L22.5415 20.8066ZM25.3019 15.3043L32.6957 22.8369V25.6866L23.8957 16.7268L25.3019 15.3043ZM22.2081 24.0088C22.3046 23.9099 22.4156 23.8602 22.5415 23.8602C22.6675 23.8602 22.7784 23.9099 22.875 24.0088L31.3883 32.6957H28.5925L22.5415 26.5255L16.842 32.3772C16.7448 32.4761 16.6339 32.5258 16.5079 32.5258C16.3826 32.5258 16.2711 32.4767 16.1745 32.3772L15.4495 31.6317C15.3529 31.5334 15.3043 31.4194 15.3043 31.2902C15.3043 31.161 15.3529 31.047 15.4495 30.9475L22.2081 24.0088ZM22.5919 29.6603C22.719 29.6603 22.8306 29.7113 22.9283 29.8138L25.6894 32.6957H19.5118L22.2561 29.8138C22.3532 29.7113 22.466 29.6603 22.5919 29.6603Z" fill="#92E7A5"/>
                            </svg>
                            <span>
                        Специалист
                    </span>
                        </div>
                        <Button size="regular" color="blue" icon="gift">Пишите нам в ВК</Button>
                    </div>
                    <div className={styles.supportChatContent}>
                        <div className={styles.supportChatContentMessages}>
                            <div className={clsx(styles.message, styles.outgoing)}>
                                <div className={styles.messageAvatar}>
                                    <img src="https://avatars.steamstatic.com/506f9ff9f2647ec2edce19cdaa84282470f68510_full.jpg" alt=""/>
                                </div>
                                <div className={styles.messageInfo}>
                                    <div className={styles.messageName}>
                                        nickname
                                    </div>
                                    <div className={styles.messageText}>
                                        text
                                    </div>
                                    <div className={styles.messageDate}>
                                        26.01.24 09:16
                                    </div>
                                </div>
                            </div>
                            <div className={clsx(styles.message)}>
                                <div className={styles.messageAvatar}>
                                    <img src="https://avatars.steamstatic.com/506f9ff9f2647ec2edce19cdaa84282470f68510_full.jpg" alt=""/>
                                </div>
                                <div className={styles.messageInfo}>
                                    <div className={styles.messageName}>
                                        nickname
                                    </div>
                                    <div className={styles.messageText}>
                                        text
                                    </div>
                                    <div className={styles.messageDate}>
                                        26.01.24 09:16
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.supportChatContentInput}>
                            <input placeholder="Введите текст сообщения..." type="text"/>
                            <Button icon="send" size="regular"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}