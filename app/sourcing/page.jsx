"use client"
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function SourcingApplicants() {
  const [candidates, setCandidates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [queryInput, setQueryInput] = useState("");
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(false);

  const fetchCandidates = async (query) => {
    setLoading(true);
    setCandidates([]); // Clear previous candidates
    setSelectedCandidates([]); // Clear selected candidates
    setCurrentIndex(0); // Reset the index to the first candidate
    setShowLoadMore(false); // Reset the button visibility

    try {
      const response = await fetch("http://172.207.42.36/sourcing-applicants/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: query,
        }),
      });
      const data = await response.json();

      // Split the response string into an array of candidates
      const rawResponse = data.response;
      const candidateArray = rawResponse
        .split("-----------------------------")
        .map((item) => item.trim())
        .filter((item) => item.length > 0);

      setCandidates(candidateArray);
      setCurrentIndex(0); // Start with the first candidate
    } catch (error) {
      console.error("Error fetching candidates:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleQueryChange = (event) => {
    setQueryInput(event.target.value);
  };

  const handleQuerySubmit = (event) => {
    event.preventDefault();
    if (queryInput.trim() !== "") {
      setQuery(queryInput);
      fetchCandidates(queryInput); // Fetch new candidates
    }
  };

  const showNextCandidate = () => {
    setSelectedCandidates((prevSelected) => [
      ...prevSelected,
      candidates[currentIndex], // Add the current candidate to the list
    ]);
    setCurrentIndex((prevIndex) => prevIndex + 1); // Move to the next candidate
  };

  const showSimilarProfiles = () => {
    const nextThreeCandidates = candidates.slice(currentIndex, currentIndex + 3);
    setSelectedCandidates((prevSelected) => [
      ...prevSelected,
      ...nextThreeCandidates, // Add the next three candidates to the list
    ]);
    setCurrentIndex((prevIndex) => prevIndex + nextThreeCandidates.length); // Move the index forward by 3
    setShowLoadMore(true); // Replace buttons with Load More
  };

  const loadMoreProfiles = () => {
    const nextThreeCandidates = candidates.slice(currentIndex, currentIndex + 3);
    setSelectedCandidates((prevSelected) => [
      ...prevSelected,
      ...nextThreeCandidates, // Add the next three candidates to the list
    ]);
    setCurrentIndex((prevIndex) => prevIndex + nextThreeCandidates.length); // Move the index forward by 3
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 space-y-6">
        {/* Query Input Section */}
        <div className="text-center">
          <form onSubmit={handleQuerySubmit} className="space-x-2 flex justify-center items-center">
            <input
              type="text"
              value={queryInput}
              onChange={handleQueryChange}
              placeholder="Enter query (e.g., Java developer with Spring Boot)"
              className="border border-gray-300 rounded-lg py-2 px-4 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-gray-400 transition-all"
            >
              {loading ? "Loading..." : "Search"}
            </button>
          </form>
        </div>

        {candidates.length > 0 && (
          <div className="space-y-6">
            {/* Display Selected Candidates */}
            {selectedCandidates.map((candidate, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <div className="text-xl font-semibold text-gray-900">Candidate {index + 1}</div>
                <div className="mt-4">
                  <ReactMarkdown
                    className="prose prose-lg max-w-none whitespace-pre-line"
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                  >
                    {candidate}
                  </ReactMarkdown>
                </div>
              </div>
            ))}

            {/* Display the current candidate */}
            {currentIndex < candidates.length && (
              <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <div className="text-xl font-semibold text-gray-900">
                  Candidate {selectedCandidates.length + 1}
                </div>
                <div className="mt-4">
                  <ReactMarkdown
                    className="prose prose-lg max-w-none whitespace-pre-line"
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                  >
                    {candidates[currentIndex]}
                  </ReactMarkdown>
                </div>
              </div>
            )}

            {/* Buttons Section */}
            <div className="text-center space-x-4">
              {!showLoadMore && currentIndex < candidates.length && (
                <>
                  <button
                    onClick={showNextCandidate}
                    className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-600 transition-all"
                  >
                    Show Similar Profile
                  </button>
                  <button
                    onClick={showSimilarProfiles}
                    className="bg-purple-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-600 transition-all"
                  >
                    Build the Pipeline 
                  </button>
                </>
              )}

              {showLoadMore && currentIndex < candidates.length && (
                <button
                  onClick={loadMoreProfiles}
                  className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition-all"
                >
                  Load More
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
