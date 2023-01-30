import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";

const SignIn = () => {
  const { signIn, resetPassword, googleSignIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [isOnModal, setIsOnModal] = useState(true);

  const handleLogin = (data) => {
    const email = data.email;
    const password = data.password;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        toast.success(
          `Login successfully. Congratulations ${user.displayName}.`
        );
      })
      .catch((err) => {
        toast.error(err.message.slice(22, err?.message?.length - 2));
      });
  };

  const handleResetPassword = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    resetPassword(email)
      .then(() => {
        navigate("/billings");
        toast.success("Password reset successfully. Please check your email.");
        setIsOnModal(false);
      })
      .catch((err) => console.error(err));
  };

  const googleSignHandler = () => {
    googleSignIn()
      .then((result) => {
        navigate("/billings");
        toast.success("Successfully Sign Up!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {/* <img src={logo} className="w-32 mx-auto" alt="" /> */}
      <div className="border w-96 mx-auto p-5 my-16 rounded-lg">
        <h2 className="text-3xl text-center mb-7 mt-2 text-primary">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <label htmlFor="email" className="text-slate-800">
            Email
          </label>
          {errors?.email && (
            <small className="text-red-500 ml-3">
              * {errors?.email?.message}
            </small>
          )}
          <input
            {...register("email", { required: "Please fil the input field" })}
            type="email"
            id="email"
            className="w-full input input-bordered my-4 text-slate-800 border-slate-300"
            placeholder="Email"
          />

          <label htmlFor="password" className="text-slate-800">
            Password
          </label>
          {errors?.password && (
            <small className="text-red-500 ml-3">
              *{errors?.password?.message}
            </small>
          )}
          <input
            {...register("password", {
              required: "Please fil the password field",
            })}
            type="password"
            id="password"
            className="w-full input input-bordered my-4 text-slate-800 border-slate-300"
            placeholder="Password"
          />

          <label
            htmlFor="resetPassword-Modal"
            className="cursor-pointer text-slate-800"
          >
            Forget password?
          </label>
          <input
            type="submit"
            value="Login"
            className="block btn btn-primary mx-auto my-5"
          />
        </form>
        <p className="text-slate-800">
          Don't have an account?{" "}
          <Link className="text-primary font-semibold" to="/signup">
            Create an account
          </Link>
        </p>
        <button
          onClick={googleSignHandler}
          className="btn btn-outline btn-primary w-full mt-3 mb-5"
        >
          <FcGoogle className="text-2xl mr-2" /> Sign in With Google
        </button>
      </div>

      {isOnModal && (
        <>
          <input
            type="checkbox"
            id="resetPassword-Modal"
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="resetPassword-Modal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold text-slate-800">Reset your password</h3>
              <form onSubmit={handleResetPassword}>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full my-3 border-slate-300 text-slate-800"
                  placeholder="Enter your email"
                  required
                />
                <input
                  type="submit"
                  value="Reset"
                  className="btn flex btn-primary mx-auto"
                />
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SignIn;
