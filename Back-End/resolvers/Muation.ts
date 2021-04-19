import { Collection, Database } from "https://deno.land/x/mongo@v0.12.1/mod.ts";
import { GQLError } from "https://deno.land/x/oak_graphql@0.6.2/mod.ts";
interface entrada{
  name: string,
  password: string,

}
const Mutation = {
    register: async (parent: any, a:entrada, ctx: {db:Database}, info: any) =>{
      try {

        const users= await ctx.db.collection<any>("Users")

        if(await users.findOne({name:a.name})){
          return false;
        }else{
          await users.insertOne({name:a.name,password:a.password,token:null})
          return true;
        }
        
      } catch (e) {
        throw new GQLError(e);
      }
    },

  };

  export {Mutation }