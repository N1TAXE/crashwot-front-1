import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './RouterProvider';
import {QueryClientProvider} from "./QueryClientProvider.tsx";
import {FullPageError} from "../../shared/ui/full-page-error";
import '../styles/style.scss'
import {ApolloProvider} from '@apollo/client';
import {Toaster} from "react-hot-toast";
import client from "../../shared/lib/apolloClient.ts";
import {useInitializeChatData} from "../../shared/lib/initialize";
import {Modal} from "../../shared/ui/modal";

export function Provider() {
    useInitializeChatData();
    return (
        <ErrorBoundary FallbackComponent={FullPageError}>
            <QueryClientProvider>
                <BrowserRouter>
                    <ApolloProvider client={client}>
                        <Modal />
                        <Toaster position="top-center"/>
                        <Router />
                    </ApolloProvider>
                </BrowserRouter>
            </QueryClientProvider>
        </ErrorBoundary>
    )
}
