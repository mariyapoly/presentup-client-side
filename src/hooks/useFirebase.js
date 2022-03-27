import axios from "axios";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  // create user email password
  const signUpWidthEmailPassword = (email, password, name, nagivate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        nagivate("/");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // saved user
        savedUser(email, name);
        // update user progile
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // logIn Width Email Password
  const logInWidthEmailPassword = (email, password, navigate, location) => {
    setIsLoading(true);
    const distination = location?.state?.from || "/";
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        navigate(distination);
        setUser(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // observer user state change
  useEffect(() => {
    setIsLoading(true);
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setIsLoading(false);
    });
    return () => unSubscribed;
  }, [auth]);

  // logout user
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // saved user database
  const savedUser = (email, name) => {
    axios
      .post("https://radiant-cove-56570.herokuapp.com/users", {
        displayName: name,
        email: email,
      })
      .then(function (response) {
        console.log(response);
      });
  };

  return {
    user,
    error,
    signUpWidthEmailPassword,
    logInWidthEmailPassword,
    logOut,
    isLoading,
  };
};

export default useFirebase;
