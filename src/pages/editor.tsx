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
import React, { lazy, Suspense } from 'react';
import { isDevelopment, lazyLoadConfig } from '../utils/lazyLoad';

// Lazy load the EditorPage component
const EditorPage = lazy(() => import('../components/Editor/EditorPage'));

export default function EditorPageContainer(
  props: PageProps
): JSX.Element | null {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  // In development mode, use lazy loading if enabled
  if (isDevelopment && lazyLoadConfig.editor.enabled) {
    return (
      <Suspense fallback={lazyLoadConfig.editor.fallback()}>
        <EditorPage {...props} />
      </Suspense>
    );
  }

  // In production or if lazy loading is disabled, load normally
  return <EditorPage {...props} />;
}
