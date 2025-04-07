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


// PUT ID
// {
//     "text": "Updated text for comment 1"
//   }
