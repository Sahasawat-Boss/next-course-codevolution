# Full API Req in Pages

http://localhost:3000/comments2

1. Data
```
export const comments = [
    { id: 1, text: 'First comment' },
    { id: 2, text: 'Second comment' },
];
```

2. Route for Page
```
import { comments  } from "./data";

export async function GET() {
    return Response.json(comments);
}

export async function POST(request: Request) {
    try {
        const comment = await request.json();

        if (!comment.text) {
            return new Response(JSON.stringify({ error: 'Text is required' }), {
                status: 400,
            });
        }

        const newComment = {
            id: comments.length + 1,
            text: comment.text,
        };

        comments.push(newComment);

        return new Response(JSON.stringify(newComment), {
            headers: { 'Content-Type': 'application/json' },
            status: 201,
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Invalid JSON format' }), {
            status: 400,
        });
    }
}
```

3. Route for Page/[id]
```
import { comments } from "../data";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = parseInt(params.id);
    const comment = comments.find((c) => c.id === id);

    if (!comment) {
        return new Response(JSON.stringify({ error: 'Comment not found' }), {
            status: 404,
        });
    }

    return new Response(JSON.stringify(comment), {
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = parseInt(params.id);
    const index = comments.findIndex((c) => c.id === id);

    if (index === -1) {
        return new Response(JSON.stringify({ error: 'Comment not found' }), {
            status: 404,
        });
    }

    const updated = await request.json();

    comments[index].text = updated.text;

    return new Response(JSON.stringify(comments[index]), {
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = parseInt(params.id);
    const index = comments.findIndex((c) => c.id === id);

    if (index === -1) {
        return new Response(JSON.stringify({ error: 'Comment not found' }), {
            status: 404,
        });
    }

    const deleted = comments.splice(index, 1)[0];

    return new Response(
        JSON.stringify({
            message: `Comment with ID ${id} deleted successfully.`,
            deleted,
        }),
        {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
        }
    );
}

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = parseInt(params.id);
    const index = comments.findIndex((c) => c.id === id);

    if (index === -1) {
        return new Response(JSON.stringify({ error: 'Comment not found' }), {
            status: 404,
        });
    }

    try {
        const updateData = await request.json();

        // Only update fields that exist
        if (updateData.text) {
            comments[index].text = updateData.text;
        }

        return new Response(JSON.stringify(comments[index]), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
            status: 400,
        });
    }
}

//
// PATCH ID
// {
//     "text": "Updated text for comment 1"
//   }


```
