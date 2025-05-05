import React from 'react';

const Education = () => {
  const educationDetails = [
    {
      "logo": "logo-arrow",
      "degree": "Bachelor of Technology in Computer Science and Engineering",
      "institution": "MIT Academy of Engineering, Pune",
      "grades": "CGPA: 8.52",
      "year": "[2021-2025]",
      "desc": "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at MIT Academy of Engineering, Pune. I have completed multiple semesters and have a CGPA of 8.52."
    },
    {
      "logo": "logo-play",
      "degree": "HSC (12th) - Maharashtra State Board",
      "institution": "Matoshri Jr. College, Mhasrul, Nashik",
      "grades": "Percentage: 92%",
      "year": "[2020-2021]",
      "desc": "I completed my class 12 high school education at Matoshri Jr. College, Mhasrul, Nashik, where I studied Science with PCM."
    },
    {
      "logo": "logo-book",
      "degree": "SSC (10th) - Maharashtra State Board",
      "institution": "Hasti Public School & Jr. College, Daul Shivar, Dondaicha, Dhule",
      "grades": "Percentage: 87%",
      "year": "[2018-2019]",
      "desc": "I completed my class 10 education at Hasti Public School & Jr. College, Daul Shivar, Dondaicha, Dhule."
    }
  ];

  return (
    <div id='education' className="container mx-auto px-4 py-12">
      <h3 className="text-4xl text-center font-semibold mb-1">
        My <span className="text-cyan-600">Education</span>
      </h3>
      <p className="text-lg text-center font-normal ">My educational details are as follows.</p>
      <hr className="border-gray-300 w-full mb-8" />
      <div>
        {educationDetails.map((edu, index) => (
          <div key={index} className="bg-gray-200 rounded-lg shadow-md p-6 flex flex-col items-start mb-4">
            <ion-icon name={edu.logo} class="text-primary text-xl mr-2" />
            <div className="text-lg font-medium mb-2 text-gray-700">{edu.degree}</div>
            <div className="flex-1">
              <div className="text-base text-gray-500">{edu.institution}</div>
              <div className="text-base text-gray-500">{edu.grades}</div>
              <div className="text-base text-gray-500">{edu.year}</div>
            </div>
            <p className="text-gray-700">{edu.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
