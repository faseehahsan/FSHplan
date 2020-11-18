// import { firestore } from "firebase";
// import * as firebase from 'firebase';
import 'firebase/firestore';

const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        // make async call
        const firestoredata = getFirestore();
        firestoredata.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch ({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({type: 'CREATE_PRJECT_ERROR', err});
        })
    }
}

export default createProject