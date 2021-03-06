import React, { useContext, useEffect, useState } from 'react';
import '../Login/FireBase/firebase.config'
import {
    getAuth, 
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';


const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider  ({children}) {
  
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState()
    const [service, setService] = useState([]);

    useEffect(()=>{
        const auth = getAuth();
       const unsubscribe = onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    },[]);

    //signup function
    async function signup(email, password, username){
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);

        //update profile
        await updateProfile(auth.currentUser, {
            displayName: username
        });
        const user = auth.currentUser;
        setCurrentUser({
            ...user,
        });
    }

    //Google login function
    function googleLogin(){
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }
    //login function
    function login(email, password){
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);
    }

    //logout function
    function logout(){
        const auth = getAuth();
        return signOut(auth);
    }

    const value = {
        service,
        setService,
        currentUser,
        signup,
        login,
        logout,
        googleLogin
    }



    return (
        <div>
            <AuthContext.Provider value={value}>
            {!loading && children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;