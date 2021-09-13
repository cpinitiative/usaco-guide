// import * as React from 'react';

// export default function Placeholder() {
//   return (
//     <div data-testid="build-placeholder">
//       This placeholder greatly speeds up build times. Uncomment this code and
//       comment out everything below it. Make sure to undo before pushing.
//     </div>
//   );
// }

import { PageProps } from 'gatsby';
import React, { useEffect, useState } from 'react';
import EditorPage from '../components/Editor/EditorPage';

export default function EditorPageContainer(props: PageProps): JSX.Element {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <EditorPage {...props} />;
}
