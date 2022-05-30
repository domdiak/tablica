import { useReducer } from "react";

const initialState = {
    isOpenAddCatModal: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "showModal":
            return { isOpenCatModal: true };
        default:
            throw new Error();
    }
}
use;
