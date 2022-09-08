import { useReducer } from 'react';
import { ERROR, PENDING, SUCCESS } from './constants.js';

const httpReducer = (state, action) => {
  switch (action.type) {
    case PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case ERROR:
      return {
        ...state,
        isLoading: false,
        err: action.payload,
      };

    default:
      return state;
  }
};

const useHttp = (requestFunction, startWithPending = false) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    isLoading: startWithPending ? true : null,
    data: [],
    err: null,
  });

  const sendRequest = async (requestData) => {
    dispatch({ type: PENDING });
    try {
      const data = await requestFunction(requestData);
      dispatch({ type: SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };

  return { sendRequest, ...httpState };
};

export default useHttp;
