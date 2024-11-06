import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import AcademicsCard from '../components/AcademicsCard'

const Academics = () => {

  const cardData1 = [
    {
      image:"/images/course-2.jpg",
      heading: "Pre-KG",
      subheading: "9:00am - 3:45pm",
      content: 
        {
          type: 'text',
          text: 'This program concentrates on kids having an enhancing knowledge through fun and play. Tuning in to stories, number ideas, pre-composing and phonic aptitudes help create dialect and vocabulary. Apart from this exercises, yoga, music will aid in the holistic development. Formal pre-writing literacy and numeracy activities are also taught.'
        },        
      
    },
    {
      image:"/images/course-2.jpg",
      heading: "Lower Kindergarden (LKG)",
      subheading: "9:00am - 3:45pm",
      content: 
        {
          type: 'text',
          text: `Our LKG programme is equipped with the best syllabus to suffice all your child's intellectual and physical needs and prepare them to recive the furture education that will be imparted to them inthe right way.Reading writing and speaking become easy for kids with the help of our advanced curriculum devised with the input of our trained teachers.`
        },        
      
    },
    {
      image:"/images/course-2.jpg",
      heading: "Upper Kindergarden(UKG)",
      subheading: "9:00am - 3:45pm",
      content: 
        {
          type: 'text',
          text: `UKG is the initial level that is accomblished with social behaviour which is essential for a student to learn in a school .UKG includes all the basic manners like how to sit in class, how to talk to the teachers and how to respond to the situation in school manner and now the student is completely out of their kid zone. UKG syllabus is larger than LKG as the student jumps for initial level to primary level and it quite obvious.`
        },        
      
    },
    // Add more card data as needed
  ];

  const cardData2 = [
    {
      image:"/images/course-2.jpg",
      heading: "Primary School",
      subheading: "9.00am - 3.45pm",
      content: [
        {
          type: 'text',
          text: 'Primary section includes Class I - V. The syllabus followed is as per CBSE scheme. The subjects taught are:'
        },
        {
          type: 'bullet',
          items: [
            "English",
  "Hindi / Malayalam",
  "Mathematics",
  "Science",
  "Social science",
  "EVS",
  "Physical and Health Education",
  "General Knowledge",
  "Moral Science / Value Education"
          ]
        }
      ]
    },
    {
      image:"/images/course-2.jpg",
      heading: "High School",
      subheading: "9.00am - 3.45pm",
      content: [
        {
          type: 'text',
          text: 'The curriculum for Classes IX and X is based on CBSE syllabus. The scholastic subjects are:'
        },
        {
          type: 'bullet',
          items: [
            "English",
  "Hindi / Malayalam",
  "Mathematics",
  "Science",
  "Social science",
  "Physical and Health Education",
  "General Knowledge",
  "Moral Science / Value Education",
  "Computer Education"
          ]
        }
      ]
    },
    {
      image:"/images/course-2.jpg",
      heading: "Secondary Section Curriculum",
      subheading: "Overview of Secondary Education",
      content: [
        {
          type: 'text',
          text: 'Secondary section comprises Class VI – VIII. The curriculum focuses on preparing students for the CBSE exams. The subjects taught are:'
        },
        {
          type: 'bullet',
          items: [
            "English",
            "Hindi / Malayalam",
            "Mathematics",
            "Science",
            "Social science",
            "Physical and Health Education",
            "General Knowledge",
            "Moral Science / Value Education",
            "Computer Education"
          ]
        }
      ]
    },
    // Add more card data as needed
  ];

  

  return (
    <div>
        <BreadCrumb pagename={'Academics'} />
        {/* <AcademicsCard
        imageUrl="/images/course-1.jpg?height=480&width=440"
        heading="Lower Kindergarden (LKG)"
        subheading="9:00am - 3:45pm"
        content={cardData}
        /> */}

      <h1 className='text-5xl font-bold mb-5 mt-16'><span style={{color: '#5d50c6'}}>The</span> <span style={{color: 'orange'}}>Kindergarden</span></h1>
        <div className='flex justify-center '>
        <p className='mb-9 w-2/3 text-center' style={{color:'rgba(0, 0, 0, 0.5)'}}>The curriculum that we offer here is a happy blend of child oriented and teacher centred methodologies, focusing on to play way method. The aim is the development of total personality of the child.The Kindergarden is a preschool educational approch based on playing ,singing,practical activities such as drawing,and social intraction as part of the transition from home to school</p>
        </div>

        <div className='flex flex-wrap justify-center mx-auto'>
      {cardData1.map((card, index) => (
        
        <AcademicsCard
          key={index}              // Unique key for each card
          imageUrl={card.image}  // Pass image URL for each card
          heading={card.heading}    // Pass heading for each card
          subheading={card.subheading} // Pass subheading for each card
          content={card.content}    // Pass content for each card
        />
      ))}
      </div>

      <h1 className='text-5xl font-bold mb-5 mt-16'><span style={{color: '#5d50c6'}}>The</span> <span style={{color: 'orange'}}>Primary and Secondary School</span></h1>
        <div className='flex justify-center '>
        <p className='mb-9 w-2/3 text-center' style={{color:'rgba(0, 0, 0, 0.5)'}}>For classes I to X, the school follows the uniform system of Assessment, Examination, and Report Card recommended by CBSE for all its affiliated schools.The assessment is based on both scholastic and co- scholastic area. Academic sessions are divided into two terms, the First Term from June to October and the Second Term from November to March.</p>
        </div>

      <div className='flex flex-wrap justify-center mx-auto'>
      {cardData2.map((card, index) => (
        
        <AcademicsCard
          key={index}              // Unique key for each card
          imageUrl={card.image}  // Pass image URL for each card
          heading={card.heading}    // Pass heading for each card
          subheading={card.subheading} // Pass subheading for each card
          content={card.content}    // Pass content for each card
        />
      ))}
      </div>
        
        <h1 className='text-5xl font-bold mb-5 mt-16'><span style={{color: '#5d50c6'}}>The</span> <span style={{color: 'orange'}}>Kindergarden</span></h1>
        <div className='flex justify-center '>
        <p className='mb-9 w-2/3 text-center' style={{color:'rgba(0, 0, 0, 0.5)'}}>The curriculum that we offer here is a happy blend of child oriented and teacher centred methodologies, focusing on to play way method. The aim is the development of total personality of the child.The Kindergarden is a preschool educational approch based on playing ,singing,practical activities such as drawing,and social intraction as part of the transition from home to school</p>
        </div>

        {/*  <div className='AcademicsCardContainer flex flex-wrap justify-center mx-auto'>
        <AcademicsCard 
        imageUrl="/images/course-1.jpg?height=480&width=440"
        heading="Lower Kindergarden (LKG)"
        subheading="9:00am - 3:45pm"
        paragraph="Our LKG programme is equipped with the best syllabus to suffice all your child's intellectual and physical needs and prepare them to recive the furture education that will be imparted to them inthe right way.Reading writing and speaking become easy for kids with the help of our advanced curriculum devised with the input of our trained teachers."
        />

        <AcademicsCard 
        imageUrl="/images/course-1.jpg?height=480&width=440"
        heading="Lower Kindergarden (LKG)"
        subheading="9:00am - 3:45pm"
        paragraph="Our LKG programme is equipped with the best syllabus to suffice all your child's intellectual and physical needs and prepare them to recive the furture education that will be imparted to them inthe right way.Reading writing and speaking become easy for kids with the help of our advanced curriculum devised with the input of our trained teachers."
        />

        <AcademicsCard 
        imageUrl="/images/course-1.jpg?height=480&width=440"
        heading="Lower Kindergarden (LKG)"
        subheading="9:00am - 3:45pm"
        paragraph="Our LKG programme is equipped with the best syllabus to suffice all your child's intellectual and physical needs and prepare them to recive the furture education that will be imparted to them inthe right way.Reading writing and speaking become easy for kids with the help of our advanced curriculum devised with the input of our trained teachers."
        />
        </div>

        <h1 className='text-5xl font-bold mb-5 mt-16'><span style={{color: '#5d50c6'}}>Primary and Secondary</span> <span style={{color: 'orange'}}>School</span></h1>
        <div className='flex justify-center '>
        <p className='mb-9 w-2/3 text-center' style={{color:'rgba(0, 0, 0, 0.5)'}}>For classes I to X, the school follows the uniform system of Assessment, Examination, and Report Card recommended by CBSE for all its affiliated schools.The assessment is based on both scholastic and co- scholastic area. Academic sessions are divided into two terms, the First Term from June to October and the Second Term from November to March.</p>
        </div>

        <div className='AcademicsCardContainer flex flex-wrap justify-center mx-auto mb-12'>
        <AcademicsCard 
        imageUrl="/images/course-1.jpg?height=480&width=440"
        heading="Lower Kindergarden (LKG)"
        subheading="9:00am - 3:45pm"
        paragraph="Primary section includes Class I - V. The syllabus followed is as per CBSE scheme. The subjects taught are:

English
Hindi / Malayalam
Mathematics
Science
Social science
EVS
Physical and Health Education
General Knowledge
Moral Science / Value Education"
        />

        <AcademicsCard 
        imageUrl="/images/course-1.jpg?height=480&width=440"
        heading="Lower Kindergarden (LKG)"
        subheading="9:00am - 3:45pm"
        paragraph="Our LKG programme is equipped with the best syllabus to suffice all your child's intellectual and physical needs and prepare them to recive the furture education that will be imparted to them inthe right way.Reading writing and speaking become easy for kids with the help of our advanced curriculum devised with the input of our trained teachers."
        />

        <AcademicsCard 
        imageUrl="/images/course-1.jpg?height=480&width=440"
        heading="Lower Kindergarden (LKG)"
        subheading="9:00am - 3:45pm"
        paragraph="Our LKG programme is equipped with the best syllabus to suffice all your child's intellectual and physical needs and prepare them to recive the furture education that will be imparted to them inthe right way.Reading writing and speaking become easy for kids with the help of our advanced curriculum devised with the input of our trained teachers."
        />
        </div> */}
        
    </div>
  )
}

export default Academics