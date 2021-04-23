import { Block, Transaction } from './editor';

describe('transaction', () => {
  const transaction = new Transaction(3, {
    markdown: 'foo',
    problems: 'bar',
  });

  test('Initializes values properly', () => {
    expect(transaction.patches.markdown).toBe('foo');
    expect(transaction.patches.problems).toBe('bar');
  });
  test('Exports to json properly', () => {
    expect(transaction.getFirebaseData()).toStrictEqual({
      id: 3,
      patches: {
        markdown: 'foo',
        problems: 'bar',
      },
    });
  });
  test('Calculates storage size correctly', () => {
    expect(transaction.storageSize).toBe(8 + 9 + 9 + 4 + 4 + 10 + 8 + 32 + 32);
  });
});

describe('block', () => {
  const block = new Block('', {
    markdown: '',
    problems: '',
  });
  test('basic', () => {
    block.saveState({ markdown: 'markdown', problems: 'problems' });
    block.saveState({ markdown: 'mark\ndown1', problems: 'proble\n\nms1' });
    block.saveState({ markdown: 'markdown2', problems: 'problems222' });
    block.saveState({ markdown: 'markdown33333', problems: 'problems33333' });
    block.saveState({ markdown: 'markdown444444444', problems: 'problems4' });
    block.saveState({ markdown: 'markdown5555', problems: 'problems55' });
    expect(block.getState(3)).toStrictEqual({
      markdown: 'markdown33333',
      problems: 'problems33333',
    });
  });
});
