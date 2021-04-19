import React from 'react';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Buscador from "./componets/buscador"



const client = new ApolloClient({
  uri: "http://127.0.0.1:8000/graphql",
  cache: new InMemoryCache,
   
});



function App() {
  return (

    <ApolloProvider client={client}>
      <div className="App">
        <Buscador />
      </div>
    </ApolloProvider>

  );


}

export default  App

