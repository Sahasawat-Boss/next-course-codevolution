# GET Req

(Store Data in memory)

/comments Folder
|-data.ts
|-route.ts

data.ts

```
export const comments = [
    {
        id: 1,
        text: "Comment 1"
    },
    {
        id: 2,
        text: "Comment 2"
    },
]
```
route.ts

```
import { comments } from "./data";

export async function GET(){
    return Response.json(comments);
}

//http://localhost:3000/comments
```
