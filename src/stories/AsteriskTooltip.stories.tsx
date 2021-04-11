import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import Asterisk from '../components/Tooltip/Asterisk';

export default {
  title: 'AsteriskTooltip',
  component: Asterisk,
  // tooltips move around and cause false positive change detection :(
  parameters: {
    chromatic: { disable: true },
  },
};

const Template: Story<ComponentProps<typeof Asterisk>> = args => {
  // We need to use a ref here because tippy by default appends to the end of the body element
  // Storybook dark mode doesn't add the dark class to the html element, so dark mode styles won't work otherwise
  const ref = React.useRef<HTMLDivElement>(null);

  // we want ref.current to be defined when we render the tooltip
  const [show, setShow] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (ref.current) setShow(true);
  }, [ref.current]);

  return (
    <div className="my-8" ref={ref}>
      {show && (
        <Asterisk {...args} appendTo={() => ref.current} showOnCreate={true} />
      )}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      This is some <b>React</b>!
    </>
  ),
};
