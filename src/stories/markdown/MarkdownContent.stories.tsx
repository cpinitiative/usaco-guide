import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import HTMLComponents from '../../components/markdown/HTMLComponents';
import markdownDecorator from '../../components/markdown/markdownDecoratorForStorybook';

const MarkdownComponent: React.FC = props => <div {...props} />;

export default {
  title: 'Markdown/Content',
  component: MarkdownComponent,
  decorators: [markdownDecorator],
};

const Template: Story<ComponentProps<typeof MarkdownComponent>> = args => (
  <MarkdownComponent {...args} />
);

export const Lists = Template.bind({});
Lists.args = {
  children: (
    <>
      <ul>
        <li>
          <strong>
            If you already know one of these languages, just use it.
          </strong>
          <ul>
            <li>
              If you know multiple languages, we recommend you pick C++ over
              Java, and Java over Python.
            </li>
          </ul>
        </li>
        <li>
          <strong>For Bronze, any language will do.</strong> It is possible to
          receive full credit with C++, Java, and Python in Bronze.
        </li>
        <li>
          <strong>
            For Silver, Gold, and Platinum, Python is not recommended
          </strong>
          , because it is a slow language and lacks an ordered map.
        </li>
      </ul>

      <ol>
        <li>
          <div className="flex-1">
            <p>
              The{' '}
              <a
                target="_blank"
                href="http://www.usaco.org/"
                rel="nofollow noopener noreferrer"
              >
                USACO
              </a>{' '}
              website has problems from 2011 onwards.
            </p>
            <ul>
              <li>
                We provide a list of recent USACO problems (2015 onwards){' '}
                <a target="_blank" href="/general/usaco-monthlies">
                  here
                </a>
                .
              </li>
              <li>
                Older USACO problems may be easier than recent USACO contest
                problems due to increases in difficulty.
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className="flex-1">
            <p>
              <a
                target="_blank"
                href="https://codeforces.com/problemset"
                rel="nofollow noopener noreferrer"
              >
                CodeForces
              </a>{' '}
              -- you can search by tag, difficulty level, etc.
            </p>
          </div>
        </li>
        <li>
          <div className="flex-1">
            <p>
              <a
                target="_blank"
                href="https://csacademy.com/contest/archive/"
                rel="nofollow noopener noreferrer"
              >
                CSAcademy Archive
              </a>
            </p>
          </div>
        </li>
        <li>
          <div className="flex-1">
            <p>
              For additional sources of problems, check the{' '}
              <a target="_blank" href="/general/contests">
                contests
              </a>{' '}
              page.
            </p>
          </div>
        </li>
      </ol>
    </>
  ),
};

export const InlineCode = Template.bind({});
InlineCode.args = {
  children: (
    <>
      <p>
        This is a test of some inline code:{' '}
        <HTMLComponents.inlineCode>rick.astley()</HTMLComponents.inlineCode>!
      </p>
    </>
  ),
};
