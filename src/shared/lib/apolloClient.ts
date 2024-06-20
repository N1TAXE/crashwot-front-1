import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";

const httpLink = new HttpLink({
    uri: 'http://188.120.243.85:8000/api'
});

const wsLink = new GraphQLWsLink(
    createClient({
        url: 'ws://188.120.243.85:8001'
    })
)

const link = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
        );
    },
    wsLink,
    httpLink
)

const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
});

export default client