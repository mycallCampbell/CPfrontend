import React from "react";
import Image from "next/image";
import Link from "next/link";
import Meta from "../components/Meta";
import styles from "../styles/blog.module.css";

function learnTolearn() {
  

  return (
    <div className={styles.container}>
      <Meta
        title={"MYCALL DEV"}
        keywords={"Learn To Learn"}
        description={
          "The Blog on How to Learn"
        }
      />

      {/* MAIN SECTION */}
      <main>
        {/* HERO SECTION */}
        <div className={styles.heroContainer}>
            <Image src={"/learnHero.png"} width={1024} height={1024} />
        </div>

        {/* SECTION 2 */}
        <div className={styles.subTitle}>LEARN TO LEARN</div>
        <div className={styles.infoSectionTag}>
            knowledge is power, and with great Power comes great....
        </div>
        <div className={styles.intorContent}><span>RESPONSIBILITY</span> is ours to attain and through the actions of learned behaviour we can excercise our greatness</div>
        <div className={styles.mainContent}>
            It’s a short foretold fact that today’s world is changing at an exponential rate. 
            This brings about many implications.... 
        </div>
        <div className={styles.mainContent}>
            however today there is <span>1</span> in particular implication that edges its way to the front of the cue:
        </div> 
        <div className={styles.mainContent}>
            "It is not what you know in the here and now. Instead it is how you can arrive at the knowledge of change and if so, preferably in an expeditious manner."
        </div> 
        <div className={styles.matrixGreenContainer}>
            <Image src={'/matrix_green_crop.png'} width={1024} height={405} />
            <div className={styles.theHow}>THE HOW</div>
        </div>
        
        <div className={styles.mainContent}>
        If this is the case, then there must be a way to achieve such an objective.  

        Over the years of my learning journey as studying a varying array/list (lol.…) of disciplines - both physical and mental - I have stumbled across a few key factors that the human mind could benefit from. This is especially true when learning a new construct or concept that may require more than discipline to master. 

        Having said that, ‘Discipline’ is a fundamental part of the overall picture and something we can cover in a short book (some other time). 

        </div>
        <div className={styles.mainContent}>
        What I am getting at is a protocol for learning. A system, per se, for undertaking a subject/discipline and using the aforementioned protocol to assist in the perspicacity and digestion of its inherent contents. 
        </div>

        <div className={styles.mainContent}>
        As an example, there are many things in life in which we have a protocol or a set of rules (if you will) to learn a subject. I.e Driving a car, Flying a plane, etc…. You get the idea.
        </div>

        <div className={styles.mainContent}>
        The Protocol I have set out is structured into <span>6</span> orderly sections: 
        <ul>
            <li className={styles.listI}>Explination of the Subject</li>
            <li className={styles.listI}>Analogy</li>
            <li className={styles.listI}>Example</li>
            <li className={styles.listI}>Relevance and/or context for why we are learning such subject</li>
            <li className={styles.listI}>Deduction - How not to use</li>
            <li className={styles.listI}>Repetition</li>
        </ul>
        </div>

        <div className={styles.mainContent}>
        
        Each section is ordered specifically in a way as to build on top of the preceding section. 

        Lets’ dive into a short description of how this works: 
        </div>

        <div className={styles.subjectTitle}>
            Explanation:
        </div>

        <div className={styles.mainContent}>
        Starting with the ‘Explanation’ will cover new concepts to the mind albeit in a detailed way. This is pertinent to refer back to even though at the time of hearing the explanation some parts (maybe more than others) may not make sense.  
        </div>

        <div className={styles.subjectTitle}>
            Analogy:
        </div>
        <div className={styles.mainContent}>
        The ‘Analogy’ will use comparisons of material you are familiar with in order to help make sense of the parts of the explanation that you are yet to understand fully. Essentially, analogies are great at making the mind feel comfortable and we can relate and regain our attention span. 
        </div>

        <div className={styles.sideNote}>
        Side Note: 
        </div>

        <div className={styles.mainContent}>
        If you feel you are wavering with your concentration, take a break or try the ‘outside - in' counting from <span>10</span> i.e 10,1,9,2,8,3,7,4,6,5….. You can even start from 20 if you’re feeling cognitively energetic. Another quick and effective method is to call out the alphabet backwards (This will sharpen your mind) 
        </div>

        <div className={styles.sideNote}>
        BRAIN TEASER:
        </div>

        <div className={styles.mainContent}>
        When was the last time you recited the alphabet to yourself?
        Ever wondered how every human brain can remember the alphabet (26 characters) in perfect order notwithstanding the fact that the alphabet is collated in no orderly sequence. Try remembering 26 digits of Pi and then forget about it for years and see if you can recollect again. 
        </div>




        
        


        
        

        
        
        {/* FOOTER */}
        <div className={styles.footerContainer}>
          <div className={styles.footerContentContainer}>
            <div className={styles.footerContent}>THE CYBER SECURITY, NETWORKING AND PROGRAMMING BLOG....</div>
          </div>
          <div className={styles.linkedinIconContainer}>
            <Link href={'https://uk.linkedin.com/in/mycall-dev-69aa08271'}>
              <Image src={'/linkedin_white.svg'} width={50} height={50} className={styles.linkedinIcon} />
            </Link>
          </div>
          <div className={styles.emailContact}>contact@mycalldev.com</div>
        </div>
      </main>
    </div>
  );
}

export default learnTolearn;
