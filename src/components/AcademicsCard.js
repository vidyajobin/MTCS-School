import React from 'react';
import { motion } from 'framer-motion';

export default function AcademicsCard({ imageUrl, heading, subheading, content }) {
  return (
    <motion.div
      className="flex flex-col md:flex-row w-[40vw] rounded-lg shadow-lg bg-white overflow-hidden m-4"
      initial={{ opacity: 0, y: 100 }} // Initial state: slightly lower position to exaggerate the entrance
      whileInView={{ opacity: 1, y: 0 }} // Final state: fully visible
      transition={{
        duration: 2, // Increased duration for slower, more prominent animation
        ease: [0.25, 1, 0.5, 1], // Custom cubic-bezier easing for a smooth, bouncy effect
      }}
      viewport={{ once: true }} // Only animate once when in view
    >
      <div className="md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={heading}
          loading="lazy"
        />
      </div>

      <div className="md:w-1/2 p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-2 text-custom-blue">{heading}</h2>
        {subheading && (
          <h3 className="text-lg font-semibold mb-3 text-gray-600">
            <span style={{ color: 'orange' }}>Class time:</span> {subheading}
          </h3>
        )}

        <div className="text-gray-600 text-base flex-grow">
          {Array.isArray(content) ? (
            content.map((contentItem, index) => (
              <div key={index}>
                {contentItem.type === 'text' && (
                  <p className="mb-4">{contentItem.text}</p>
                )}
                {contentItem.type === 'bullet' && (
                  <ul className="list-disc pl-6 mb-4">
                    {contentItem.items.map((bulletItem, bulletIndex) => (
                      <li key={bulletIndex} className="mb-1">{bulletItem}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          ) : (
            <>
              {content.type === 'text' && (
                <p className="mb-4">{content.text}</p>
              )}
              {content.type === 'bullet' && (
                <ul className="list-disc pl-6 mb-4">
                  {content.items.map((bulletItem, bulletIndex) => (
                    <li key={bulletIndex} className="mb-1">{bulletItem}</li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
