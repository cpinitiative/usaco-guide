import * as React from 'react';
import { useEffect, useState } from 'react';

export default function TrustedBy() {
  const [numUsers, setNumUsers] = useState(-1);
  const [numPageviews, setNumPageviews] = useState(-1);
  const [numStars, setNumStars] = useState(-1);
  useEffect(() => {
    fetch('https://usaco-guide.firebaseio.com/pageviews.json')
      .then(resp => resp.json())
      .then(pageviews => {
        setNumPageviews(parseInt(pageviews));
      });
    fetch('https://usaco-guide.firebaseio.com/num_users.json')
      .then(resp => resp.json())
      .then(numUsers => {
        setNumUsers(parseInt(numUsers));
      });
    fetch('https://api.github.com/repos/cpinitiative/usaco-guide')
      .then(resp => resp.json())
      .then(data => {
        setNumStars(data.stargazers_count);
      });
  }, []);
  return (
    <div className="max-w-4xl">
      <pre>
        {' '}
        {numUsers} Registered Users{'\n'} {numPageviews} Pageviews{'\n'}{' '}
        {numStars} GitHub Stars
      </pre>
    </div>
  );
}
