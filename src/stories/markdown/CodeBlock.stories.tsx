import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import CodeBlock from '../../components/markdown/CodeBlock/CodeBlock';
import markdownDecorator from '../../components/markdown/markdownDecoratorForStorybook';

export default {
  title: 'Markdown/CodeBlock',
  component: CodeBlock,
  decorators: [markdownDecorator],
};

const Template: Story<ComponentProps<typeof CodeBlock>> = args => (
  <CodeBlock {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'language-cpp',
  children: `
This is a code block

//BeginCodeSnip{C++ Short Template}
#include <bits/stdc++.h> // see /general/running-code-locally
using namespace std;

using ll = long long;

using vi = vector<int>;
#define pb push_back
#define all(x) begin(x), end(x)
#define sz(x) (int)(x).size()

using pi = pair<int,int>;
#define f first
#define s second
#define mp make_pair

void setIO(string name = "") {
\tcin.tie(0)->sync_with_stdio(0); // see /general/fast-io
\tif (sz(name)) {
\t\tfreopen((name+".in").c_str(), "r", stdin); // see /general/input-output
\t\tfreopen((name+".out").c_str(), "w", stdout);
\t}
}
//EndCodeSnip

It should collapse w/ 15 lines (not including code snip)
It should collapse w/ 15 lines (not including code snip)
It should collapse w/ 15 lines (not including code snip)
It should collapse w/ 15 lines (not including code snip)
It should collapse w/ 15 lines (not including code snip)
It should collapse w/ 15 lines (not including code snip)
It should collapse w/ 15 lines (not including code snip)
It should collapse w/ 15 lines (not including code snip)
It should collapse w/ 15 lines (not including code snip)
It should collapse w/ 15 lines (not including code snip)
It should collapse w/ 15 lines (not including code snip)
It should collapse w/ 15 lines (not including code snip)
It should collapse w/ 15 lines (not including code snip)
It should collapse w/ 15 lines (not including code snip)
It should collapse w/ 15 lines (not including code snip)
It should collapse w/ 15 lines (not including code snip)
It should collapse w/ 15 lines (not including code snip)
It should collapse w/ 15 lines (not including code snip)
It should collapse w/ 15 lines (not including code snip)
It should collapse w/ 15 lines (not including code snip)
It should collapse w/ 15 lines (not including code snip)
It should collapse w/ 15 lines (not including code snip)
It should collapse w/ 15 lines (not including code snip)
It should collapse w/ 15 lines (not including code snip)
It should collapse w/ 15 lines (not including code snip)
It should collapse w/ 15 lines (not including code snip)
`,
};

export const ShortCodeSnip = Template.bind({});
ShortCodeSnip.args = {
  className: 'language-cpp',
  children: `
//BeginCodeSnip{C++ Short Template}
#include <bits/stdc++.h> // see /general/running-code-locally
using namespace std;

using ll = long long;

using vi = vector<int>;
#define pb push_back
#define all(x) begin(x), end(x)
#define sz(x) (int)(x).size()

using pi = pair<int,int>;
#define f first
#define s second
#define mp make_pair

void setIO(string name = "") {
\tcin.tie(0)->sync_with_stdio(0); // see /general/fast-io
\tif (sz(name)) {
\t\tfreopen((name+".in").c_str(), "r", stdin); // see /general/input-output
\t\tfreopen((name+".out").c_str(), "w", stdout);
\t}
}
//EndCodeSnip
`,
};

export const JavaLanguage = Template.bind({});
JavaLanguage.args = {
  className: 'language-java',
  children: `
Note the positioning of the copy block.
`,
};

export const PyLanguage = Template.bind({});
PyLanguage.args = {
  className: 'language-py',
  children: `
Note the positioning of the copy block.
`,
};

export const UnknownLanguage = Template.bind({});
UnknownLanguage.args = {
  className: 'language-sh',
  children: `
This shouldn't have syntax highlighting
`,
};

export const NoLanguage = Template.bind({});
NoLanguage.args = {
  children: `
This doesn't have any associated language.
`,
};
