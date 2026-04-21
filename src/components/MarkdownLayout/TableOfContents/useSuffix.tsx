import { useContext } from 'react';
import MarkdownLayoutContext from '../../../context/MarkdownLayoutContext';

export default function useSuffix() {
  const moduleLayoutInfo = useContext(MarkdownLayoutContext);
  if (!moduleLayoutInfo) {
    throw new Error('useSuffix must be used within a MarkdownLayoutContext');
  }
  const markdownInfo = moduleLayoutInfo.markdownLayoutInfo;
  const relativePath = markdownInfo.fileRelativePath;
  return relativePath;
}
