import {DataCategoryType} from "../types";
import {testCaseData} from "./caseData.ts";

export const testCategoriesData: DataCategoryType[] = [
    {
        id: 1,
        title: "Наши сборки",
        sorting: 1,
        cases: testCaseData
    },
    {
        id: 2,
        title: "Игровые кейсы",
        sorting: 2,
        cases: testCaseData
    },
]