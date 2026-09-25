import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex min-h-[70vh] items-center justify-center bg-black px-6 text-center">
            {/* <div className="max-w-md">
                <p className="font-oswald text-7xl font-bold tracking-tight text-[#C2F800] sm:text-8xl">
                    404
                </p>

                <h2 className="mt-4 text-2xl font-semibold text-white">
                    Page Not Found
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                    The page you're looking for doesn't exist or may have been moved.
                </p>

                <Link
                    href="/workouts"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#C2F800] px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-[#D4FF33]"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Workouts
                </Link>
            </div> */}
        </div>
    );
}