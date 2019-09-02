import { ActionTypes, ActionUnion } from '../actions/actions'
import { User } from 'src/app/models/user.model';

export interface State {
  teachers: any;
  students: any;
  schools: any;
  events: any;
  event: any;
  user: User
}

export const initialState: State = {
  user: {
    loggedIn: false,
    nickname: 'guest',
    name: '',
    email: '',
    email_verified: false,
    picture: '',
    updated_at: null,
    user_metadata: null
  },
  schools: null,
  events: null,
  event: null,
  teachers: null,
  students: null
}

export function filteredAppReducer(state = initialState, action: ActionUnion): State {
  switch (action.type) {
    case ActionTypes.UserChanged: {
      return { ...state, user: action.payload }
    }
    case ActionTypes.EventsForUser: {
      return { ...state, events: action.payload }
    }
    case ActionTypes.SelectedEvent: {
      return { ...state, event: action.payload }
    }
    default:
      return state;
  }
}
