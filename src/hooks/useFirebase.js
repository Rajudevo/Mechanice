import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
    const [user, setUsers] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogIn] = useState(false);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

         return signInWithPopup(auth, googleProvider)
       
        .finally(() => setIsLoading(false));
    }

    const toggleLogIn = e => {
        setIsLogIn(e.target.checked);
    }

    const handleRegistration = e => {
        e.preventDefault();
        if(password.length <6) {
            setError('password should be atleast 6 charecters long');
            return;
        }

        if(isLogin) {
            processLogin(email, password);
        }
        else{
            registerNewUser(email, password);
        }
        
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');

        })
        .catch(error => {
            setError(error.message);
        })

    }


    const registerNewUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('')
            verifyEmail();

        })

        .catch(error => {
            setError(error.message);
        })
        
      
        
    }



    const handleEmailChange = e => {
        setEmail(e.target.value);

    }

    const handlePasswordChange = e => {
        
        setPassword(e.target.value);
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then(result => {
            console.log(result);
        })
    }


// observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUsers(user);
            }else{
                setUsers({})
            }
            setIsLoading(false);

        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => { })
        .finally(() => setIsLoading(false));
        
    }

    return {
        user,
        signInUsingGoogle,
        logOut,
        isLoading,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        email,
        password,
        error,
        toggleLogIn,
        isLogin
        

    }
}


export default useFirebase;


