import { useCallback, useReducer } from 'react';
import axios from 'axios';
import get from 'lodash/get';
import makeAdminRequest from './api';
import { useAuth } from './useAuth';
import { useTranslation } from 'react-i18next';
import { useLanguage } from './useLanguage';
import { ApiState, ServiceFn } from '@/pages/type';

const initialState: ApiState = {
  loading: false,
  isSuccess: undefined,
  data: undefined,
  isError: undefined,
  error: undefined
};

const ACTIONS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILED: 'failed',
  RESET: 'reset'
} as const;

type ActionType =
  | { type: typeof ACTIONS.LOADING; payload: { loading: boolean } }
  | { type: typeof ACTIONS.SUCCESS; payload: { data: unknown } }
  | { type: typeof ACTIONS.FAILED; error: { data?: unknown } }
  | { type: typeof ACTIONS.RESET };

function reducer<T>(state: ApiState<T>, action: ActionType): ApiState<T> {
  switch (action.type) {
    case ACTIONS.LOADING:
      return { ...state, loading: action.payload.loading };
    case ACTIONS.SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        data: get(action, 'payload.data', null)
      };
    case ACTIONS.FAILED:
      return {
        ...state,
        isSuccess: undefined,
        data: undefined,
        loading: false,
        isError: true,
        error: action?.error?.data
      };
    case ACTIONS.RESET:
      return { ...initialState };
    default:
      return state;
  }
}

interface UseApiQueryOptions {
  throwErrorOnFailure?: boolean;
}

function useApiQuery<T = undefined, R = undefined>(
  service: ServiceFn<R>,
  options: UseApiQueryOptions = {}
) {
  const [state, dispatch] = useReducer(reducer<T>, initialState as ApiState<T>);
  const { user, refreshUserDetails, handleLogout } = useAuth();
  const { t } = useTranslation('validations');
  const { currentLanguage } = useLanguage();
  const cancelTokenSource = axios.CancelToken.source();
  const { throwErrorOnFailure = false } = options;

  const onSuccess = useCallback((response: unknown) => {
    dispatch({ type: ACTIONS.SUCCESS, payload: response });
  }, []);

  const onError = useCallback((error: { data?: unknown }) => {
    dispatch({ type: ACTIONS.FAILED, error });
  }, []);

  const resetServiceState = useCallback(() => {
    dispatch({ type: ACTIONS.RESET });
  }, []);

  const callService = useCallback(
    (inputs?: unknown, extraInputs?: unknown) => {
      const reqParams = service(inputs, extraInputs);
      dispatch({ type: ACTIONS.LOADING, payload: { loading: true } });
      return makeAdminRequest<T>(
        {
          ...reqParams,
          cancelToken: cancelTokenSource.token,
          language: currentLanguage
        },
        {
          onSuccess,
          onError,
          throwErrorOnFailure,
          handleLogout,
          token: user?.token,
          translation: t
        }
      );
    },
    [service, onSuccess, onError, throwErrorOnFailure]
  );

  const cancelService = () => {
    if (cancelTokenSource.cancel) cancelTokenSource.cancel();
  };

  return {
    state,
    callService,
    resetServiceState,
    cancelService
  };
}

export default useApiQuery;
