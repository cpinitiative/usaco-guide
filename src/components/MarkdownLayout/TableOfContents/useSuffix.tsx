import { useContext } from 'react';
import MarkdownLayoutContext from '../../../context/MarkdownLayoutContext';
import { ModuleInfo } from '../../../models/module';

export default function useSuffix() {
  const moduleLayoutInfo = useContext(MarkdownLayoutContext);
  if (!moduleLayoutInfo) {
    throw new Error('useSuffix must be used within a MarkdownLayoutContext');
  }
  const markdownInfo = moduleLayoutInfo.markdownLayoutInfo;
  const relativePath = markdownInfo.fileRelativePath;
  let suffix = '';
  if (markdownInfo instanceof ModuleInfo) {
    // /\d_.*/.test(relativePath)
    suffix = 'content/' + relativePath;
  } else {
    suffix = 'solutions/' + relativePath;
  }
  return suffix;
}
