import { gql } from "https://deno.land/x/oak_graphql@0.6.2/mod.ts";

const Schema = gql`
 
  type DevolverBoolean{
    done:Boolean
  }
  type Query {
    getTask: String
 
  }

  type Mutation {
    register(name:String, password:String): Boolean

  }
`;

export { Schema };
