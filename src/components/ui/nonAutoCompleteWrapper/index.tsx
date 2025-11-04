import React, { useEffect, useRef, ReactNode } from 'react';

interface NoAutoCompleteWrapperProps {
  children: ReactNode;
}

const NoAutoCompleteWrapper: React.FC<NoAutoCompleteWrapperProps> = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      const elements = wrapperRef.current.querySelectorAll<
        HTMLInputElement | HTMLTextAreaElement | HTMLFormElement | HTMLSelectElement
      >('input, textarea, form, select');

      elements.forEach(el => {
        el.setAttribute('autoComplete', 'off');

        // Assign a random name if none is provided
        if ('name' in el && !el.name) {
          el.name = 'no_autofill_' + Math.random().toString(36).substring(2, 10);
        }
      });
    }
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
};

export default NoAutoCompleteWrapper;
