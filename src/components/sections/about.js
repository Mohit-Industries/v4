import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Python', 'Java', 'CSS', 'MatLab', 'Jupyter Notebook', 'Flask', 'Heroku', 'Repl.it', 'Netlify', 'Tensoflow', 'Pytorch', 'Keras', 'Bash, (Shell)', 'GO', 'Swift', 'Objective-C', 'C++', 'C#', 'TypeScript', 'Rust', 'R', 'JavaScript (ES6+)', 'HTML & (S)CSS', 'React', 'Vue', 'Node.js', 'WordPress'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
            Hi, My name is Mohit Varikuti. I am currently 13 years old. I have an IQ of 217. I was born in Los Gatos, and I currently live in Dublin, CA. 
            I am currently a AI expert, certified by the Global Tech Council. I am Currently building projects most people cant even dream of, including Super Intelligent AI's. 
            I also know 15 coding languages, which of include Python, Javascript, and HTML, (The same kind that coded this website). I also currently have a patent pending, for a Zigby IOT Mesh Network system. 
            I also currently have a 3d printer , which I know how to operate and repair. 
            </p>
  
            <p>
            Some of my skills include, 3d printing, IOT, Artificial Intelligence, Advanced Algorithms, Advanced Hardware, Biotech, Web Development, VR Development, Frontend and Backend coding, and Automated Drone Flying. 
            I also have verifications on all of these topics from MIT, to Harvard, to University of Michigan. 
            But really, these things don't tell much about a person. Most of the time, to understand the person, you have to meet them. 
            And I hope to meet all of you someday, but for now, I will tell you about myself. 
            My mindset has always been a certain way that I was able to understand the things that no one else was able to. 
            In my life, I have always loved to solve puzzles, and things that were mentally challenging to the brain. 
            </p>
  
            <p>  
            And while I used my brain alot, I also use my physical strength and determination as well. 
            I am currently First Class in Boy Scouts, and I am aiming to be an Eagle Scout, and as well, I also very much enjoy Biking, as it is one of my favorite things to do. 
            I hope that this has given an accurate insight into my life, and that all details were covered.
            </p>

            <p>Here are some of my Major Skills:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Img fluid={data.avatar.childImageSharp.fluid} alt="Avatar" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
