'use strict';

import * as TYPES from '../actions/types';

const initialState = {
	name: 'lily',
};

export default function user(state=initialState, action){

	switch(action.type){
		case TYPES.CHANGE_NAME:
			return {
				...state,
				name: action.text
			};

		default: 
			return state;
	}

}