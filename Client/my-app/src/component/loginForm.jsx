import { Link } from "react-router-dom";
import { LuEyeClosed } from "react-icons/lu";
const LoginForm = () => {
  return (
    <>
    <div className="flex justify-start  px-10 space-x-6  font-semibold text-gray-700  text-2xl">
            <Link  to={"/auth/login"}> Login </Link>
            <Link to={"/auth/signup"}> Sign up </Link>
          </div>
      <div className=" flex flex-col  p-8 rounded-lg  w-[90%] ">
        <div className="mb-5">
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="text"
            placeholder="Enter your email address or username"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-600 mb-1">Password</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
            >
              <LuEyeClosed />{" "}
            </button>
          </div>
          <Link href="#" className="text-blue-500 text-sm float-right mt-3">
            Forgot password
          </Link>
        </div>
        <p className="text-xs text-gray-500 text-center mb-5 mt-4">
          By clicking Log in, you accept Quizlet's{" "}
          <Link href="#" className="text-blue-500">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-blue-500">
            Privacy Policy
          </Link>
        </p>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
          Log in
        </button>
        <div className="mt-4 text-center">
          <Link href="#" className="text-gray-600">
            New to Quizlet?{" "}
            <span className="text-blue-500">Create an account</span>
          </Link>
        </div>
        <div className="mt-4 text-center">
          <Link href="#" className="text-blue-500">
            Log in with magic link
          </Link>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
