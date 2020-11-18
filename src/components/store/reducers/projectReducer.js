const initState = {
    projects: [
        {id:'1', title:'help me', content: 'blaaaaah'},
        {id:'2', title:'help meeeeeeee', content: 'bla2aaaah'},
        {id:'3', title:'help meeeeeeee3', content: 'blaa33aaah'}
]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT': console.log(action.project);
        return state;

        case 'CREATE_PROJECT_ERROR': console.log(action.err);
        return state;

        default: return state;
    }
}

export default projectReducer