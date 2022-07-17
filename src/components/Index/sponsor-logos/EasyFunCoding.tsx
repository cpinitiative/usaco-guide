import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
const EasyFunCoding = () => {
  return (
    <>
      <div className="hidden dark:block">
        <StaticImage
          src="../../../assets/easyfuncoding.png"
          alt="EasyFunCoding logo"
          placeholder="blurred"
          height={48}
        />
      </div>
      <div className="dark:hidden">
        <StaticImage
          src="../../../assets/easyfuncoding.jpg"
          alt="EasyFunCoding logo"
          placeholder="blurred"
          height={48}
        />
      </div>
    </>
  );
};
export default EasyFunCoding;
