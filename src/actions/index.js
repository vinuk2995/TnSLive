import {
    ADD_darkMode,
    ADD_Question,
    SET_LangName,
    SET_DialogOpen,
    SET_DialogQnAOpen,
    ADD_mcqList,
    SET_queCount,
    
  } from "../constants/action-types";
  
  export function addQuestion(payload) {
    return { type: ADD_Question, payload };
  }
  export function adddarkMode(payload) {
    return { type: ADD_darkMode, payload };
  }
  export function setlangName(payload) {
    return { type: SET_LangName, payload };
  }
  export function setDialogOpen(payload) {
    return { type: SET_DialogOpen, payload };
  }
  export function setDialogQnAOpen(payload) {
    return { type: SET_DialogQnAOpen, payload };
  }
  export function addMcqList(payload) {
    return { type: ADD_mcqList, payload };
  }
  export function setQueCount(payload) {
    return { type: SET_queCount, payload };
  }
  