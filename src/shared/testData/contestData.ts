import {DataContestType} from "../types";

export const testContestData: DataContestType = {
    prize: 'Название приза',
    image: 'https://ggdrop.app/public/storage/cases/y4PmPWM3jmDVOOvnKAN8ebOgldla5DjkLbZbZHiO.png',
    conditions: [
        {
            desc: 'Подписаться на Телеграмм',
            link: 'https://t.me'
        },
        {
            desc: 'Подписаться на ВК',
            link: 'https://vk.com'
        },
        {
            desc: 'Подписаться на Ютуб-канал',
            link: 'https://youtube.com'
        },
        {
            desc: 'Пополнить баланс',
            stats: 1000,
            time: 24
        },
        {
            desc: 'Сыграть в крашгейм',
            stats: 300,
            time: 24
        },
        {
            desc: 'Открыть любые кейсы',
            stats: 20,
            time: 24
        },
    ]
}