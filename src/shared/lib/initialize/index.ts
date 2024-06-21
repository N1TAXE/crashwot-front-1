import {useChatStore} from "../../../app/stores/gobalStore.tsx";
import {useEffect} from "react";
import {useWindowDimensions} from "../hooks";

export const useInitializeChatData = () => {
    const { chatData, setChatData } = useChatStore();
    const [ , width ] = useWindowDimensions();

    useEffect(() => {
        const savedData = localStorage.getItem('chat');
        if (savedData) {
            if (width > 1280) {
                setChatData(JSON.parse(savedData));
            }
        }
    }, [setChatData]);

    useEffect(() => {
        localStorage.setItem('chat', JSON.stringify(chatData));
    }, [chatData]);
};