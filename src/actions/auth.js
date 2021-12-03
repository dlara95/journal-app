import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "@firebase/auth";
import Swal from "sweetalert2";
import { googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types"
import { noteLogout } from "./notes";
import { finishLoading, startLoading } from "./ui";

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }

});


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());

            })
            .catch((err) => {
                dispatch(finishLoading());
                Swal.fire('Error', err.message, 'error');
            });
    };
}

export const startLoginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            });
    }
}

export const startRegister = (email, password, name) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async({ user }) => {
                await updateProfile(auth.currentUser, { displayName: name });
                dispatch(login(user.uid, user.displayName));
            })
            .catch(err => {
                console.log(err);
                Swal.fire('Error', err.message, 'error');
            });
    }
}

export const startLogout = () => {
    return async(dispatch) => {
        const auth = getAuth();
        await auth.signOut();
        dispatch(logout());
        dispatch(noteLogout());
    }
}

export const logout = () => ({
    type: types.logout
});