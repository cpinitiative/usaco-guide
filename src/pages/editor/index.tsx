import React, { lazy, Suspense } from "react";
import { isDevelopment, lazyLoadConfig } from "../../utils/lazyLoad";

// Lazy load the EditorPage component
const EditorPage = lazy(() => import("../../components/Editor/EditorPage"));

export default function EditorPageContainer(): JSX.Element | null {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  // In development mode, use lazy loading if enabled
  if (isDevelopment && lazyLoadConfig.editor.enabled) {
    return (
      <Suspense fallback={lazyLoadConfig.editor.fallback()}>
        <EditorPage />
      </Suspense>
    );
  }

  // In production or if lazy loading is disabled, load normally
  return <EditorPage />;
}
