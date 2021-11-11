import InitializationAuthentication from "../../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification,  } from "firebase/auth";
import { useState, useEffect } from "react";
// import { useHistory, useLocation } from "react-router";


InitializationAuthentication()


     // provider //

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState("");

            // Google signIn //

        function googleSignIn() {
            signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            })
            .catch(err => {
                setError(err.massage)
            })
        }


            // Get current user //

            useEffect(() => {
                const unsubscribe = onAuthStateChanged(auth, (user) => {
                    if (user) {
                        setUser(user);
            
                    }
                    else{
                        setUser({});
                    };
                    setIsLoading(false);
                });
                // setIsLoading(false);
                return () => unsubscribe;
            
            }, [])


            // logout //


            const logOut = () => {
                setIsLoading(true);
                signOut(auth).then(() => {
                    setUser({})
                }).catch(() => {
                    setError(error.message)
                })
                .finally(() => setIsLoading(false));
            };


            // signIn with email and password //

         // get Email //

            function getEmail (e) {
                setEmail (e?.target?.value);
            }

            // get password //

            function getPassword(e) {
                setPassword (e?.target?.value);
            }

            // get Name //

            function getName (e) {
                setName (e?.target?.value);
            }

            // verify email //

            function emailVerify (){
                sendEmailVerification(auth.currentUser)
                .then(() => {
                    alert(`An verification email has been sent to ${email}`)
                     });
            }

    
            //signUp with email and pass //

            function signUp (e) {
                e.preventDefault()
               
                createUserWithEmailAndPassword(auth, email, password)
                .then (result => {
                    setUserName();
                    emailVerify();
                    alert("user's been created")
                })
                .catch(err => {
                    setError(err.message);
                })
            } 


            //signIn with email //

            function signInWithEmail (e) {
                e.preventDefault()
                signInWithEmailAndPassword(auth, email,password)
                .then((result) => {
                    setUser(result.user);
                })
                .catch((err) => {
                    setError(err.message);
                });
            }

            // set userName //

            function setUserName () {
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                   
                  }).catch((error) => {
                    setError(error.massage)
                  });
            }



    return { 
        googleSignIn,
                user,
               error,
            isLoading, 
            logOut,
            signInWithEmail,
            signUp,
            getEmail,
            getName,
            getPassword
                     };

};

export default useFirebase;