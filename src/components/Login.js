import Header from './Header';
import { useState } from 'react';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
        <Header />
        <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5bd3572a-0d1b-4228-aaa7-5b2dc45952b2/web/US-en-20260413-TRIFECTA-perspective_df2c2c74-0abb-42ab-8a3f-f1e4ccceb08e_large.jpg"
          alt="logo"
        />
      </div>
      <form className="absolute flex flex-col p-12 justify-center text-white w-96 my-36, mx-auto bg-black bg-opacity-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg">
        <h1 className="text-3xl font-bold mb-6">{isSignInForm
            ? "Sign In"
            : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <>
          <input type="text" placeholder="First Name" className="p-2 m-2 rounded bg-gray-800 placeholder:text-gray-500" />
          <input type="text" placeholder="Last Name" className="p-2 m-2 rounded bg-gray-800 placeholder:text-gray-500" />
          </>
        )}
        <input type="email" placeholder="Email" className="p-2 m-2 rounded bg-gray-800 placeholder:text-gray-500" />
        <input type="password" placeholder="Password" className="p-2 m-2 rounded bg-gray-800 placeholder:text-gray-500" />
        <button className="p-2 m-2 bg-red-600 rounded">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 mx-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  )
}

export default Login