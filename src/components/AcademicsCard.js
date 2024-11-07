import React from 'react';

export default function AcademicsCard({ imageUrl, heading, subheading, content }) {
  return (
    <div className="flex flex-col md:flex-row w-[40vw] rounded-lg shadow-lg bg-white overflow-hidden m-4">
      <div className="md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={heading}
        />
      </div>

      <div className="md:w-1/2 p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-2 text-custom-blue">{heading}</h2>
        {subheading && (
          <h3 className="text-lg font-semibold mb-3 text-gray-600">
            <span style={{ color: 'orange' }}>Class time:</span> {subheading}
          </h3>
        )}

        {/* Render content */}
        <div className="text-gray-600 text-base flex-grow">
          {/* Check if content is an array */}
          {Array.isArray(content) ? (
            content.map((contentItem, index) => (
              <div key={index}>
                {/* Render text content */}
                {contentItem.type === 'text' && (
                  <p className="mb-4">{contentItem.text}</p>
                )}

                {/* Render bullet points */}
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
            // If content is a single object, handle it
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
    </div>
  );
}
