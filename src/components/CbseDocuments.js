import React from 'react';

const CBSEDocuments = () => {
  const documents = [
    { title: 'Affiliation', path: 'CBSE/Affiliation1.pdf' },
    { title: 'Fitness Certificate', path: 'CBSE/fitness certificate building.pdf' },
    { title: 'Building Safety', path: 'CBSE/Building safty.pdf' },
    { title: 'Drinking Water', path: 'CBSE/Drinking water.pdf' },
    { title: 'Income & Expense', path: 'CBSE/Income & Expence19.pdf' },
    { title: 'Land', path: 'CBSE/land.pdf' },
    { title: 'NOC', path: 'CBSE/NOC.pdf' },
    { title: 'Non Proof', path: 'CBSE/non prop affi.pdf' },
    { title: 'Trust Members', path: 'CBSE/trust members affi.pdf' },
    { title: 'Self Certificate', path: 'CBSE/self certification.pdf' },
    { title: 'Sanitary Certificate', path: 'CBSE/sanitary Certificat.pdf' },
    { title: 'Staff Statement', path: 'CBSE/staff statement.pdf' }
  ];

  return (
    <div className="flex h-screen">
      {/* Side Menu */}
      <div className="w-64 h-full overflow-y-auto border-r bg-white shadow-sm">
        <ul className="p-4 space-y-2">
          {documents.map((doc, index) => (
            <li key={index}>
              <a 
                href={doc.path}
                target="cbse"
                className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
              >
                {doc.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 h-full">
        <iframe
          src=""
          title="CBSE Document Viewer"
          name="cbse"
          className="w-full h-full border-none"
        />
      </div>
    </div>
  );
};

export default CBSEDocuments;