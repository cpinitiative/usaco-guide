import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
const NonTrivial = () => {
  return (
    <>
      <div className="hidden dark:block ">
        <StaticImage
          src="../../../assets/nontrivialdark.png"
          alt="Non-Trivial logo"
          placeholder="blurred"
          height={48}
        />
      </div>
      <div className="dark:hidden">
        <StaticImage
          src="../../../assets/nontrivial.png"
          alt="Non-Trivial logo"
          placeholder="blurred"
          height={48}
        />
      </div>
    </>
  );
};
export default NonTrivial;
