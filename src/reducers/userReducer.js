const initialState = {
    name: 'Teste',
    email: '',
    token: 0,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_NAME':
            return {...state, name: action.payload.name};
        break;
        case 'SET_EMAIL':
            return {...state, email: action.payload.email};
        break;
        case 'SET_TOKEN':
            return {...state, token: action.payload.token};
        break;
        default:
            return state
    }
}