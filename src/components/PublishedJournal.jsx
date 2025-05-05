import React from 'react';

const PublishedJournal = () => {
  const journals = [
    {
      title: "Voice Dubber: Voice, Text, Caption Translation Solution",
      authors: "Aadarsh Wadile",
      journal: "African Journal of Biomedical Research",
      year: "2024",
      link: "https://africanjournalofbiomedicalresearch.com/index.php/pages/view/abstract?id=123", // Replace with actual link if available
      summary:
        "This project introduces an AI-driven transcription system designed to revolutionize voice dubbing and caption generation across multiple languages. It leverages state-of-the-art machine learning techniques to enable seamless multilingual support for video content.",
    },
  ];

  return (
    <div id="journal" className="container mx-auto px-4 py-12">
      <h3 className="text-4xl text-center font-semibold mb-1">
        Published <span className="text-cyan-600">Journal</span>
      </h3>
      <p className="text-lg text-center font-normal">Here is my research publication.</p>
      <hr className="border-gray-300 w-full mb-8" />
      <div className="space-y-6">
        {journals.map((paper, index) => (
          <div
            key={index}
            className="bg-gray-200 p-6 rounded-lg shadow-md"
          >
            <h4 className="text-xl font-semibold text-gray-800">{paper.title}</h4>
            <p className="text-gray-600 mt-1"><span className="font-medium">Authors:</span> {paper.authors}</p>
            <p className="text-gray-600"><span className="font-medium">Published in:</span> {paper.journal} ({paper.year})</p>
            <p className="text-gray-700 mt-2">{paper.summary}</p>
            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 mt-2 inline-block hover:underline"
            >
              View Journal
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublishedJournal;
