import { Timestamp } from 'firebase/firestore';
import Block from './Block';
import DeepStateItem from './DeepStateItem';
import ShallowStateItem from './ShallowStateItem';
import Transaction from './Transaction';

describe('transaction', () => {
  const transaction = new Transaction({
    markdown: 'foo',
    problems: 'bar',
  });

  test('Initializes values properly', () => {
    expect(transaction.patches.markdown).toBe('foo');
    expect(transaction.patches.problems).toBe('bar');
  });
  test('Exports to json properly', () => {
    expect(transaction.getFirebaseData()).toMatchObject({
      patches: {
        markdown: 'foo',
        problems: 'bar',
      },
      timestamp: expect.any(Timestamp),
    });
  });
  test('Calculates storage size correctly', () => {
    expect(transaction.storageSize).toBe(8 + 9 + 9 + 4 + 4 + 10 + 8 + 32 + 32);
  });
});

describe('block', () => {
  const data = [
    {
      markdown: 'markdown',
      problems: 'problems',
    },
    { markdown: 'mark\ndown1', problems: 'proble\n\nms1' },
    { markdown: 'markdown2', problems: 'problems222' },
    {
      markdown: 'markdown33333',
      problems: 'problems33333',
    },
    { markdown: 'markdown444444444', problems: 'problems4' },
    { markdown: 'markdown5555', problems: 'problems55' },
  ];
  test('Shallow State', () => {
    const block = new Block('', { markdown: 'markdown', problems: 'problems' });

    expect(block.getState(0).val).toStrictEqual(data[0]);

    block.saveState(data[1]);
    block.saveState(data[2]);

    const threeIndex = block.saveState(data[3]);
    expect(threeIndex).toBe(3);
    expect(block.getState(3)).toBeInstanceOf(ShallowStateItem);
    expect(block.getState(3).val).toStrictEqual(data[3]);

    block.saveState(data[4]);
    expect(block.getState(3).val).toStrictEqual(data[3]);

    block.saveState(data[5]);
    expect(block.getState(3).val).toStrictEqual(data[3]);

    expect(block.getState(0).val).toStrictEqual(data[0]);
    expect(block.getState(1).val).toStrictEqual(data[1]);
    expect(block.getState(2).val).toStrictEqual(data[2]);
    expect(block.getState(3).val).toStrictEqual(data[3]);
    expect(block.getState(4).val).toStrictEqual(data[4]);
    expect(block.getState(5).val).toStrictEqual(data[5]);
  });
  test('Deep State', () => {
    const block = new Block('', { markdown: 'markdown', problems: 'problems' });

    expect(block.getState(0, true).val).toStrictEqual(data[0]);

    block.saveState(data[1]);
    block.saveState(data[2]);

    const threeIndex = block.saveState(data[3]);
    expect(threeIndex).toBe(3);
    expect(block.getState(3, true)).toBeInstanceOf(DeepStateItem);
    expect(block.getState(3, true).val).toStrictEqual(data[3]);

    block.saveState(data[4]);
    expect(block.getState(3, true).val).toStrictEqual(data[3]);

    block.saveState(data[5]);
    expect(block.getState(3, true).val).toStrictEqual(data[3]);

    expect(block.getState(0, true).val).toStrictEqual(data[0]);
    expect(block.getState(1, true).val).toStrictEqual(data[1]);
    expect(block.getState(2, true).val).toStrictEqual(data[2]);
    expect(block.getState(3, true).val).toStrictEqual(data[3]);
    expect(block.getState(4, true).val).toStrictEqual(data[4]);
    expect(block.getState(5, true).val).toStrictEqual(data[5]);
  });
  test('Entire State (shallow)', () => {
    const block = new Block('', { markdown: 'markdown', problems: 'problems' });

    expect(block.getStates().map(s => s.val)).toStrictEqual([data[0]]);

    block.saveState(data[1]);
    block.saveState(data[2]);

    expect(block.getStates().map(s => s.val)).toStrictEqual(data.slice(0, 3));

    block.saveState(data[3]);
    block.saveState(data[4]);
    block.saveState(data[5]);

    block.getStates().forEach((el, i) => {
      expect(el).toBeInstanceOf(ShallowStateItem);
      expect(el.val).toStrictEqual(data[i]);
      expect(el.id).toStrictEqual(i);
    });

    expect(block.getStates().map(s => s.val)).toStrictEqual(data);
  });
  test('Entire State (deep)', () => {
    const block = new Block('', { markdown: 'markdown', problems: 'problems' });

    expect(block.getStates(true).map(s => s.val)).toStrictEqual([data[0]]);

    block.saveState(data[1]);
    block.saveState(data[2]);

    expect(block.getStates(true).map(s => s.val)).toStrictEqual(
      data.slice(0, 3)
    );

    block.saveState(data[3]);
    block.saveState(data[4]);
    block.saveState(data[5]);

    expect(block.getStates(true).map(s => s.val)).toStrictEqual(data);

    block.getStates(true).forEach((el, i) => {
      expect(el).toBeInstanceOf(DeepStateItem);
      expect(el.val).toStrictEqual(data[i]);
      expect(el.id).toStrictEqual(i);
    });
  });
  test('Getting selected states', () => {
    const block = new Block('', { markdown: 'markdown', problems: 'problems' });
    expect(block.getStates([0]).map(s => s.val)).toStrictEqual([data[0]]);
    expect(block.getStates([0], true).map(s => s.val)).toStrictEqual([data[0]]);

    block.saveState(data[1]);
    block.saveState(data[2]);

    expect(block.getStates([0, 2]).map(s => s.val)).toStrictEqual([
      data[0],
      data[2],
    ]);
    expect(block.getStates([0, 2], true).map(s => s.val)).toStrictEqual([
      data[0],
      data[2],
    ]);

    block.saveState(data[3]);
    block.saveState(data[4]);
    block.saveState(data[5]);

    expect(block.getStates([0, 1, 3, 5]).map(s => s.val)).toStrictEqual([
      data[0],
      data[1],
      data[3],
      data[5],
    ]);

    expect(block.getStates([2, 5]).map(s => s.val)).toStrictEqual([
      data[2],
      data[5],
    ]);
    expect(block.getStates([2, 5], true).map(s => s.val)).toStrictEqual([
      data[2],
      data[5],
    ]);

    expect(block.getStates([5, 2, 4]).map(s => s.val)).toStrictEqual([
      data[5],
      data[2],
      data[4],
    ]);
    expect(block.getStates([5, 2, 4], true).map(s => s.val)).toStrictEqual([
      data[5],
      data[2],
      data[4],
    ]);

    expect(() => block.getStates([14])).toThrowError();
    expect(() => block.getStates([1, 2, 5, 14])).toThrowError();
    expect(() => block.getStates([6, 4])).toThrowError();
  });
});
