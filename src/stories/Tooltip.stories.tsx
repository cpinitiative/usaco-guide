import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import AsteriskComponent from '../components/Tooltip/Asterisk';
import TextTooltipComponent from '../components/Tooltip/TextTooltip';
import Tooltip from '../components/Tooltip/Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
  // tooltips move around and cause false positive change detection :(
  parameters: {
    chromatic: { disable: true },
  },
};

const Template: Story<ComponentProps<typeof Tooltip>> = args => {
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
        <Tooltip {...args} appendTo={() => ref.current} showOnCreate={true}>
          <span className="bg-gray-100 p-2 dark:bg-gray-700">
            Hover over me!
          </span>
        </Tooltip>
      )}
    </div>
  );
};

export const Base = Template.bind({});
Base.args = {
  content: (
    <>
      This is some <b>React</b>!
    </>
  ),
};

export const BaseCompact = Template.bind({});
BaseCompact.args = {
  type: 'compact',
  content: (
    <>
      This is some <b>React</b>!
    </>
  ),
};

const TextTooltipTemplate: Story<
  ComponentProps<typeof TextTooltipComponent>
> = args => {
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
        <TextTooltipComponent
          {...args}
          appendTo={() => ref.current}
          showOnCreate={true}
        >
          Hover over me!
        </TextTooltipComponent>
      )}
    </div>
  );
};

export const TextTooltip = TextTooltipTemplate.bind({});
TextTooltip.args = {
  content: (
    <>
      This is some <b>React</b>!
    </>
  ),
};

export const TextTooltipCompact = TextTooltipTemplate.bind({});
TextTooltipCompact.args = {
  type: 'compact',
  content: (
    <>
      This is some <b>React</b>!
    </>
  ),
};

const AsteriskTooltipTemplate: Story<
  ComponentProps<typeof AsteriskComponent>
> = args => {
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
        <AsteriskComponent
          {...args}
          appendTo={() => ref.current}
          showOnCreate={true}
        />
      )}
    </div>
  );
};

export const Asterisk = AsteriskTooltipTemplate.bind({});
Asterisk.args = {
  children: (
    <>
      This is some <b>React</b>!
    </>
  ),
};
