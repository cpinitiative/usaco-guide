import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { MenuIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import { useGroupActions } from '../../../hooks/groups/useGroupActions';
import { useUserLeaderboardData } from '../../../hooks/groups/useLeaderboardData';
import { GroupData } from '../../../models/groups/groups';
import { PostData, sortPostsComparator } from '../../../models/groups/posts';
import FeedItem from './FeedItem';

function SortableItem(props: {
  id: string;
  group: GroupData;
  post: PostData;
  userPoints: number | null;
  isBeingDragged: boolean;
}) {
  // probably post was just deleted before items updated
  if (!props.post) return null;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <FeedItem
        group={props.group}
        post={props.post}
        userPoints={props.userPoints}
        isBeingDragged={props.isBeingDragged}
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

export default function Feed(): JSX.Element {
  const group = useActiveGroup();
  const { updatePostOrdering } = useGroupActions();

  const [activeId, setActiveId] = useState(null);
  const [items, setItems] = useState([]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    if (!group.groupData || !group.posts) return;
    if (group.groupData.postOrdering?.length !== group.posts.length) {
      // This shouldn't happen. But maybe this is from an old group
      // that was created before post ordering was implemented

      // Note: There's a small bug here and in PostProblems.tsx
      // where immediately after creating a new post the post ordering and post length will be off...
      setItems(
        group.posts
          .filter(post => {
            if (!group.showAdminView && !post.isPublished) return false;
            return true;
          })
          .sort(sortPostsComparator)
          .reverse()
          .map(x => x.id)
      );
    } else {
      setItems(group.groupData.postOrdering);
    }
  }, [group.groupData?.postOrdering, group.posts]);

  const handleDragStart = event => {
    const { active } = event;

    setActiveId(active.id);
  };

  const handleDragEnd = event => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems(items => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        const newArr = arrayMove(items, oldIndex, newIndex);
        updatePostOrdering(group.activeGroupId, newArr);
        return newArr;
      });
    }

    setActiveId(null);
  };

  const userLeaderboardData = useUserLeaderboardData(
    group.activeGroupId,
    group.activeUserId
  );

  return (
    <div>
      {group.isLoading && 'Loading posts...'}
      {!group.isLoading &&
        (group.showAdminView ? (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={items}
              strategy={verticalListSortingStrategy}
            >
              <div className="divide-y divide-solid divide-gray-200 dark:divide-gray-600 sm:divide-none sm:space-y-4">
                {items.map(id => (
                  <SortableItem
                    key={id}
                    id={id}
                    group={group.groupData}
                    post={group.posts.find(x => x.id === id)}
                    userPoints={userLeaderboardData?.[id]?.totalPoints ?? null}
                    isBeingDragged={activeId === id}
                  />
                ))}
              </div>
            </SortableContext>
            <DragOverlay>
              {activeId ? (
                <FeedItem
                  group={group.groupData}
                  post={group.posts.find(x => x.id === activeId)}
                  userPoints={
                    userLeaderboardData?.[activeId]?.totalPoints ?? null
                  }
                  dragHandle={
                    <div className="self-stretch flex items-center px-2">
                      <MenuIcon className="h-5 w-5 text-gray-300" />
                    </div>
                  }
                />
              ) : null}
            </DragOverlay>
          </DndContext>
        ) : (
          <div className="divide-y divide-solid divide-gray-200 dark:divide-gray-600 sm:divide-none sm:space-y-4">
            {items.map(id => {
              const post = group.posts.find(x => x.id === id);
              if (!post.isPublished) return null;
              return (
                <FeedItem
                  group={group.groupData}
                  post={post}
                  userPoints={userLeaderboardData?.[id]?.totalPoints ?? null}
                  key={id}
                />
              );
            })}
          </div>
        ))}
    </div>
  );
}
