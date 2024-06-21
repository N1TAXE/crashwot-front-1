import { Navigate, useRoutes } from 'react-router-dom';
import {MainLayout} from "../../widgets/layouts";
import {PATHS} from "../../shared/lib/react-router";
import {Page404} from "../../pages/error/Error404Page.tsx";
import {CrashGamePage} from "../../pages/home";
import {CasesFullPage, CasesListPage} from "../../pages/cases";
import {GiveawayPage} from "../../pages/giveaway";
import {EventPage} from "../../pages/event";
import {SupportPage} from "../../pages/support";
import {UserPage} from "../../pages/user";

export function Router() {
    return useRoutes([
        {
            element: <MainLayout/>,
            children: [
                {
                    path: PATHS.root,
                    element: <CrashGamePage/>
                },
                {
                    path: PATHS.giveaway,
                    element: <GiveawayPage/>
                },
                {
                    path: PATHS.top,
                    element: <EventPage/>
                },
                {
                    path: PATHS.support,
                    element: <SupportPage/>
                },
                {
                    path: PATHS.cases.list(),
                    element: <CasesListPage/>
                },
                {
                    path: PATHS.cases.root(':altName'),
                    element: <CasesFullPage/>
                },
                {
                    // eslint-disable-next-line
                    // @ts-expect-error
                    path: PATHS.user.root(':userId'),
                    element: <UserPage/>
                }
            ],
        },
        { path: '404', element: <Page404/> },
        { path: '*', element: <Navigate to={PATHS.root} replace /> },
    ]);
}