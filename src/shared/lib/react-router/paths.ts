export const PATHS = {
    root: '/',
    cases: {
        root: (altName: string) => `/cases/${altName}`,
        list: () => '/cases',
    },
    giveaway: '/giveaway',
    top: '/top',
    support: '/support',
    user: {
        root: (userId: number) => `/user/${userId}`,
    },
    page404: '/404',
};