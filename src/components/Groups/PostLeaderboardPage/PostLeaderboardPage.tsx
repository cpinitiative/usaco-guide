import * as React from 'react';
import SEO from '../../seo';
import Layout from '../../layout';
import { usePost } from '../../../hooks/groups/usePost';

export default function PostLeaderboardPage(props) {
  const { postId } = props as {
    path: string;
    groupId: string;
    postId: string;
  };
  const post = usePost(postId);

  return (
    <Layout>
      <SEO title={`Leaderboard: ${post.name}`} />
    </Layout>
  );
}
