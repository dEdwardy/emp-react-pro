// Actions
export const types = {
  SET_USER_INFO: 'SET_USER_INFO',
  SET_DICT_INFO: 'SET_DICT_INFO',
  SET_LOADING: 'SET_LOADING',

  FETCH_DICT: 'FETCH_DICT',
}
const initialState = {
  uinfo: {},
  dict: {},
  loading: false,
}
interface Iaction {
  type: string
  data: any
}
// Reducer
export default function reducer(state = initialState, action: Iaction) {
  switch (action.type) {
    case types.SET_USER_INFO:
      return {
        ...state,
        uinfo: action.data,
      }
    case types.SET_DICT_INFO:
      return {
        ...state,
        dict: action.data,
      }
    case types.SET_LOADING:
      return {
        ...state,
        loading: action.data,
      }
    default:
      return state
  }
}
// Action Creators

export const actions = {
  setUserInfo(data: any) {
    return {
      type: types.SET_USER_INFO,
      data,
    }
  },
  fetchDict() {
    return {
      type: types.FETCH_DICT,
    }
  },
  setDictInfo(data: any) {
    return {
      type: types.SET_DICT_INFO,
      data,
    }
  },
  setLoding(data: any) {
    return {
      type: types.SET_LOADING,
      data,
    }
  },
}
