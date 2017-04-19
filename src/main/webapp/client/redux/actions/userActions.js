import axios from 'axios';

export function fetchUsers() {
    return function(dispatch) {
        // axios.get('/rest/users/getAll')
        // axios.get('http://rest.learncode.academy/api/wstern/users')
        axios.get('http://localhost:3000/users')
            .then((response) => {
                dispatch({type: 'FETCH_USERS_FULFILLED', payload: response.data})
            })
            .catch((err) => {
                dispatch({type: 'FETCH_USERS_REJECTED', payload: err});
            })
    }
}
export function setUserName(name){
    return {
        type: 'SET_USER_NAME',
        payload: name
    }
}export function setUserAge(age){
    return {
        type: 'SET_USER_NAME',
        payload: age
    }
}