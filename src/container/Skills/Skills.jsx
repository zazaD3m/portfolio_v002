/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  function filteredSkills(category) {
    return skills
      .filter((e) => e.category === category)
      .sort((a, b) => a.index - b.index)
      .map((skill) => (
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.3 },
          }}
          className="app__skills-item app__flex"
          key={skill.name}
        >
          <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
            <img src={images[skill.name]} alt={skill.name} />
          </div>
          <p className="p-text">{skill.name}</p>
        </motion.div>
      ));
  }

  return (
    <>
      <h2
        className="head-text"
        style={{ paddingLeft: "5rem", paddingRight: "5rem" }}
      >
        My Skills & Tools <span>I use</span>
      </h2>

      <div className="app__skills-container">
        <div className="app__skills-item-container" key="frontend">
          <img src={images.about02} alt="frontend" />
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            Front-End
          </h2>
          <div className="app__skills-items" style={{ marginTop: 10 }}>
            {filteredSkills("frontend")}
          </div>
        </div>
        <div className="app__skills-item-container" key="backend">
          <img src={images.about04} alt="backend" />
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            Back-End
          </h2>
          <div className="app__skills-items" style={{ marginTop: 10 }}>
            {filteredSkills("backend")}
          </div>
        </div>
        <div className="app__skills-item-container" key="tools">
          <img src={images.about01} alt="tools" />
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            Tools
          </h2>
          <div className="app__skills-items" style={{ marginTop: 10 }}>
            {filteredSkills("tools")}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);

{
  /* <div className="app__profiles">
        {abouts.map((about, index) => (
          <div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div> */
}

{
  /* <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div> */
}
