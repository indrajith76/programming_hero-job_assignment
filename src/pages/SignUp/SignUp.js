import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser, updateUserProfile, googleSignIn } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleSignUp = (data) => {
    const { name, email, password } = data;
    createUser(email, password)
      .then((result) => {
        updateUser(name);
        navigate("/billings");
        toast.success("Successfully Sign Up!");
      })
      .catch((err) => {
        toast.error(err.message.slice(22, err?.message?.length - 2));
      });
  };

  const updateUser = (name) => {
    updateUserProfile({ displayName: name })
      .then(() => {})
      .catch((err) => console.log(err));
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
      <div className="border w-96 mx-auto p-5 my-16 rounded-lg">
        <h2 className="text-3xl text-center mb-7 mt-2 text-primary">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <label className="text-slate-800" htmlFor="name">
            Name
          </label>
          {errors?.name && (
            <small className="text-red-500 ml-3">
              * {errors?.name?.message}
            </small>
          )}
          <input
            {...register("name", { required: "Please fil the name field" })}
            type="text"
            id="name"
            className="w-full input input-bordered my-4 border-slate-300 text-slate-800"
            placeholder="Name"
          />
          <label className="text-slate-800" htmlFor="email">
            Email
          </label>
          {errors?.email && (
            <small className="text-red-500 ml-3">
              * {errors?.email?.message}
            </small>
          )}
          <input
            {...register("email", { required: "Please fil the email field" })}
            type="email"
            id="email"
            className="w-full input input-bordered my-4 border-slate-300 text-slate-800"
            placeholder="Email"
          />
          <label htmlFor="password" className="text-slate-800">
            Password
          </label>
          {errors?.password && (
            <small className="text-red-500 ml-3">
              * {errors?.password?.message}
            </small>
          )}
          <input
            {...register("password", {
              required: "Please fil the password field",
              minLength: {
                value: 6,
                message: "Password should have at least 6 character",
              },
            })}
            type="password"
            id="password"
            className="w-full input input-bordered my-4 border-slate-300 text-slate-800"
            placeholder="Password"
          />
          <input
            type="submit"
            value="Sign Up"
            className="block btn btn-primary mx-auto my-5"
          />
        </form>
        <p className="text-slate-800">
          Have an account?{" "}
          <Link className="text-primary font-semibold" to="/signin">
            Please Login
          </Link>
        </p>
        <button
          onClick={googleSignHandler}
          className="btn btn-outline btn-primary w-full mt-3 mb-5"
        >
          <FcGoogle className="text-2xl mr-2" /> Sign up With Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
