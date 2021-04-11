import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import TextTooltip from '../components/Tooltip/TextTooltip';

export default {
  title: 'TextTooltip',
  component: TextTooltip,
  // tooltips move around and cause false positive change detection :(
  chromatic: { disable: true },
};

const Template: Story<ComponentProps<typeof TextTooltip>> = args => {
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
        <TextTooltip {...args} appendTo={() => ref.current} showOnCreate={true}>
          Hover over me!
        </TextTooltip>
      )}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  content: (
    <>
      This is some <b>React</b>!
    </>
  ),
};

export const Compact = Template.bind({});
Compact.args = {
  type: 'compact',
  content: (
    <>
      This is some <b>React</b>!
    </>
  ),
};
