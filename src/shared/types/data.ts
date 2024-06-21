export interface DataCrashGameType {
    id: string
    bet: DataCrashBetType[]
}

export interface DataCrashBetType {
    id: string
    createdAt: Date
    bet: number
    coef: number
    win: boolean
}

export interface DataWithdrawType {
    id: string
    createdAt: Date
    method: string
    requisites: string
    sum: number
    email: string
    status: string
}


export interface DataUserType {
    id: number
    name: string
    avatar: string
    balance: number
    steam?: string
    role: string
    inventory?: DataItemType[]
    bets?: DataCrashBetType[]
    withdraws?: DataWithdrawType[]
}

export interface DataCategoryType {
    id: number
    title: string
    sorting: number
}

export interface DataCaseType {
    id: number
    title: string
    metatitle: string
    metadescription: string
    metakeywords: string
    image: string
    position: number
    oldprice: number
    price: number
    price10: number
    price20: number
    price30: number
    category: DataCategoryType
    items: DataItemType[]
    sorting: number
}

export interface DataItemType {
    id: number
    title: string
    image: string
    rarity: number
    price: number
}

export interface DataLiveDropType {
    id: number
    case: DataCaseType
    item: DataItemType
    user: DataUserType
    date: Date
}