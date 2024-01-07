import { Meta, Story } from '@storybook/react';
import React from 'react';
import seedrandom from 'seedrandom';
import {
  ActivityHeatmap,
  ActivityHeatmapProps,
} from '../components/Dashboard/Activity';

export default {
  title: 'ActivityHeatmap',
  component: ActivityHeatmap,
} as Meta;

const endDate = new Date(Date.UTC(2023, 12));
const startDate = new Date(endDate);
startDate.setMonth(endDate.getMonth() - 10);

const Template: Story<ActivityHeatmapProps> = args => (
  <ActivityHeatmap endDate={endDate} {...args} />
);

const dummyProblem = {
  timestamp: 0,
  problemID: 'dummy',
  problemProgress: 'Solved',
};
const dummyModule = {
  timestamp: 0,
  moduleID: 'dummy',
  moduleProgress: 'Complete',
};

const orderedModuleActivities: { [key: number]: any[] } = {};
const orderedProblemActivities: { [key: number]: any[] } = {};
const randomModuleActivities: { [key: number]: any[] } = {};
const randomProblemActivities: { [key: number]: any[] } = {};
const gen = seedrandom('42');
const rng = () => Math.floor(gen() * 5);
const squeeze = (i: number) =>
  Math.floor(
    (5 * (i - startDate.getTime())) / (endDate.getTime() - startDate.getTime())
  );
console.log(squeeze(startDate.getTime()));
console.log(squeeze(endDate.getTime() - 1));
for (
  let i = new Date(startDate);
  i.getTime() < endDate.getTime();
  i.setDate(i.getDate() + 1)
) {
  console.log(i.getTime(), squeeze(i.getTime()));
  // generate ordered heatmap data
  orderedModuleActivities[i.getTime()] = Array(squeeze(i.getTime())).fill(
    dummyModule
  );
  orderedProblemActivities[i.getTime()] = [];
  // generate random heatmap data
  randomModuleActivities[i.getTime()] = Array(rng()).fill(dummyModule);
  randomProblemActivities[i.getTime()] = Array(rng()).fill(dummyProblem);
}
console.log(startDate.getTime(), endDate.getTime());
export const Ordered = Template.bind({});
Ordered.args = {
  moduleActivities: orderedModuleActivities,
  problemActivities: orderedProblemActivities,
};
export const Random = Template.bind({});
Random.args = {
  moduleActivities: randomModuleActivities,
  problemActivities: randomProblemActivities,
};
