import { comments } from "./data";

export async function GET(){
    return Response.json(comments);
}

//http://localhost:3000/comments