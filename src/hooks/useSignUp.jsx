import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../config/firebase";
import toast from "react-hot-toast";
import { doc, setDoc } from "firebase/firestore";
import { useContext } from "react";
import { JobContext } from "../context/JobContextProvider";
import { FirebaseError } from "firebase/app";
import { generateFirebaseAuthErrorMessage } from "./error";

const useSignUp = () => {
  const { setDark } = useContext(JobContext);

  const signUp = async (email, password, fullname) => {
    try {
      const user = await toast.promise(
        createUserWithEmailAndPassword(auth, email, password),
        {
          loading: "Creating account",
          success: "User succesfully created",
          error: (error) => {
            if (error instanceof FirebaseError) {
              return generateFirebaseAuthErrorMessage(error.code);
            }
          },
        }
      );

      if (user) {
        const id = user.user.uid;

        await setDoc(doc(db, "users", id), {
          id,
          fullname,
          email,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const login = async (email, password) => {
    try {
      const user = await toast.promise(
        signInWithEmailAndPassword(auth, email, password),
        {
          loading: "Logging in....",
          success: "Successully logged in!!",
          error: (error) => {
            if (error instanceof FirebaseError) {
              return generateFirebaseAuthErrorMessage(error.code);
            }
          },
        }
      );
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  const logOut = async () => {
    signOut(auth);
    setDark(false);
  };

  return { signUp, login, logOut };
};

export default useSignUp;
