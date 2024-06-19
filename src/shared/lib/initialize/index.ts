import {useChatStore} from "../../../app/stores/gobalStore.tsx";
import {useEffect} from "react";

export const useInitializeChatData = () => {
    const { chatData, setChatData } = useChatStore();

    useEffect(() => {
        const savedData = localStorage.getItem('chat');
        if (savedData) {
            setChatData(JSON.parse(savedData));
        }
    }, [setChatData]);

    useEffect(() => {
        localStorage.setItem('chat', JSON.stringify(chatData));
    }, [chatData]);
};