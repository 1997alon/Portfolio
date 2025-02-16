import React, { useReducer } from "react";

export const initialState = { topic: "about" };

export default function Reducer(state, action) {
    switch (action.type) {
        case "ABOUT":
            return { topic: "about" };
        case "SKILLS":
            return { topic: "skills" };
        case "ARMY":
            return { topic: "army" };
        default:
            return state;
    }
}
