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
