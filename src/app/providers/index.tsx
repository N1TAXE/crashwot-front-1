import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './RouterProvider';
import {QueryClientProvider} from "./QueryClientProvider.tsx";
import {FullPageError} from "../../shared/ui/full-page-error";
import { ToastContainer } from 'react-toastify';
import '../styles/style.scss'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {WebSocketLink} from "@apollo/client/link/ws";
import {SubscriptionClient} from "subscriptions-transport-ws";

const link = new WebSocketLink(
    new SubscriptionClient("ws://188.120.243.85:8000/api", {
        reconnect: false
    })
);

const client = new ApolloClient({
    link,
    uri: 'http://188.120.243.85:8000/api',
    cache: new InMemoryCache()
});

export function Provider() {
    return (
        <ErrorBoundary FallbackComponent={FullPageError}>
            <QueryClientProvider>
                <BrowserRouter>
                    <ApolloProvider client={client}>
                        <ToastContainer/>
                        <Router />
                    </ApolloProvider>
                </BrowserRouter>
            </QueryClientProvider>
        </ErrorBoundary>
    )
}
