import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase =() =>{
    const [users,setUsers] =useState({});
    const auth = getAuth();


    const signInUsingGoogle=() =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUsers(result.user);
        })
    }
    useEffect( () =>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUsers(user);
            }
            else{
                setUsers({})
            }
        })
    })

    const logout =() =>{
        signOut(auth)
        .then(() => {})
    }
    return{
        users,
        signInUsingGoogle,
        logout
    }
}
export default useFirebase;