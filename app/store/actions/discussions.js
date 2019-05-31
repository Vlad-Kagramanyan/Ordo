import {
    ADD_DRAFT,
} from '../constants/discussions';

function showMsg(text) {
    Toast.show({
        text: text,
        buttonText: "Okay",
        duration: 5000
    })
}

export function addDraft (dispatch, data) {
    console.dir({ADD_DRAFT})
    dispatch({ type: 'ADD_DRAFT', payload: data })
  }