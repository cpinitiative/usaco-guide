import * as React from 'react';
import { useMarkdownLayout } from '../../context/MarkdownLayoutContext';
import { ModuleInfo } from '../../models/module';
import { ClientOnly } from '../ClientOnly';
import TextTooltip from '../Tooltip/TextTooltip';
import MarkCompleteButton from './MarkCompleteButton';

export default function ModuleProgressUpdateBanner() {
  const {
    markdownLayoutInfo: markdownData,
    handleCompletionChange,
    moduleProgress,
  } = useMarkdownLayout();

  if (markdownData instanceof ModuleInfo) {
    return (
      <h3 className="dark:text-dark-high-emphasis mb-8 flex items-center justify-center border-t border-b border-gray-200 py-8 text-center text-lg leading-6 font-medium text-gray-900 dark:border-gray-800">
        <span>
          <TextTooltip content="You can use this as a way to track your progress throughout this guide.">
            Module Progress
          </TextTooltip>
          :
        </span>
        <span className="ml-4">
          <ClientOnly>
            <MarkCompleteButton
              onChange={handleCompletionChange}
              state={moduleProgress}
              dropdownAbove
            />
          </ClientOnly>
        </span>
      </h3>
    );
  }
  return null;
}
