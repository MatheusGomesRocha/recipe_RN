const initialState = {
    name: '',
    email: '',
    token: 0,
    avatar: '',
    user: '',
    menu: 0,
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
        case 'SET_AVATAR':
            return {...state, avatar: action.payload.avatar};
        break
        case 'SET_USER':
            return {...state, user: action.payload.user};
        break
        case 'SHOW_MENU':
            return {...state, menu: action.payload.menu};
        break
        default:
            return state
    }
}