import {ApolloClient, HttpLink, InMemoryCache, split} from "@apollo/client";
import {WebSocketLink} from "@apollo/client/link/ws";
import {getMainDefinition} from "@apollo/client/utilities";

const httpLink = new HttpLink({
    uri: 'http://188.120.243.85:8000/api',
});

export const wsLink = new WebSocketLink({
    uri: `ws://188.120.243.85:8001`,
    options: {
        reconnect: true,
    },
});

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
});

export default client