import { navigate } from 'gatsby';
import React, { useEffect } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import { useActivePostProblems } from '../../../hooks/groups/useActivePostProblems';
import { usePostActions } from '../../../hooks/groups/usePostActions';
import { PostData } from '../../../models/groups/posts';
import ProblemListItem from '../ProblemListItem';
import { GroupData } from '../../../models/groups/groups';
import { ProblemData } from '../../../models/groups/problem';
import { MenuIcon } from '@heroicons/react/solid';

function SortableItem(props: {
  id: string;
  group: GroupData;
  post: PostData;
  problem: ProblemData;
}) {
  if (!props.problem) return null;

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <ProblemListItem
        group={props.group}
        post={props.post}
        problem={props.problem}
        dragHandle={
          <div
            className="self-stretch flex items-center px-2"
            {...attributes}
            {...listeners}
          >
            <MenuIcon className="h-5 w-5 text-gray-300" />
          </div>
        }
      />
    </div>
  );
}

export default function PostProblems({
  post,
}: {
  post: PostData;
}): JSX.Element {
  const activeGroup = useActiveGroup();
  const { createNewProblem, updateProblemOrdering } = usePostActions(
    activeGroup.activeGroupId
  );
  const { problems, isLoading } = useActivePostProblems();

  const [items, setItems] = React.useState([]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    if (!post || !problems) return;
    if (post.problemOrdering?.length !== problems.length) {
      // This shouldn't happen. But maybe this is from an old post
      // that was created before problem ordering was implemented
      setItems(
        problems
          .sort((a: any, b: any) => {
            if (a.order === b.order) return a.name < b.name ? -1 : 1;
            return a.order < b.order ? -1 : 1;
          })
          .map(x => x.id)
      );
    } else {
      setItems(post.problemOrdering);
    }
  }, [post.problemOrdering, problems]);

  const handleDragEnd = event => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setItems(items => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        const newArr = arrayMove<string>(items, oldIndex, newIndex);
        updateProblemOrdering(post.id, newArr);
        return newArr;
      });
    }
  };

  return (
    <section className="mt-8 xl:mt-10">
      <div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="pb-4 flex justify-between space-x-4">
            <div>
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Problems
              </h2>
              {activeGroup.showAdminView && (
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Click a problem to edit or delete it.
                </p>
              )}
            </div>
            {activeGroup.showAdminView && (
              <div>
                <button
                  type="button"
                  onClick={() =>
                    createNewProblem(post).then(id =>
                      navigate(`problems/${id}/edit`)
                    )
                  }
                  className="btn"
                >
                  Add Problem
                </button>
              </div>
            )}
          </div>
          <div>
            <div className="flow-root">
              {!isLoading &&
                (activeGroup.showAdminView ? (
                  <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                  >
                    <SortableContext
                      items={items}
                      strategy={verticalListSortingStrategy}
                    >
                      <div className="divide-y divide-gray-200 dark:divide-gray-700 border-b border-gray-200 dark:border-gray-700">
                        {items.map(problemId => (
                          <SortableItem
                            key={problemId}
                            id={problemId}
                            group={activeGroup.groupData}
                            post={post}
                            problem={problems.find(x => x.id === problemId)}
                          />
                        ))}
                      </div>
                    </SortableContext>
                  </DndContext>
                ) : (
                  <div className="divide-y divide-gray-200 dark:divide-gray-700 border-b border-gray-200 dark:border-gray-700">
                    {items.map(problemId => (
                      <ProblemListItem
                        key={problemId}
                        group={activeGroup.groupData}
                        post={post}
                        problem={problems.find(x => x.id === problemId)}
                      />
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
