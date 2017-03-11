let initialState = {
    currentScore: 666,
    currentTurn: 'p1',
    p1: 501,
    p2: 502
};

export default function Reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}