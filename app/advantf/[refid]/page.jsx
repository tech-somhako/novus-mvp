import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";



// A helper function to fetch job details from the backend
async function fetchJob(refid) {
    const res = await fetch(`http://172.207.42.36/api/job/${refid}/`, {
        // Optionally enable cache revalidation
        next: { revalidate: 10 },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch job details");
    }

    return res.json();
}

// The main page component for the dynamic route
export default async function JobDetailPage({ params }) {
    const { refid } = params;

    try {
        // Fetch the job details using the helper function
        const job = await fetchJob(refid);

        return (
            <Markdown className="prose prose-lg max-w-none whitespace-pre-line"
                              remarkPlugins={[remarkGfm]}
                              rehypePlugins={[rehypeRaw]}>{job.description}</Markdown >
        );
    } catch (error) {
        return (
            <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
                <h1>Error</h1>
                <p>Failed to load job details: {error.message}</p>
            </div>
        );
    }
}
