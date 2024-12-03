import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const CBSEDocuments = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState('CBSE/Affiliation1.pdf');

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
    { title: 'Staff Statement', path: 'CBSE/staff statement.pdf' },
  ];

  const handleDocumentSelect = (path) => {
    setSelectedDocument(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-150px)]">
      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-100 rounded-md shadow"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Side Menu */}
      <div
        className={`
          ${isMobileMenuOpen ? 'block' : 'hidden'}
          md:block
          fixed md:static
          top-0 left-0 w-full md:w-64
          h-full
          bg-white
          md:border-r
          shadow-lg
          md:shadow-sm
          z-40
          overflow-y-auto
          pt-16 md:pt-0
        `}
      >
        <ul className="p-4 space-y-2">
          {documents.map((doc, index) => (
            <li key={index}>
              <button
                onClick={() => handleDocumentSelect(doc.path)}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
              >
                {doc.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 h-full">
        <iframe
          src={selectedDocument}
          title="CBSE Document Viewer"
          className="w-full h-full border-none"
        />
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default CBSEDocuments;
