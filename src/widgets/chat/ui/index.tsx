import styles from './styles.module.scss'
import {Icon} from "../../../shared/ui/icon";
import {Button} from "../../../shared/ui/button";
import {ChatMessage} from "./chat-message";
import {useEffect, useState} from "react";
import {useChatStore} from "../../../app/stores";
import {TooltipProps} from "rc-tooltip/lib/Tooltip";
import Tooltip from "rc-tooltip";

const ttText = (
    <div className={styles.chatRules}>
        <h4>В чате запрещено:</h4>
        <ol>
            <li>Сливать промо / секретные коды</li>
            <li>Попрошайничество</li>
            <li>Оскорблять администрацию</li>
            <li>Показывать чрезмерную агрессию и негатив</li>
            <li>Обвинять администрацию сайта или сайт в обмане</li>
            <li>Рекламировать сторонние ресурсы</li>
            <li>Спамить / Флудить</li>
            <li>Разжигание ненависти</li>
            <li>Рекламировать реферальный код</li>
        </ol>
        <span className={styles.chatRulesWarning}>
            Эмоции после поражения могут сыграть с Вами злую шутку. И помните: Вы всегда можете вывести предметы
        </span>
    </div>
)

const tt: Omit<TooltipProps, 'children'> = {
    placement: 'top',
    trigger: ["click"],
    overlay: ttText,
}
export const Chat = () => {
    const { chatData, setChatData } = useChatStore();
    const [state, setState] = useState<boolean>(false);

    useEffect(() => {
        setState(chatData.isOpened);
    }, [chatData]);

    const handleChatButtonClick = () => {
        setChatData({ isOpened: !chatData.isOpened });
    };

    return (
        <div className={`${styles.chat}${state ? ` ${styles.opened}` : ''}`}>
            {state && (
                <>
                    <div className={styles.chatHeader}>
                        <div className={styles.chatInfo}>
                            <div className={styles.chatInfoTop}>
                                <Icon icon="chat" />
                                Онлайн-чат
                                <Tooltip {...tt}>
                                    <Button size='small' className={styles.chatRulesButton}>Правила</Button>
                                </Tooltip>
                            </div>
                            <div className={styles.chatOnline}>
                                1233
                            </div>
                        </div>
                        <Button onClick={handleChatButtonClick} icon="pointer" size="regular" color="dark" />
                    </div>
                    <div className={styles.chatContent}>
                        <div className={styles.messagesWrap}>
                            <div className={styles.messagesList}>
                                {Array.from({ length: 16 }, (_, i) => (
                                    <ChatMessage key={i} />
                                ))}
                            </div>
                        </div>
                        <div className={styles.chatBottom}>
                            <div className={styles.chatReply}>
                                <div className={styles.chatReplyInfo}>
                                    <span>Ответить: </span>
                                    <span>nickname</span>
                                </div>
                                <Button size="small" icon="cross" />
                            </div>
                            <div className={styles.chatInput}>
                                <input type="text" placeholder="Введите сообщение..." />
                                <Button icon="send" size="regular" />
                            </div>
                        </div>
                    </div>
                </>
            )}
            {!state && (
                <Button onClick={handleChatButtonClick} className={styles.chatButton} icon="chat" size="regular" color="green" />
            )}
        </div>
    );
};