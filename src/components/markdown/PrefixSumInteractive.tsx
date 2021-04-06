import * as React from 'react';

const PrefMatrix = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 5, 6, 11, 8],
  [0, 1, 7, 11, 9, 4],
  [0, 4, 6, 1, 3, 2],
  [0, 7, 5, 4, 2, 3],
];

const PrefixSumInteractive = ({ demo2 = false }) => {
  const prefI = 2;
  const prefJ = 3;
  const A = 3,
    B = 4,
    a = 2,
    b = 2;
  // [x0, y0, x1, y1, weight?]
  const [highlightRect, setHighlightRect] = React.useState(null);
  const [rectangles, setRectangles] = React.useState([]);

  const renderCell = (i, j, v) => {
    const classes = [
      'h-10 w-10 inline-flex items-center justify-center border-b border-r border-gray-200',
    ];
    if (i == 0) classes.push('border-t');
    if (j == 0) classes.push('border-l');
    const weight = rectangles.reduce(
      (acc, rect) =>
        i >= rect[0] && i <= rect[2] && j >= rect[1] && j <= rect[3]
          ? acc + rect[4]
          : acc,
      0
    );
    if (weight == -2) {
      classes.push('bg-red-200 dark:bg-red-700');
    } else if (weight === -1) {
      classes.push('bg-red-100 dark:bg-red-800');
    } else if (weight === 1) {
      classes.push('bg-blue-100 dark:bg-blue-900');
    } else if (weight === 2) {
      classes.push('bg-blue-200 dark:bg-blue-700');
    }
    return <span className={classes.join(' ')}>{v}</span>;
  };

  const renderRow = (row, i) => (
    <div>{row.map((x, j) => renderCell(i, j, x))}</div>
  );

  const renderStep = (rectangle, label) => {
    const isActive = rectangles.some(x =>
      x.every((v, i) => v === rectangle[i])
    );
    return (
      <div
        className={
          'font-mono px-2 py-1 border border-gray-300 dark:border-gray-600 cursor-pointer rounded ' +
          (isActive
            ? 'bg-green-200 dark:bg-green-700'
            : 'bg-gray-100 dark:bg-gray-800')
        }
        onMouseEnter={() => setHighlightRect(rectangle)}
        onMouseLeave={() => setHighlightRect(null)}
        onClick={() => {
          if (isActive) {
            setRectangles(
              rectangles.filter(x => !x.every((v, i) => v === rectangle[i]))
            );
          } else {
            setRectangles([...rectangles, rectangle]);
          }
        }}
        key={label}
      >
        {label}
      </div>
    );
  };

  return (
    <div className="overflow-x-auto">
      <div
        className="flex justify-center space-x-8"
        style={{ minWidth: '34rem' }}
      >
        <div className="space-y-2 text-right">
          {demo2 ? (
            <>
              {renderStep([0, 0, A, B, 1], 'add prefix[A][B]')}
              {renderStep([0, 0, a - 1, B, -1], 'subtract prefix[a-1][B]')}
              {renderStep([0, 0, A, b - 1, -1], 'subtract prefix[A][b-1]')}
              {renderStep([0, 0, a - 1, b - 1, 1], 'add prefix[a-1][b-1]')}
              <div
                className="font-mono p-1"
                onMouseEnter={() => setHighlightRect([a, b, A, B])}
                onMouseLeave={() => setHighlightRect(null)}
              >
                to get our result
              </div>
            </>
          ) : (
            <>
              {renderStep([0, 0, prefI - 1, prefJ, 1], 'add prefix[i-1][j]')}
              {renderStep([0, 0, prefI, prefJ - 1, 1], 'add prefix[i][j-1]')}
              {renderStep(
                [0, 0, prefI - 1, prefJ - 1, -1],
                'subtract prefix[i-1][j-1]'
              )}
              {renderStep([prefI, prefJ, prefI, prefJ, 1], 'add array[i][j]')}
              <div
                className="font-mono p-1"
                onMouseEnter={() => setHighlightRect([0, 0, prefI, prefJ])}
                onMouseLeave={() => setHighlightRect(null)}
              >
                to get prefix[i][j]
              </div>
            </>
          )}
        </div>
        <div className="text-center relative">
          {PrefMatrix.map(renderRow)}
          {highlightRect && (
            <div
              className="absolute border-4 border-blue-600 dark:border-blue-300"
              style={{
                top: `${highlightRect[0] * 2.5}rem`,
                left: `${highlightRect[1] * 2.5}rem`,
                right: `${
                  (PrefMatrix[0].length - 1 - highlightRect[3]) * 2.5
                }rem`,
                bottom: `${
                  (PrefMatrix.length - 1 - highlightRect[2]) * 2.5
                }rem`,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PrefixSumInteractive;
