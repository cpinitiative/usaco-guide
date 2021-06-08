import classNames from 'classnames';
import * as React from 'react';

export default function LogoSquare({
  className,
}: {
  className?: string;
}): JSX.Element {
  return (
    <svg
      className={classNames('inline-block', className)}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <g>
        {/*<circle className="fill-white text-white fill-current" cx="50" cy="50" r="47.5" />*/}
        <path
          className="fill-current text-[#139] dark:text-blue-500"
          d="M50,5A45,45,0,1,1,5,50,45.05,45.05,0,0,1,50,5m0-5a50,50,0,1,0,50,50A50,50,0,0,0,50,0Z"
        />
      </g>
      <line
        className="stroke-current stroke-[7px] text-[#001d4a] dark:text-blue-600"
        style={{ strokeMiterlimit: 10 }}
        x1="50"
        y1="27"
        x2="73.29"
        y2="65.64"
      />
      <line
        className="stroke-current stroke-[7px] text-[#001d4a] dark:text-blue-600"
        style={{ strokeMiterlimit: 10 }}
        x1="50"
        y1="27"
        x2="28.56"
        y2="67"
      />
      <circle
        className="fill-current text-[#139] dark:text-blue-500"
        cx="50"
        cy="27"
        r="10"
      />
      <circle
        className="fill-current text-[#139] dark:text-blue-500"
        cx="28.56"
        cy="67"
        r="10"
      />
      <circle
        className="fill-current text-[#139] dark:text-blue-500"
        cx="73.29"
        cy="65.64"
        r="10"
      />
    </svg>
  );
}
