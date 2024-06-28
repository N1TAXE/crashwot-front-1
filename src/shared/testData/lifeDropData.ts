import {DataLiveDropType} from "../types";
import {testCaseData} from "./caseData.ts";
import {testUserData} from "./userdata.ts";
import {testItemsData} from "./itemData.ts";

export const testDataLiveDrop: DataLiveDropType[] = [
    {
        id: 1,
        item: testItemsData[0],
        case: testCaseData[0],
        date: new Date('2024-06-20T19:43:13.948Z'),
        user: testUserData
    },
    {
        id: 2,
        item: testItemsData[1],
        case: testCaseData[1],
        date: new Date('2024-06-20T19:43:13.948Z'),
        user: testUserData
    },
    {
        id: 3,
        item: testItemsData[2],
        case: testCaseData[2],
        date: new Date('2024-06-20T19:43:13.948Z'),
        user: testUserData
    },
    {
        id: 4,
        item: testItemsData[3],
        case: testCaseData[2],
        date: new Date('2024-06-20T19:43:13.948Z'),
        user: testUserData
    },
    {
        id: 5,
        item: testItemsData[4],
        case: testCaseData[1],
        date: new Date('2024-06-20T19:43:13.948Z'),
        user: testUserData
    },
    {
        id: 6,
        item: testItemsData[5],
        case: testCaseData[2],
        date: new Date('2024-06-20T19:43:13.948Z'),
        user: testUserData
    },
]