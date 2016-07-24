const DO_LOGIN = 'DO_LOGIN';
const FETCH_SESSION = 'FETCH_SESSION';
const RECEIEVED_SESSION_SUCCESS = 'RECEIEVED_SESSION_SUCCESS';
const RECEIEVED_SESSION_ERROR = 'RECEIEVED_SESSION_ERROR';

const initialState = {
    jwt: '',
    user: null,
    isFetching: false,
    error: ''
};

// Session actions
export function doLogin({email, password}) {
    return {
        type: DO_LOGIN,
        payload: {email, password}
    };
}

export function fetchSession() {
    return {
        type: FETCH_SESSION
    };
}

export function receivedSessionSuccess(jwt, user) {
    return {
        type: RECEIEVED_SESSION_SUCCESS,
        payload: {jwt, user}
    }
}

export function receivedSessionError(error) {
    return {
        type: RECEIEVED_SESSION_ERROR,
        error
    };
}
// end Session actions

// Session reducer
export default function session(state = initialState, action) {
    switch (action.type) {
    default:
        return state;
    }
}
