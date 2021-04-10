import * as React from 'react';
import { useContext } from 'react';
import MarkdownLayoutContext from '../../context/MarkdownLayoutContext';
import { ModuleInfo } from '../../models/module';
import TextTooltip from '../Tooltip/TextTooltip';
import MarkCompleteButton from './MarkCompleteButton';

export default function ModuleProgressUpdateBanner() {
  const {
    markdownLayoutInfo: markdownData,
    handleCompletionChange,
    moduleProgress,
  } = useContext(MarkdownLayoutContext);

  if (markdownData instanceof ModuleInfo) {
    return (
      <h3 className="text-lg leading-6 font-medium text-gray-900 text-center mb-8 border-t border-b border-gray-200 py-8 dark:border-gray-800 dark:text-dark-high-emphasis flex items-center justify-center">
        <span>
          <TextTooltip content="You can use this as a way to track your progress throughout this guide.">
            Module Progress
          </TextTooltip>
          :
        </span>
        <span className="ml-4">
          <MarkCompleteButton
            onChange={handleCompletionChange}
            state={moduleProgress}
            dropdownAbove
          />
        </span>
      </h3>
    );
  }
  return null;
}
