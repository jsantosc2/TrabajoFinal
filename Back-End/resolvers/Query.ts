import {
  Database
} from "https://deno.land/x/mongo@v0.12.1/mod.ts";
import {
  GQLError,
} from "https://deno.land/x/oak_graphql@0.6.2/mod.ts";


const Query = {
  getTask: async(
    parent: any,
    args: any,
    ctx: any
  ):  Promise<String> => {
    try {
      const db: Database = ctx.db;
      const tasks = db.collection<any>("animes");
      const task = await tasks.findOne({ title: "One Piece" });



      return task.synopsis;
    } catch (e) {
      throw new GQLError(e);
    }
  },


};

export {Query}