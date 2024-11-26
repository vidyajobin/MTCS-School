import React from 'react';
import { motion } from 'framer-motion';

export default function AcademicsCard({ imageUrl, heading, subheading, content }) {
  return (
    <motion.div
      className="flex flex-col lg:flex-row w-full max-w-4xl rounded-lg shadow-lg bg-white overflow-hidden m-4 mx-auto"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.25, 1, 0.5, 1],
      }}
      viewport={{ once: true }}
    >
      <div className="w-full lg:w-1/2 h-64 lg:h-auto">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={heading}
          loading="lazy"
        />
      </div>

      <div className="w-full lg:w-1/2 p-4 sm:p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-custom-blue">
            {heading}
          </h2>
          {subheading && (
            <h3 className="text-base sm:text-lg font-semibold mb-3 text-gray-600">
              <span style={{ color: 'orange' }}>Class time:</span> {subheading}
            </h3>
          )}

          <div className="text-gray-600 text-sm sm:text-base flex-grow">
            {Array.isArray(content) ? (
              content.map((contentItem, index) => (
                <div key={index}>
                  {contentItem.type === 'text' && (
                    <p className="mb-3 sm:mb-4">{contentItem.text}</p>
                  )}
                  {contentItem.type === 'bullet' && (
                    <ul className="list-disc pl-4 sm:pl-6 mb-3 sm:mb-4">
                      {contentItem.items.map((bulletItem, bulletIndex) => (
                        <li key={bulletIndex} className="mb-1 text-sm sm:text-base">
                          {bulletItem}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            ) : (
              <>
                {content.type === 'text' && (
                  <p className="mb-3 sm:mb-4">{content.text}</p>
                )}
                {content.type === 'bullet' && (
                  <ul className="list-disc pl-4 sm:pl-6 mb-3 sm:mb-4">
                    {content.items.map((bulletItem, bulletIndex) => (
                      <li key={bulletIndex} className="mb-1 text-sm sm:text-base">
                        {bulletItem}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}