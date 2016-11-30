import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import React from "react";
import ReactDOM from "react-dom";

import PostList from "./PostList.jsx";

const networkInterface = createNetworkInterface({
  uri: "http://localhost:4000/api"
});

const client = new ApolloClient({
  networkInterface
});

ReactDOM.render(
    <ApolloProvider client={client}>
    <PostList />
    </ApolloProvider>,
  document.getElementById("app")
);
