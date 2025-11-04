import { useCallback } from 'react';

export const useFocusFirstInvalidField = () => {
  const focusFirstInvalidField = useCallback((targetId?: string): boolean => {
    const allElements = document.querySelectorAll<HTMLInputElement | HTMLSelectElement>(
      '[aria-required="true"]'
    );

    // 1. Focus specific element by ID (regardless of value)
    if (targetId) {
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        (targetEl as HTMLElement).focus?.();
        return false;
      }
    }

    // 2. Fallback to first empty required field
    for (const el of allElements) {
      if (!el.value?.trim()) {
        (el as HTMLElement).focus();
        return false;
      }
    }

    return true; // all valid
  }, []);

  return { focusFirstInvalidField };
};
