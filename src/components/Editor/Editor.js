import React, { useEffect, useState } from "react";
import style from "./Editor.module.css";
import InputControl from "../../InputControl";
import { Linkedin, X } from "react-feather";

function Editor(props) {
  const sections = props.sections;
  const information = props.information;

  const [activesectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );

  const [activeInformation, setActiveInformation] = useState(
    information[sections[Object.keys(sections)[0]]]
  );

  const [sectionTitle, setSectionTitle] = useState(
    sections[Object.keys(sections)[0]]
  );

  const [values, setValues] = useState({
    fullName: activeInformation?.detail?.fullName || "",
    title: activeInformation?.detail?.title || "",
    linkedin: activeInformation?.detail?.linkedin || "",
    github: activeInformation?.detail?.github || "",
    email: activeInformation?.detail?.email || "",
    phone: activeInformation?.detail?.phone || "",
  });

  const handleSubmission = () =>{
    console.log(values)
  }

  const workExpBody = (
    <div className={style.detail}>
      <div className={style.row}>
        <InputControl
          label="Title"
          placeholder="Eg. Fontend Developer"
          defaultValue={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
        <InputControl
          label="Copmany Name"
          placeholder="Eg. Amazon"
          defaultValue={values.companyName}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, companyName: event.target.value }))
          }
        />
      </div>
      <div className={style.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Eg. Fontend Developer"
          defaultValue={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Eg. Amazon"
          defaultValue={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
    </div>
  );

  const projectBody = (
    <div className={style.detail}>
      <div className={style.row}>
        <InputControl
          label="Title"
          placeholder="Enter Project Name Eg. Chat App"
          defaultValue={values.projectTitle}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, projectTitle: event.target.value }))
          }
        />
      </div>
      <div className={style.row}>
        <InputControl
          label="Description"
          placeholder="Tech stack Used Eg. HTML, CSS, JS, NodeJs"
          defaultValue={values.desc}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, desc: event.target.value }))
          }
        />
      </div>
    </div>
  );

  const educationBody = (
    <div className={style.detail}>
      <div className={style.row}>
        <InputControl
          label="Degree"
          placeholder="Enter title Eg. MCA"
          defaultValue={values.degree}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, degree: event.target.value }))
          }
        />
      </div>
      <InputControl
        label="College/School"
        placeholder="Enter name of your college"
        defaultValue={values.collegeName}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, collegeName: event.target.value }))
        }
      />
      <div className={style.row}>
        <InputControl
          label="Start date"
          type="date"
          placeholder="Enter start date"
          defaultValue={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter End Date"
          defaultValue={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
    </div>
  );

  const basicInfoBody = (
    <div className={style.detail}>
      <div className={style.row}>
        <InputControl
          label="Name"
          placeholder="Enter your full name"
          defaultValue={values.fullName}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, fullName: event.target.value }))
          }
        />
        <InputControl
          label="Title"
          placeholder="Enter your title"
          defaultValue={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <div className={style.row}>
        <InputControl
          label="LinkedIn Profile"
          placeholder="LinkedIn profile URL"
          defaultValue={values.linkedin}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, linkedin: event.target.value }))
          }
        />
        <InputControl
          label="GitHub Profile"
          placeholder="GitHub Profile Link"
          defaultValue={values.github}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }
        />
      </div>
      <div className={style.row}>
        <InputControl
          label="E-Mail"
          placeholder="Enter your Email"
          defaultValue={values.email}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Phone"
          placeholder="Enter Your phone number"
          defaultValue={values.phone}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, phone: event.target.value }))
          }
        />
      </div>
    </div>
  );

  const otherBody = (
    <div className={style.detail}>
      <InputControl
        label="Other"
        placeholder="Enter something"
        defaultValue={values.other}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, other: event.target.value }))
        }
      />
    </div>
  );

  const certBody = (
    <div className={style.detail}>
      <div className={style.row}>
        <InputControl
          label="Certification Name"
          placeholder="Eg. Java Programming"
          defaultValue={values.certName}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, certName: event.target.value }))
          }
        />
        <InputControl
          label="Certifide By"
          placeholder="Eg. Udemy"
          defaultValue={values.certBy}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, certBy: event.target.value }))
          }
        />
      </div>
    </div>
  );

  const generateBody = () => {
    switch (sections[activesectionKey]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.workExp:
        return workExpBody;
      case sections.project:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.certificate:
        return certBody;
      case sections.other:
        return otherBody;
      default:
        return null;
    }
  };

  useEffect(() => {
    setActiveInformation(information[sections[activesectionKey]]);
    setSectionTitle(sections[activesectionKey]);
  }, [activesectionKey]);

  return (
    <div className={style.container}>
      <div className={style.heading}>
        {Object.keys(sections)?.map((key) => (
          <div
            className={`${style.sections} ${
              activesectionKey === key ? style.active : ""
            }`}
            key={key}
            onClick={() => setActiveSectionKey(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>
      <div className={style.body}>
        <InputControl
          label="Title"
          placeholder="Enter section Title"
          value={sectionTitle}
          onChange={(event) => setSectionTitle(event.target.value)}
        />

        <div className={style.chips}>
          {activeInformation?.details
            ? activeInformation?.details?.map((item, index) => (
                <div className={style.chip} key={item.title + index}>
                  <p>
                    {sections[activesectionKey]} {index + 1}
                  </p>
                  <X />
                </div>
              ))
            : ""}
        </div>

        {generateBody()}

        <button onClick={handleSubmission}>Save</button>
      </div>
    </div>
  );
}

export default Editor;
