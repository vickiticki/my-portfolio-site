import * as React from "react";
import { Link } from "gatsby";

const AboutPage = () => {
  return (
    <>
      <title>About Me</title>
      <h1>Vicki</h1>
      <p>Hey! I'm Vicki. I built this site with Gatsby.</p>
      <Link to="/">Home</Link>
    </>
  );
};

export default AboutPage;
