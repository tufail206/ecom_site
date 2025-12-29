import Input from "../../../components/common/Input";
import { useForm } from "react-hook-form";
import { Mail, Lock, LogIn, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { appPath } from "../../../utils/pathConstant";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../../redux/api/authApi";
import { setCredentials } from "../../../redux/features/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: { email: string; password:string }) => {
    try {
      console.log("data", data);
      const response = await login(data).unwrap();
      dispatch(setCredentials(response));
      navigate(appPath.HOME);
    } catch (err) {
      console.error("Failed to login:", err);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-stretch bg-gray-50 rounded-2xl overflow-hidden shadow-2xl my-8">
      {/* Left Side - Form */}
      <div className="flex-1 p-8 md:p-16 bg-white flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
            <p className="text-gray-500">Please enter your details to sign in.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

            <div className="flex items-center justify-between text-sm mb-6">
              <label className="flex items-center text-gray-600 cursor-pointer">
                <input type="checkbox" className="mr-2 rounded border-gray-300 text-green-600 focus:ring-green-500" />
                Remember me
              </label>
              <Link
                to={appPath.FORGOT_PASSWORD}
                className="text-green-600 hover:text-green-700 font-medium transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-green-200 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {isLoading ? "Signing in..." : "Sign In"}
              {!isLoading && <LogIn size={20} className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>

          <div className="mt-8 text-center pt-8 border-t border-gray-100">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link
                to={appPath.REGISTER}
                className="text-green-600 hover:text-green-700 font-bold hover:underline transition-all"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden lg:flex w-[40%] bg-linear-to-br from-green-500 to-emerald-700 p-12 text-white flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

        <div className="relative z-10">
          <Link to="/" className="text-2xl font-black tracking-tighter">
            TUFI<span className="text-green-200">STORE</span>
          </Link>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl font-bold leading-tight mb-6">
            Discover the best deals on premium products.
          </h2>
          <p className="text-green-100 text-lg mb-8 opacity-90">
            Join thousands of satisfied customers and start your shopping journey with us today.
          </p>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-green-500 bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-green-50">Join +10k regular customers</p>
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-2 text-sm text-green-200">
          <span>Explore our collection</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
};

export { Login as Component };