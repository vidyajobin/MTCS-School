import React from 'react';

export default function AcademicsCard({ imageUrl, heading, subheading, content }) {
  return (
    <div className="flex flex-col md:flex-row w-[40.0vw] h-[71.5vh] rounded-lg shadow-lg bg-white overflow-hidden m-4">
      <div className="md:w-1/2 h-full">
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
        
        {/* Render content based on its structure */}
        <div className="text-gray-600 text-base flex-grow overflow-auto">
          {Array.isArray(content) ? (
            // Handle array of content objects
            <>
              {content.map((contentItem, index) => (
                <div key={index}>
                  {contentItem.content.type === 'text' && (
                    <p className="mb-4">{contentItem.content.text}</p>
                  )}
                  {contentItem.content.type === 'bullet' && (
                    <ul className="list-disc pl-6 mb-4">
                      {contentItem.content.items.map((bulletItem, bulletIndex) => (
                        <li key={bulletIndex} className="mb-1">{bulletItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </>
          ) : (
            // Handle single content object
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
