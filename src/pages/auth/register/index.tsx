import Input from "../../../components/common/Input";
import { useForm } from "react-hook-form";
import { Mail, Lock, User, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { appPath } from "../../../utils/pathConstant";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "../../../redux/api/authApi";
import { setCredentials } from "../../../redux/features/auth/authSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register, { isLoading }] = useRegisterMutation();

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password");

  const onSubmit = async (data: any) => {
    try {
      const response = await register(data).unwrap();
      dispatch(setCredentials(response));
      navigate(appPath.HOME);
    } catch (err) {
      console.error("Failed to register:", err);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-stretch bg-gray-50 rounded-2xl overflow-hidden shadow-2xl my-8">
      {/* Left Side - Visual */}
      <div className="hidden lg:flex w-[40%] bg-linear-to-br from-green-500 to-emerald-700 p-12 text-white flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full -mr-32 -mb-32 blur-3xl"></div>

        <div className="relative z-10">
          <Link to="/" className="text-2xl font-black tracking-tighter">
            TUFI<span className="text-green-200">STORE</span>
          </Link>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl font-bold leading-tight mb-6">
            Join the community of savvy shoppers.
          </h2>
          <p className="text-green-100 text-lg mb-8 opacity-90">
            Create an account to track your orders, save items to your wishlist, and get exclusive offers.
          </p>

          <ul className="space-y-4">
            {["Fast & secure checkout", "Order tracking", "Exclusive discounts", "24/7 Support"].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-400/30 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span className="text-green-50">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 flex items-center gap-2 text-sm text-green-200">
          <span>Already have an account?</span>
          <Link to={appPath.LOGIN} className="font-bold underline">Sign In</Link>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 p-8 md:p-16 bg-white flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
            <p className="text-gray-500">Sign up to get started with Tufi Store.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              name="name"
              label="Full Name"
              placeholder="John Doe"
              control={control}
              icon={<User size={18} />}
              rules={{ required: "Full name is required" }}
            />

            <Input
              name="email"
              label="Email Address"
              placeholder="name@example.com"
              control={control}
              icon={<Mail size={18} />}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
              type="email"
            />

            <Input
              name="password"
              label="Password"
              placeholder="••••••••"
              control={control}
              icon={<Lock size={18} />}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              }}
              type="password"
            />

            <Input
              name="confirmPassword"
              label="Confirm Password"
              placeholder="••••••••"
              control={control}
              icon={<Lock size={18} />}
              rules={{
                required: "Please confirm your password",
                validate: (value) => value === password || "Passwords do not match",
              }}
              type="password"
            />

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-green-200 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer mt-6 ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {isLoading ? "Joining..." : "Join Now"}
              {!isLoading && <UserPlus size={20} className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>

          <div className="mt-8 text-center pt-8 border-t border-gray-100">
            <p className="text-gray-600">
              Already a member?{" "}
              <Link
                to={appPath.LOGIN}
                className="text-green-600 hover:text-green-700 font-bold hover:underline transition-all"
              >
                Sign in to your account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Register as Component };