import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATED,
  EMPLOYEE_SAVED_SUCCESS,
  EMPLOYEE_DELETE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = { name: '', phone: '', shift: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_DELETE_SUCCESS:
    case EMPLOYEE_SAVED_SUCCESS:
    case EMPLOYEE_CREATED:
      return INITIAL_STATE;
    case EMPLOYEE_UPDATE:
      // action.payload = { prop: 'name', value: 'jane' }
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
