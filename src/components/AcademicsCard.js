import React from 'react'

export default function AcademicsCard({ imageUrl, heading, subheading, paragraph }) {
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
        <h3 className="text-lg font-semibold mb-3 text-gray-600"><span style={{color:'orange'}}>Class time:</span> {subheading}</h3>
        <p className="text-gray-600 text-base flex-grow overflow-hidden">{paragraph}</p>
      </div>
    </div>
  )
}

// Example usage
// export function Component() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <ModernCard
//         imageUrl="/placeholder.svg?height=500&width=440"
//         heading="Wider Modern Design"
//         subheading="Expanded Minimalistic Approach"
//         paragraph="This card component showcases a clean and modern design without a scroller. The left side features an image, while the right side presents key information including the heading, subheading, and a concise paragraph. The card takes up 48.4% of the screen width and 71.5% of its height, providing an expansive presence on the page while maintaining its balanced and minimalistic aesthetic. The content is designed to fit within the available space, ensuring a sleek and uncluttered appearance."
//       />
//     </div>
//   )
// }