import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { useDarkMode } from '../../../context/DarkModeContext';
const EasyFunCoding = () => {
  const dark = useDarkMode();
  if (dark) {
    return (
      <StaticImage
        src="../../../assets/easyfuncoding.png"
        alt="EasyFunCoding logo"
        placeholder="blurred"
        height={48}
      />
    );
  }
  return (
    <StaticImage
      src="../../../assets/easyfuncoding.jpg"
      alt="EasyFunCoding logo"
      placeholder="blurred"
      height={48}
    />
  );
};
export default EasyFunCoding;
