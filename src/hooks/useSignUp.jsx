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

const useSignUp = () => {
  const { setDark } = useContext(JobContext);

  const signUp = async (email, password, fullname) => {
    try {
      const user = await toast.promise(
        createUserWithEmailAndPassword(auth, email, password),
        {
          loading: "Creating account",
          success: "User succesfully created",
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
          loading: "Logging in",
          success: "Logged in succcessfully",
        }
      );
      console.log(user);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = async () => {
    signOut(auth);
    setDark(false);
  };

  return { signUp, login, logOut };
};

export default useSignUp;
