import {ActionTypes} from './typesSelectLang';

export const switchEn = () => ({
    type: ActionTypes.SWITCH_LANG_EN,
    payload: {
        value: "en"
    }
})

export const switchRu = () => ({
    type: ActionTypes.SWITCH_LANG_RU,
    payload: {
        value: "ru"
    }
})

export const getLangEn = setEn => ({
    type: ActionTypes.GET_LANG_EN,
    payload: {
        setEn 
    }
})

export const getLangRu = setRu => ({
    type: ActionTypes.GET_LANG_RU,
    payload: {
        setRu 
    }
})