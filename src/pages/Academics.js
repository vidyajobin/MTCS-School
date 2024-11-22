import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import AcademicsCard from '../components/AcademicsCard'
import Footer from '../components/Footer';

const Academics = ({show=true}) => {

  const cardData1 = [
    {
      image:"/images/pre-kg mtcs.jpg",
      heading: "Pre-KG",
      subheading: "9:00am - 3:45pm",
      content: 
        {
          type: 'text',
          text: 'This program concentrates on kids having an enhancing knowledge through fun and play. Tuning in to stories, number ideas, pre-composing and phonic aptitudes help create dialect and vocabulary. Apart from this exercises, yoga, music will aid in the holistic development. Formal pre-writing literacy and numeracy activities are also taught.'
        },        
      
    },
    {
      image:"/images/lkg-mtcs.jpg",
      heading: "Lower Kindergarden (LKG)",
      subheading: "9:00am - 3:45pm",
      content: 
        {
          type: 'text',
          text: `Our LKG programme is equipped with the best syllabus to suffice all your child's intellectual and physical needs and prepare them to recive the furture education that will be imparted to them inthe right way.Reading writing and speaking become easy for kids with the help of our advanced curriculum devised with the input of our trained teachers.`
        },        
      
    },
    {
      image:"/images/ukg-mtcs.jpg",
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
      image:"/images/primary-mtcs.jpg",
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
      image:"/images/secondary-mtcs.jpg",
      heading: "Secondary School",
      subheading: "9.00am - 3.45pm",
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
    {
      image:"/images/higher-secondary-mtcs.jpg",
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
    
    // Add more card data as needed
  ];

  const cardData3 = [
    {
      image:"/images/karate-mtcs.jpg",
      heading: "Karate",
      subheading: "9.00am - 3.45pm",
      content: [
        {
          type: 'text',
          text: 'Karate is a Japanese martial art whose physical aspects seek the development of defensive and counterattacking body movements. The themes of traditional karate training are fighting and self-defense, though its mental and moral aspects target the overall improvement of the individual.'
        },
        {
          type: 'bullet',
          items: [
            "Strengthens the mind and the entire body",
  "Develops composure",
  "A clearer thought process",
  "Deeper insight into one’s mental capabilities",
  "More self-confidence",
  "Builds stamina and overall health"
          ]
        }
      ]
    },
    {
      image:"/images/art-mtcs.jpg",
      heading: "ART & CRAFT",
      subheading: "9.00am - 3.45pm",
      content: [
        {
          type: 'text',
          text: 'Learning art and craft enhances creativity and imagination in children. It encourages cognition and develops critical thinking skills. Students are given the opportunity to express their knowledge, ideas and feelings in ways that do not necessarily involve words.'
        },
        {
          type: 'bullet',
          items: [
            "Develops motor skills",
  "Creativity",
  "Self-esteem",
  "Vocabulary",
  "Sharpen decision-making skills",
  "Improve physical activity with less screen time"
          ]
        }
      ]
    },
    {
      image:"/images/abacus-mtcs.jpg",
      heading: "ABACUS",
      subheading: "Overview of Secondary Education",
      content: [
        {
          type: 'text',
          text: 'An abacus is a calculation tool used by sliding counters along rods or grooves, used to perform mathematical functions. In addition to calculating the basic functions of addition, subtraction, multiplication and division, the abacus can calculate roots up to the cubic degree.'
        },
        {
          type: 'bullet',
          items: [
            "Improves Memory Power",
  "Engaging",
  "Develops Analytical Thinking",
  "Simplifies Complex Problems",
  "Ability to focus better",
  "Effective Learning with Accuracy"
          ]
        }
      ]
    },
    {
      image:"/images/clubs-mtcs.jpg",
      heading: "STUDENTS CLUB",
      subheading: "Overview of Secondary Education",
      content: [
        {
          type: 'text',
          text: 'It’s just a place where children’s of various age groups spend time with each other, learning and honing their talents. The school provides ample opportunities for students to develop their talents in co -curricular fields. All activities organized in the school are based on house system. Following activities are promoted in school.'
        },
        {
          type: 'bullet',
          items: [
            "Science & Math’s Club",
  "Social Club",
  "Eco Club",
  "Language Club",
  "IT Club"
          ]
        }
      ]
    },

    {
      image:"/images/extra-mtcs.jpg",
      heading: "CO-CURRICULAR ACTIVITIES",
      subheading: "9:00am - 3:45pm",
      content: 
        {
          type: 'text',
          text: 'Co-Curricular activities are meant to bring social skills, intellectual skills, moral values, personality progress and character appeal in students. Our school provides activities like games, sports, cultural events, club events, monthly competitions, field trip, study tour, inter school activities etc.'
        },        
      
    },
    {
      image:"/images/openhouse-mtcs.jpg",
      heading: "OPEN HOUSE",
      subheading: "9:00am - 3:45pm",
      content: 
        {
          type: 'text',
          text: 'Open house is held between parents, students & teachers after every exam to evaluate the students and remedial measures are taken for the improvement of students'
        },        
      
    },
    // Add more card data as needed
  ];

  

  return (
    <>
        {show && <BreadCrumb pagename={'Academics'} />}

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
        
        <h1 className='text-5xl font-bold mb-5 mt-16'><span style={{color: '#5d50c6'}}>EXTRA-CURRICULAR ACTIVITIES</span> <span style={{color: 'orange'}}>FOR STUDENTS</span></h1>
        <div className='flex justify-center '>
        <p className='mb-9 w-2/3 text-center' style={{color:'rgba(0, 0, 0, 0.5)'}}>The curriculum that we offer here is a happy blend of child oriented and teacher centred methodologies, focusing on to play way method. The aim is the development of total personality of the child.The Kindergarden is a preschool educational approch based on playing ,singing,practical activities such as drawing,and social intraction as part of the transition from home to school</p>
        </div>

        <div className='flex flex-wrap justify-center mx-auto'>
      {cardData3.map((card, index) => (
        
        <AcademicsCard
          key={index}              // Unique key for each card
          imageUrl={card.image}  // Pass image URL for each card
          heading={card.heading}    // Pass heading for each card
          content={card.content}    // Pass content for each card
        />
      ))}
      </div>

      {show && <Footer /> }    
    </>
  )
}

export default Academics