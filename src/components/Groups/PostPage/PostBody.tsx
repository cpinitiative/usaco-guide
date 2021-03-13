import * as React from 'react';
import { PostData } from '../../../models/groups/posts';
import SafeMarkdownRenderer from '../SafeMarkdownRenderer';

export default function PostBody({ post }: { post: PostData }) {
  return (
    <div className="py-3 xl:pt-6 xl:pb-0">
      <SafeMarkdownRenderer>{post.body}</SafeMarkdownRenderer>
    </div>
  );
}
