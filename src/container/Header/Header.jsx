/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-refresh/only-export-components */
import "./Header.scss";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import { FaFolderOpen, FaEnvelope, FaToolbox } from "react-icons/fa";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const circles = [
  {
    content: "Projects",
    href: "#work",
    icon: <FaFolderOpen />,
  },
  { content: "Contact Me", href: "#contact", icon: <FaEnvelope /> },

  {
    content: "Skills",
    href: "#skills",
    icon: <FaToolbox />,
  },
];

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hi there, I'm</p>
            <h1 className="head-text">Zaza</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">a full-stack</p>
          <p className="p-text">software engineer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-main"
    >
      {/* <img src={images.profile} alt="profile_bg" /> */}
      <section className="content">
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta
          dignissim sodales. Duis vitae rutrum est. Mauris commodo nec elit a
          suscipit. Maecenas rutrum, dui nec feugiat feugiat, elit neque
          pellentesque
        </h1>
      </section>
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {circles.map((circle, index) => (
        <a
          className="circle-cmp app__flex"
          key={`circle-${index}`}
          href={circle.href}
        >
          {circle.icon}
          <p className="bold-text">{circle.content}</p>
        </a>
      ))}
    </motion.div>
  </div>
);
export default AppWrap(Header, "home");
