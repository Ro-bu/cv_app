import {nanoid} from "nanoid";

let exampleData = {
    generalInformation: {
      firstName: "Vannaka",
      lastName: "Slayer",
      occupation: "Front End Developer",
      phone: "+372 56633733",
      email: "vannaka.slayer@gmail.com",
      image: "",
      description: "A highly accomplished developer who also serves as a high-school tutor. I created my first website at only 14 years old. I've edited and co-authored around 7 books in the science fiction genre and I have a dog called Susan Gnome."
    },
    education: [
      {
        school: "Edgeville University",
        subject: "Computer Science Bachelors",
        yearStarted: "2007",
        yearFinished: "2011",
        id: "X9_hvzk0znc7KxMiuvXRr"
      },
      {
        school: "Kourend University",
        subject: "Computer Science Masters",
        yearStarted: "2011",
        yearFinished: "2013",
        id: "c7Qk8KVBLGZ0VomUBE6uC"
      }
    ],
    workExperience: [
      {
        company: "Great Kourend llc",
        position: "Front End Developer",
        yearStarted: "2008",
        yearFinished: "2011",
        id: "8N0I1NgyV31vTuvsbe5Lv"
      },
      {
        company: "BCP llc",
        position: "Full Stack Developer",
        yearStarted: "2011",
        yearFinished: "2018",
        id: "hpcaaMo0MvBy5WfS0ofFi"
      },
      {
        company: "Fire Wave llc",
        position: "Full Stack Developer",
        yearStarted: "2018",
        yearFinished: "",
        id: "c3ve90Ac5IjV_QOCFiHuA"
      }
    ],
    skills: [
      {
        skill: "React",
        id: "UTPcyBvqEdEx2S7tTj3vq"
      },
      {
        skill: "Node",
        id: "hTqT9Z2cBJHmQt_DD6WnY"
      },
      {
        skill: "TypeScript",
        id: "KMfaBvRjY2Lm4U_AJYSCw"
      },
      {
        skill: "Vue",
        id: "z3F4cP_Rb8qsQqYA94VY2"
      },
      {
        skill: "AWS",
        id: "isDmCYJH8XPcuG93kRp7_"
      },
      {
        skill: "MySQL",
        id: "jI8vmc2OaDp-IwwTOWmro"
      }
    ]
  }

  let resetData = {
    generalInformation: {
      firstName: "",
      lastName: "",
      occupation:"",
      phone: "",
      email: "",
      image: ""
    },
    education: [{school:"", subject:"", yearStarted:"", yearFinished:"", id: nanoid()}],
    workExperience: [{company:"", position:"", yearStarted:"", yearFinished:"", id: nanoid()}],
    skills: [{skill:"", id:nanoid()}]
  }

  export {exampleData, resetData};