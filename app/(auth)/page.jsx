"use client";

import { auth, provider } from "@/config/firebase-config"; // Use absolute imports
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation"; // Correct navigation method
import useGetUserInfo from "@/hooks/useGetUserInfo";

const Auth = () => {
  const router = useRouter(); // Next.js Router
  const { isAuth } = useGetUserInfo(); // Custom hook for auth state

  const GoogleSignin = async () => {
    try {
      const results = await signInWithPopup(auth, provider);
      console.log(results);
      const authInfo = {
        userID: results.user.uid,
        name: results.user.displayName,
        profilePhoto: results.user.photoURL,
        isAuth: true,
      };
      localStorage.setItem("auth", JSON.stringify(authInfo));
      router.push("/expense-tracker"); // Navigate correctly in Next.js
    } catch (error) {
      console.error("Google Sign-in Error:", error);
    }
  };

  // Redirect authenticated users immediately
  if (isAuth) {
    router.push("/expense-tracker");
    return null; // Prevent rendering UI
  }

  return (
    <div>
      <p className="bg-red-500">Sign in with Google to continue</p>
      <button onClick={GoogleSignin}>Sign In With Google</button>
    </div>
  );
};

export default Auth;
