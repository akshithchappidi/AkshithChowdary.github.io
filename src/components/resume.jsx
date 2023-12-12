import React from 'react';

const Resume = () => {
  return (
    <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold text-blue-600">AKSHITH CHOWDARY</h1>
        <p className="text-xl text-gray-600">SOFTWARE ENGINEER</p>
      </div>

      <div className="mb-6 border-b-2 border-blue-200 pb-4">
        <p className="text-lg">
          CONTACT: <a href="mailto:1bi20cs041@bit-bangalore.edu.in">1bi20cs041@bit-bangalore.edu.in</a> | +919490123820
        </p>
        <p className="text-lg">
          PORTFOLIO: <a href="https://akshithchowdary.netlify.app/" target="_blank" rel="noopener noreferrer">https://akshithchowdary.netlify.app/</a>
        </p>
        <p className="text-lg">
          LINKEDIN: <a href="http://www.linkedin.com/in/ch-srinivasa-akshith-chowdary-9bb4531b7" target="_blank" rel="noopener noreferrer">http://www.linkedin.com/in/ch-srinivasa-akshith-chowdary-9bb4531b7</a>
        </p>
        <p className="text-lg">
          GIT HUB: <a href="https://github.com/akshithchappidi" target="_blank" rel="noopener noreferrer">https://github.com/akshithchappidi</a>
        </p>
      </div>

      <div className="mb-6 border-b-2 border-blue-200 pb-4">
        <h2 className="text-2xl font-bold mb-2  text-blue-600">SKILLS</h2>
        <p className="text-lg">
          Linux, Strategy, Analytical Skills, Microsoft Azure, Microservices, Kubernetes, Amazon Web Services (AWS), Cloud Computing, C (Programming Language), SQL, Software Development, Agile Methodologies, Shell Scripting, Problem Solving, Selenium, Fast API, Docker, GIT, Java, Python, CI/CD, Troubleshooting, Three.js, WSL, PyQt5, Object Oriented Concepts, MySQL, TailWindCSS, NLP, Deep learning, Graphical Neural Nets, Power Bi, Reinforcement Learning, React
        </p>
      </div>

      {/* Continue filling in the sections for Education, Experience, Projects, and Miscellaneous */}
      <div className="mb-6 border-b-2 border-blue-200 pb-4">
        <h2 className="text-2xl font-bold mb-2 text-blue-600">EDUCATION</h2>
        <p className="text-lg">
          BANGALORE INSTITUTE OF TECHNOLOGY<br />
          BACHELOR'S DEGREE, COMPUTER SCIENCE<br />
          2020 - 2024<br />
          CGPA: 9.4
        </p>
      </div>

      <div className="mb-6  border-b-2 border-blue-200 pb-4">
        <h2 className="text-2xl font-bold mb-2 text-blue-600">EXPERIENCE</h2>
        <div className="mb-4">
          <p className="text-lg font-bold">SOFTWARE DEVELOPMENT INTERN</p>
          <p className="text-lg">
            BOEING PVT LTD<br />
            I built Fast API endpoints for Python libraries, then Dockized them for seamless use across diverse environments. This effectively boosted the accessibility and utility of these libraries. In another project, I focused on enhancing our software development lifecycle. By crafting thorough test scripts, I accelerated the CI/CD pipeline, leading to faster and more efficient software releases.
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-bold">SOFTWARE DEVELOPMENT INTERN</p>
          <p className="text-lg">
            BOSONQ PSI<br />
            Worked on Next.js for website development, implementing micro-frontend strategies, and optimizing server-side rendering techniques. Integrated 3D model rendering into a simulation software product for enhanced user experience. Applied server-side rendering methods, improving website performance and SEO.
          </p>
        </div>
        {/* Add more experience entries if needed */}
      </div>

      {/* Continue filling in the rest of the sections such as Projects, Miscellaneous, etc. */}
      <div className="mb-6  border-b-2 border-blue-200 pb-4">
        <h2 className="text-2xl font-bold mb-2 text-blue-600">PROJECTS</h2>
        <div className="mb-4">
          <p className="text-lg font-bold">FOOD ORDERING SYSTEM</p>
          <p className="text-lg">
            Developed a strategic planning tool to assist hotels in managing and organizing information related to categories, food items, orders, payments, and order confirmations.
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-bold">COLLEGE PREDICTOR</p>
          <p className="text-lg">
            Created a project that estimates the college a student can apply to based on their performance in engineering entrance exams, helping students make informed decisions about their college applications.
          </p>
        </div>
        {/* Add more project entries if needed */}
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 text-blue-600">MISCELLANEOUS</h2>
        <p className="text-lg">
          GATE AIR-800
        </p>
      </div>
      
    </div>
    
  );
};

export default Resume;
