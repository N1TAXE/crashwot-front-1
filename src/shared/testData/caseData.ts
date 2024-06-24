import {DataCaseType} from "../types";
import {testItemsData} from "./itemData.ts";

export const testCaseData: DataCaseType[] = [
    {
        id: 1,
        title: 'Тестовый кейс',
        altName: 'test',
        image: 'https://ggdrop.app/public/storage/cases/JX664ne9fpGSzdYF34PvdyALInmK3690t0c5XsSM.png',
        metatitle: 'Test Case',
        metadescription: "Test case description",
        metakeywords: "test, case, keywords",
        position: 1,
        oldprice: 9999,
        price: 5999,
        price10: 6999,
        price20: 7999,
        price30: 8999,
        items: testItemsData
    }
]