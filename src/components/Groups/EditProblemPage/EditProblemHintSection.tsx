import * as React from 'react';
import { ProblemData, ProblemHint } from '../../../models/groups/problem';
import EditProblemHintModal from './EditProblemHintModal';

export default function EditProblemHintSection({
  problem,
  onChange,
}: {
  problem: ProblemData;
  onChange: (hints: ProblemHint[]) => any;
}) {
  const [isHintModalOpen, setIsHintModalOpen] = React.useState(false);
  const [currentProblemHint, setCurrentProblemHint] =
    React.useState<ProblemHint | null>(null);

  const handleSave = (hint: ProblemHint | null) => {
    if (hint === null) {
      // hint was deleted
      if (!currentProblemHint) return; // should not happen
      const hintIdx = problem.hints.findIndex(
        hint => hint.id === currentProblemHint.id
      );
      if (hintIdx === -1) {
        throw new Error("Couldn't find hint to delete");
      }
      const arr = [...problem.hints];
      arr.splice(hintIdx, 1);
      onChange(arr);
    } else {
      if (currentProblemHint) {
        const hintIdx = problem.hints.findIndex(
          hint => hint.id === currentProblemHint.id
        );
        if (hintIdx === -1) {
          throw new Error("Couldn't find hint to edit");
        }
        const arr = [...problem.hints];
        arr.splice(hintIdx, 1, hint);
        onChange(arr);
      } else {
        onChange([...problem.hints, hint]);
      }
    }
  };

  return (
    <>
      <span className="block font-medium text-gray-700 dark:text-gray-200">
        Problem Hints
      </span>

      <div>
        <div className="mt-4 flow-root">
          <ul className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
            {problem.hints.map(hint => (
              <li className="py-4" key={hint.id}>
                <div className="flex items-center space-x-4">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-gray-200">
                      {hint.name || 'Hint'}
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      {hint.body}
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        setCurrentProblemHint(hint);
                        setIsHintModalOpen(true);
                      }}
                      className="btn rounded-full px-2.5 py-0.5"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <button
            onClick={() => {
              setIsHintModalOpen(true);
              setCurrentProblemHint(null);
            }}
            className="btn"
          >
            Add New Hint
          </button>
        </div>
      </div>

      <EditProblemHintModal
        isOpen={isHintModalOpen}
        hint={currentProblemHint}
        onClose={() => setIsHintModalOpen(false)}
        onSave={handleSave}
      />
    </>
  );
}
