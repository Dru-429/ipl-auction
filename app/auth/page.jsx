"use client";

import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation"; // Correct navigation method
import { auth, provider } from "../config/firebase-config";

const useGetUserInfo = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    profilePhoto: "",
    userID: "",
    isAuth: false,
  });

  useEffect(() => {
    if (typeof window !== "undefined") { // Ensure it's running on the client
      try {
        const storedData = JSON.parse(localStorage.getItem("auth"));
        if (storedData) {
          setUserInfo(storedData);
        }
      } catch (error) {
        console.error("Error parsing auth data:", error);
      }
    }
  }, []);

  return userInfo;
};

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
      router.push("/home"); // Navigate correctly in Next.js
    } catch (error) {
      throw new Error("Google Sign-in failed");
    }
  };

  // Redirect authenticated users immediately
  if (isAuth) {
    router.push("/home");
    return null; // Prevent rendering UI
  }

  return (
    <div>
      <p className="bg-red-500 w-screen h-full">
        Sign in with Google to continue
      </p>
      <button 
        onClick={GoogleSignin}
      >
        Sign In With Google
      </button>
    </div>
  );
};

export default Auth;
