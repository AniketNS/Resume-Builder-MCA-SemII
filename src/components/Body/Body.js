import React, { useState } from "react";
import style from "./Body.module.css";
import { ArrowDown } from "react-feather";
import Editor from "../Editor/Editor";

function Body() {
  const colors = ["#FF5733", "#3CFF33", "#337AFF", "#FF33F6", "#33FFEB"];

  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    certificate: "Certificates", 
    other: "Other",
  };
  
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]:{
      id:sections.basicInfo,
      title:sections.basicInfo,
      detail:{},
    },
    [sections.workExp]:{
      id:sections.workExp,
      title:sections.workExp,
      detail:[],
    },
    [sections.project]:{
      id:sections.project,
      title:sections.project,
      detail:[ ],
    },
    [sections.education]:{
      id:sections.education,
      title:sections.education,
      detail:[],
    },
    [sections.certificate]:{
      id:sections.certificate,
      title:sections.certificate,
      detail:[],
    },
    [sections.other]:{
      id:sections.other,
      title:sections.other,
      detail:"",
    },
  })

  return (
    <div className={style.container}>
      <h2 className={style.header}>Resume Builder</h2>
      <div className={style.toolbar}>
        <div className={style.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={style.color}
            />
          ))}
        </div>
        <button className={style.button}>
          Download <ArrowDown />
        </button>
      </div>
      <div className={style.main}>
        <Editor sections={sections} information={resumeInformation}/>
      </div>
    </div>
  );
}

export default Body;
