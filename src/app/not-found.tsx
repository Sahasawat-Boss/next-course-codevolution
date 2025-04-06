import Link from "next/link";

// app/not-found.tsx
export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-100 px-4">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-gray-700 mb-6">
                Oops! The page you’re looking for doesn’t exist or has been moved.
            </p>
            <Link
                href={'/'}
                className="border px-4 py-2 rounded-full"
            >
                Go Home
            </Link>
        </div>
    );
}
