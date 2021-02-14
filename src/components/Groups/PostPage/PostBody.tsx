import * as React from 'react';
import { Post } from '../../../mobx/Post';
import { observer } from 'mobx-react-lite';

export default observer(function PostBody({ post }: { post: Post }) {
  return (
    <div className="py-3 xl:pt-6 xl:pb-0">
      <div className="prose max-w-none">
        <p>
          Thank you for attending our fifth class! Here is the recording of the
          lecture: https://youtu.be/Mh3Fgjm8JGc.
        </p>
      </div>
    </div>
  );
});
