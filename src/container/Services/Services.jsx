/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./Services.scss";

const Services = () => {
  return (
    <motion.div
      whileInView={{ y: [100, 0], x: [0, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__services-container"
    >
      <div className="app__services-header">
        <h2 className="head-text">
          My <span>Services</span>
        </h2>
      </div>
      <div className="app__services-item app__flex">
        <div className="app__services-content">
          <h4 className="bold-text">
            I dedicate myself to presenting my clients with completed projects
            that not only meet, but exceed, their initial vision. Knowing what
            to expect when we work together is critical - here is how I deliver
            success:
          </h4>
          <div className="line"></div>
          <div className="app__services-content-services">
            <ol>
              <li className="services">
                <h5>
                  <span>Consultation </span>- It all begins with a conversation
                  where we'll pinpoint what this project is all about.
                </h5>
              </li>
              <li className="services">
                <h5>
                  <span>Proposal </span>- A detailed project proposal including
                  a visual preview will be presented and a plan of action will
                  be decided.
                </h5>
              </li>
              <li className="services">
                <h5>
                  <span>Creation </span>- Clients receive regular updates
                  regarding their project status while I create and test it.
                </h5>
              </li>
              <li className="services">
                <h5>
                  <span>Launch & Support </span>- Peace of mind is delivered
                  with the final project in the form of available ongoing
                  support.
                </h5>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AppWrap(
  MotionWrap(Services, "app__services"),
  "services",
  "app__primarybg"
);
