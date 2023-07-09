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
          "Learn How to Learn"
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
            however today there is <span>1</span> particular implication that edges its way to the front of the cue:
        </div> 
        <div className={styles.mainContentThick}>
            "It is not what you know in the here and now. Instead it is how you can arrive at the knowledge of change in an expeditious manner."
        </div> 
        <div className={styles.matrixGreenContainer}>
            <Image src={'/matrix_green_crop.png'} width={1024} height={405} />
            <div className={styles.theHow}>THE HOW</div>
        </div>
        
        <div className={styles.mainContent}>
        If this being the case, then there must be a way to achieve such an objective.  
        <div className={styles.spaceMarginNormal}>
        Over the years of my learning journey in studying a variable array/list (lol.…) of disciplines - both physical and mental - I have discovered a few key factors that the human mind could benefit from. This is especially true when learning a new construct or concept that may require more than discipline to master. 
        Having said that, ‘Discipline’ is a fundamental part of the overall picture and something we can cover in a short book (some other time). 

        </div>
        </div>
        <div className={styles.mainContent}>
        What I'm pertaining to is a protocol for learning. A system, per se, for undertaking a subject/discipline and using the aforementioned protocol to assist in the perspicacity and digestion of its inherent contents and inner workings. 
        </div>

        <div className={styles.mainContent}>
        There are many things in life which we have a protocol or a set of rules for in terms of learning I.e Driving a car, Flying a plane, etc…. You get the idea.
        </div>

        <Image src={'/learning_girl.png'} width={512} height={512} />

        <div className={styles.mainContent}>
        The Protocol I have set out is structured into <span>7</span> orderly sections: 
        <ol>
            <li className={styles.listI}>Relevance and/or context for why we are learning such subject</li>
            <li className={styles.listI}>Explanation of the Subject</li>
            <li className={styles.listI}>Analogy</li>
            <li className={styles.listI}>Example</li>
            <li className={styles.listI}>Deduction - How not to use</li>
            <li className={styles.listI}>Dive in and start doing</li>
            <li className={styles.listI}>Repetition</li>
        </ol>
        </div>

        <div className={styles.mainContent}>
        
        Each section is ordered intentially in a way as to build on top of the preceding section. 

        Lets dive into a short description of how this works: 
        </div>

        <div className={styles.subjectTitle}>
            Relevance
        </div>
        <div className={styles.mainContent}>
        Relevance is integral toward informing the brain on why it is you are doing what you are doing (in terms of learning). I remember many times on my journey, setting out to learn a function or construct (such as Database models) and not knowing the relevance/purpose behind why a function or model is required. 
        <div className={styles.spaceMargin}>
        How do they tie into the bigger picture? 
        </div>
        <div className={styles.spaceMargin}>
        What is the bigger picture? 
        </div>
        
        These were a few of the many questions my mind was asking. I realised very early on that if i was without ‘Relevance’ then I would quickly forget the subject I had recently studied. 
        <div></div>
        Having said that, ‘Relevance’ can take some time to acquire (depending on the subject matter). 
        <div className={styles.spaceMargin}>
        The reason is complex subjects have many moving parts or a large variety of small pieces to a very large puzzle. Eventually, the more pieces of the puzzle you put together, the clearer the picture becomes…. 
        </div>
        A lot of material you find in the wild will tell you the ‘How’. In terms of Relevance, you will want to know the ‘Why’. i.e. why am I creating a function or a model and what relevance does the function or model have.

        </div>

        <div className={styles.subjectTitle}>
            Explanation
        </div>

        <div className={styles.mainContent}>
        The ‘Explanation’ will introduce new concepts to the mind in a detailed way. This is pertinent to refer back to even though at the time of hearing, reading or viewing, the explanation of some parts (maybe more than others) may not make sense.  
        </div>

        <div className={styles.subjectTitle}>
            Analogy
        </div>
        <div className={styles.mainContent}>
        The ‘Analogy’ will use comparisons of material you are familiar with in order to help make sense of the parts of the explanation that you are yet to fully understand. Essentially, analogies are great at making the mind feel comfortable and we can relate and regain our attention span. 
        </div>
        <div className={styles.subjectTitle}>
            Example
        </div>
        <div className={styles.mainContent}>
        Once we have absorbed the explanation and analogy, we require an example of how to do! Examples are great and allow the student (us) to observe, and remembering that we now have the foundational knowledge of the explanation and analogy to assist in bringing the pieces of the puzzle together. Watching, reading or listening to an example may give you the infamous 'aha' moment. 
        </div>
        <div className={styles.subjectTitle}>
            Deduction
        </div>
        <div className={styles.mainContent}>
        Deduction is one of my personal favourites. Many times I have studied videos on the internet and the content creator has made a mistake and corrected themselves thereafter. In this moment I realised that seeing how something should not be carried out allows the mind to deduce on how it is that it can only be carried out. In other words, by learning how a construct cannot be applied, will help refine the knowledge of how a construct can only be applied. 
        <div className={styles.spaceMarginNormal}>
        The ‘How not to do’, (as I call it) has helped me significantly in learning the fine details of any given subject. I’m always asking myself: ‘How can this not work…. What are its inherent limitations’.   
        </div>
        </div>
        <div className={styles.subjectTitle}>
            Dive In
        </div>
        <div className={styles.mainContent}>
        Dive in and start doing! kinesthetic learning is the one of the most proficient ways to pick up a new subject. Coupled with the prerequisite steps of the protocol, you will be more than ready to roll your sleeves up and travel into ‘key-stroke heaven’. 
        <div className={styles.spaceMarginNormal}>
        Ok… ok… In truth this requires patience, discipline and practice. The harder and smarter you work at this stage will define the outcome. 
        </div>
        <div className={styles.spaceMargin}>
        ‘You get out what you put in’. 
        </div>
        Having said that, work smart and take breaks often. Your brain only starts to assimilate the newly acquired knowledge and compartmentalise whilst you are resting. Close your eyes for 20 minutes and recharge the mind. We all know how the day goes (cognitively speaking) when we have less sleep than usual. 
        <div className={styles.spaceMarginNormal}>
        I would also like to mention that parts of our brain work independently at times. To elaborate, when we are learning ‘Syntax’ for a new programming language, the logical mind takes a back seat. The part of your brain that works on memory moves to the forefront to pick up on the syntax. So when trying to iterate over a list or carry out some logic in the initial stages it will feel like you have forgotten how to count as you are primarily focused on the accuracy of the syntax. I actually forgot how to spell (for a brief period) during my time learning the syntax for Javascript. In other words, the brain utilises a method known as the ‘separation of concerns’. it is Only once you have the syntax embedded, does the logical mind come into full force. It takes time, although with enough practice you will receive your ‘aha’ moment. 
        </div>
        </div><div className={styles.subjectTitle}>
            Repetition
        </div>
        <div className={styles.mainContent}>
          This may seem like an obvious action to carry out. Well.... I'll let you figure this one out for yourself....
        </div>

        <Image src={'/green_computer.png'} width={512} height={512} />

        
        <div className={styles.sideNote}>
        SIDE NOTE
        </div>

        <div className={styles.mainContent}>
        If you feel you are wavering with your concentration, take a break or try the ‘outside - in' counting from <span>10</span> i.e 10,1,9,2,8,3,7,4,6,5….. You can even start from 20 if you’re feeling cognitively energetic. Another quick and effective method is to call out the alphabet backwards (This will sharpen your mind) 
        </div>

        <div className={styles.sideNote}>
        BRAIN TEASER
        </div>

        <div className={styles.mainContent}>
        When was the last time you recited the alphabet to yourself?
        Ever wondered how every human brain can remember the alphabet (26 characters) in perfect order notwithstanding the fact that the alphabet is collated in no orderly sequence. Try remembering 26 digits of Pi and then forget about it for years and see if you can recollect again. 
        </div>




        
        


        
        

        
        
        {/* FOOTER */}
        <div className={styles.footerContainer}>
          <div className={styles.footerContentContainer}>
            <div className={styles.footerContent}>CYBER SECURITY, NETWORKING AND PROGRAMMING BLOG....</div>
          </div>
          <div className={styles.linkedinIconContainer}>
            <Link href={'https://uk.linkedin.com/in/mycall-dev-69aa08271'}>
              <Image src={'/linkedin_white.svg'} width={50} height={50} className={styles.linkedinIcon} />
            </Link>
          </div>
          <div className={styles.emailContact}>info@mycalldev.com</div>
        </div>
      </main>
    </div>
  );
}

export default learnTolearn;
