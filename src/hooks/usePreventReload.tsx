import { useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { isEqual, cloneDeep } from 'lodash';
import { useTranslation } from 'react-i18next';

interface PreventReloadOptions {
  title: string;
  description: string;
  confirmButtonText: string;
  cancelButtonText: string;
}

// Normalize state: Convert `""` to `null`
function normalizeState<T>(state: T): T {
  if (typeof state === 'object' && state !== null) {
    return JSON.parse(JSON.stringify(state, (_, value) => (value === '' ? null : value)));
  }
  return (state === '' ? null : state) as T;
}

export function usePreventReload<T>(
  forceLeave: boolean,
  initialStates: T[],
  currentStates: T[],
  options?: Partial<PreventReloadOptions>,
  onConfirm?: () => void   // ✅ new 5th param
) {
  const navigate = useNavigate();
  const { t } = useTranslation('validations');
  const location = useLocation();
  const lastPath = useRef(location.pathname);
  const lastSavedStates = useRef(initialStates.map(state => normalizeState(cloneDeep(state))));
  const isConfirming = useRef(false);

  // Check if any state has changed
  const hasPendingChanges =
    !forceLeave &&
    !isEqual(
      lastSavedStates.current,
      currentStates.map(state => normalizeState(state))
    );

  const { title = t('reloadTitle'), description = t('reloadDescription') } = options || {};

  // Prevent reload with confirmation
  useEffect(() => {
    if (forceLeave) return;

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (hasPendingChanges) {
        event.preventDefault();
        event.returnValue = description;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasPendingChanges, description, forceLeave]);

  // Handle browser back/forward navigation
  useEffect(() => {
    if (forceLeave) return;

    const handlePopState = (event: PopStateEvent) => {
      if (hasPendingChanges && !isConfirming.current) {
        isConfirming.current = true;

        setTimeout(() => {
          isConfirming.current = false;
        }, 500);

        const confirmLeave = window.confirm(`${title}\n\n${description}`);
        if (!confirmLeave) {
          event.preventDefault();
          navigate(lastPath.current);
        } else {
          lastPath.current = location.pathname;
          onConfirm?.(); // ✅ call OK callback
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [hasPendingChanges, title, description, navigate, location, forceLeave, onConfirm]);

  // Update last saved states when initialStates change
  useEffect(() => {
    lastSavedStates.current = initialStates.map(state => normalizeState(cloneDeep(state)));
  }, [initialStates]);

  // Track last valid path
  useEffect(() => {
    if (!hasPendingChanges) {
      lastPath.current = location.pathname;
    }
  }, [hasPendingChanges, location.pathname]);

  // Callback function to manually trigger the confirmation popup
  const triggerPopup = useCallback(() => {
    if (hasPendingChanges && !isConfirming.current) {
      isConfirming.current = true;

      setTimeout(() => {
        isConfirming.current = false;
      }, 500);

      const confirmed = window.confirm(`${title}\n\n${description}`);
      if (confirmed) {
        onConfirm?.(); // ✅ call OK callback
      }
      return confirmed;
    }
    return true; // If no changes, allow navigation
  }, [hasPendingChanges, title, description, onConfirm]);

  return { hasPendingChanges, triggerPopup };
}
