import styles from './styles.module.scss'
import {Icon} from "../../../../shared/ui/icon";
import {Input} from "../../../../shared/ui/input";
import {Button} from "../../../../shared/ui/button";
import {CrashSettingsType, useUserStore} from "../../../../app/stores/userStore.tsx";
import {testUserData} from "../../../../shared/testData";
import {useEffect, useState} from "react";
export const CrashGameInputs = () => {
    const {user, setUser, crashSettings, setCrashSettings} = useUserStore();
    const [settings, setSettings] = useState<CrashSettingsType>({sum: 0.1, editorRatio: 2, editorRatioList: [1.1, 1.2, 1.5, 2]});
    const [isEditing, setIsEditing] = useState<boolean>(false);

    useEffect(() => {
        setSettings(crashSettings)
    }, [crashSettings]);

    useEffect(() => {
        setCrashSettings(settings)
    }, [settings]);

    if (!user) return (
        <div className={styles.card}>
            <span className={styles.auth}>Чтобы играть в этот режим нужно быть авторизованым</span>
            <Button size='medium' color='green' icon="lock" onClick={() => setUser(testUserData)}>Авторизация</Button>
        </div>
    )
    return (
        <div className={styles.card}>
            <div className={styles.balance}>
                <div className={styles.balanceInfoWrap}>
                    <div className={styles.balanceInfo}>
                        <span>{user.balance}</span>
                        <span>баланс</span>
                    </div>
                    <Icon icon='coins'/>
                </div>
                <Button color='green-dark' icon='add'/>
            </div>
            <div className={styles.column}>
                <Input onChange={(e) => setSettings(prevState => ({ ...prevState, sum: parseFloat(e.target.value) }))} label='Введите сумму' type='number' name='sum' icon='add' value={settings!.sum}/>
                <div className={styles.flex}>
                    <Button onClick={() => setSettings(prevState => ({...prevState, sum: 20}))} size="small" color='dark-light'>20</Button>
                    <Button onClick={() => setSettings(prevState => ({...prevState, sum: 200}))} size="small" color='dark-light'>200</Button>
                    <Button onClick={() => setSettings(prevState => ({...prevState, sum: 500}))} size="small" color='dark-light'>500</Button>
                    <Button onClick={() => setSettings(prevState => ({...prevState, sum: user.balance}))} size="small" color='dark-light'>MAX</Button>
                </div>
            </div>
            <div className={styles.column}>
                <Input onChange={(e) => setSettings(prevState => ({ ...prevState, editorRatio: parseFloat(e.target.value) }))} label='Автовывод' type='number' name='autowithdraw' value={settings!.editorRatio}>
                    <Icon icon='cog' onClick={() => setIsEditing(prevState => !prevState)}/>
                </Input>
                <div className={styles.flex}>
                    {settings.editorRatioList.map((item, index) => (
                        !isEditing ? (
                            <Button onClick={() => setSettings(prevState => ({...prevState, editorRatio: item}))} key={index} size="small" color='dark-light'>x{item}</Button>
                        ):(
                            <Input
                                onChange={(e) => setSettings(prevState => {
                                    const newEditorRatioList = [...prevState.editorRatioList];
                                    newEditorRatioList[index] = parseFloat(e.target.value);
                                    return { ...prevState, editorRatioList: newEditorRatioList }
                            })}
                                type='number'
                                name='autowithdraw'
                                value={item}/>
                        )
                    ))}

                </div>
            </div>
            <Button size='medium' color='green'>Сделать ставку</Button>
        </div>
    )
}