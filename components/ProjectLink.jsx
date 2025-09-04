"use client";

import { useState, useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectLink({ project }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // یا یک placeholder نمایش دهید
  }

  return (
    <>
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <FaExternalLinkAlt className="text-xs" />
        </a>
      )}
    </>
  );
}
