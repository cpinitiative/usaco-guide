import * as React from 'react';
import { Post } from '../../../mobx/Post';
import { observer } from 'mobx-react-lite';
import { PostData } from '../../../models/groups/posts';

export default function PostBody({ post }: { post: PostData }) {
  return (
    <div className="py-3 xl:pt-6 xl:pb-0">
      <div className="prose max-w-none">
        <p>{post.body}</p>
      </div>
    </div>
  );
}
