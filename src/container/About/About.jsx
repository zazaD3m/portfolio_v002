/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-refresh/only-export-components */
import "./About.scss";
import { AppWrap, MotionWrap } from "../../wrapper";

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Development</span>
        <br /> means <span>Good Business</span>
      </h2>

      <div className="app__about">
        <h4 className="bold-text">
          Is your web presence <br />
          working for you?
        </h4>
        <div className="line"></div>
        <p className="p-text">
          If someone needs what you provide, will your website draw them in?
          What will they see if they are on their phone? A responsive &
          accessible web presence is no longer merely a 'bonus' or 'nice to
          have' - it is essential.
        </p>
        <p className="p-text">
          It is my privilege to offer a chance to be seen on the web to small
          businesses and individuals around me. Whether that be creating a
          website for you from the ground up, or updating an existing presence
          for the mobile age. Providing a place for interested parties to find
          and learn about what you offer is what I offer. How can I help you
          today?
        </p>
      </div>
    </>
  );
};
export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
