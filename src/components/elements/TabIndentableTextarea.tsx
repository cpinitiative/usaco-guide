import * as React from 'react';

/**
 * A textarea that allow tabbing for indentation
 */
export default function TabIndentableTextarea(
  props: React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
) {
  const ref = React.useRef<HTMLTextAreaElement | null>(null);

  React.useEffect(() => {
    if (ref.current) {
      // https://stackoverflow.com/questions/6637341/use-tab-to-indent-in-textarea
      const handleKeydown: (
        this: HTMLTextAreaElement,
        ev: KeyboardEvent
      ) => any = function (e) {
        if (e.key == 'Tab') {
          e.preventDefault();
          const start = this.selectionStart;
          const end = this.selectionEnd;

          // set textarea value to: text before caret + tab + text after caret
          this.value =
            this.value.substring(0, start) + '\t' + this.value.substring(end);

          // put caret at right position again
          this.selectionStart = this.selectionEnd = start + 1;
        }
      };
      ref.current.addEventListener('keydown', handleKeydown);
      return () => {
        if (ref.current) {
          ref.current.removeEventListener('keydown', handleKeydown);
        }
      };
    }
  }, [ref.current]);

  return <textarea {...props} ref={ref} />;
}
