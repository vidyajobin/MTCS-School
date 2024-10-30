import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import AcademicsCard from '../components/AcademicsCard'

const Academics = () => {
  return (
    <div>
        <BreadCrumb pagename={'Academics'} />
        
        <h1 className='text-5xl font-bold mb-5 mt-16'><span style={{color: '#5d50c6'}}>The</span> <span style={{color: 'orange'}}>Kindergarden</span></h1>
        <div className='flex justify-center '>
        <p className='mb-9 w-2/3 text-center' style={{color:'rgba(0, 0, 0, 0.5)'}}>The curriculum that we offer here is a happy blend of child oriented and teacher centred methodologies, focusing on to play way method. The aim is the development of total personality of the child.The Kindergarden is a preschool educational approch based on playing ,singing,practical activities such as drawing,and social intraction as part of the transition from home to school</p>
        </div>

        <div className='AcademicsCardContainer flex flex-wrap justify-center mx-auto'>
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
        
    </div>
  )
}

export default Academics