const getProgressInfo = (
  keys: string[],
  data: { [key: string]: string },
  completedValues: string[],
  inProgressValues: string[],
  skippedValues: string[],
  notStartedValues: string[]
) => {
  let res = {
    completed: 0,
    inProgress: 0,
    skipped: 0,
    notStarted: 0,
  };
  for (let key of keys) {
    if (!(key in data)) res.notStarted++;
    else if (completedValues.includes(data[key])) res.completed++;
    else if (inProgressValues.includes(data[key])) res.inProgress++;
    else if (skippedValues.includes(data[key])) res.skipped++;
    else if (notStartedValues.includes(data[key])) res.notStarted++;
  }
  return res;
};

export default getProgressInfo;
