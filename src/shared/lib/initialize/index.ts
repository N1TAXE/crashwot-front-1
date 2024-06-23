import {useEffect} from "react";
import {useWindowDimensions} from "../hooks";
import {useChatStore} from "../../../app/stores";
import {useUserStore} from "../../../app/stores/userStore.tsx";
import {LOCALSTORAGE} from "../../constants";

export const useInitializeChatData = () => {
    const { chatData, setChatData } = useChatStore();
    const [ , width ] = useWindowDimensions();

    useEffect(() => {
        const savedData = localStorage.getItem(LOCALSTORAGE.CHAT);
        if (savedData) {
            if (width > 1280) {
                setChatData(JSON.parse(savedData));
            }
        }
    }, [setChatData]);

    useEffect(() => {
        localStorage.setItem(LOCALSTORAGE.CHAT, JSON.stringify(chatData));
    }, [chatData]);
};


export const useInitializeCrashData = () => {
    const {crashSettings, setCrashSettings} = useUserStore();

    useEffect(() => {
        const savedData = localStorage.getItem(LOCALSTORAGE.CRASH);
        if (savedData) {
            setCrashSettings(JSON.parse(savedData));
        }
    }, [setCrashSettings]);

    useEffect(() => {
        localStorage.setItem(LOCALSTORAGE.CRASH, JSON.stringify(crashSettings));
    }, [crashSettings]);
};