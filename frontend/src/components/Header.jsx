import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../store/AuthStore";
import { FiLogOut } from "react-icons/fi";
import logo from "../assets/logo.png";

function Header() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const user = useAuth((state) => state.currentUser);
  const logout = useAuth((state) => state.logout);

  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const getProfilePath = () => {
    if (!user) return "/";

    switch (user.role) {
      case "AUTHOR":
        return "/author-profile";

      case "ADMIN":
        return "/admin-profile";

      default:
        return "/user-profile";
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-lg shadow-sm">

      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">

        <div className="h-20 flex items-center justify-between">

          {/* LEFT */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-4 cursor-pointer"
          >

            <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white shadow-md border border-slate-200">
              <img
                src={logo}
                alt="InkFlow Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                InkFlow
              </h1>

              <p className="text-sm text-slate-500 -mt-1">
                Write • Publish • Inspire
              </p>
            </div>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-slate-900 text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              Home
            </NavLink>

            {isAuthenticated && (
              <NavLink
                to={getProfilePath()}
                className={({ isActive }) =>
                  `px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md"
                      : "text-slate-600 hover:bg-slate-100"
                  }`
                }
              >
                Dashboard
              </NavLink>
            )}

            {/* PROFILE */}
            {isAuthenticated && user && (

              <div
                onClick={() => navigate(getProfilePath())}
                className="flex items-center gap-3 bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 rounded-2xl px-4 py-2 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
              >

                {user.profileImageUrl ? (
                  <img
                    src={user.profileImageUrl}
                    alt="profile"
                    className="w-11 h-11 rounded-xl object-cover border"
                  />
                ) : (
                  <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center font-semibold">
                    {user.firstName?.charAt(0)}
                  </div>
                )}

                <div className="hidden sm:flex flex-col leading-tight">

                  <span className="text-xs text-slate-400">
                    Logged in as
                  </span>

                  <span className="text-sm font-semibold text-slate-800">
                    {user.firstName}
                  </span>

                  <span className="text-xs uppercase tracking-wide text-indigo-600 font-bold">
                    {user.role}
                  </span>

                </div>

              </div>
            )}

            {/* LOGIN / LOGOUT */}
            {!isAuthenticated ? (
              <div className="flex items-center gap-3">

                <NavLink
                  to="/login"
                  className="text-sm font-semibold text-slate-600 hover:text-black transition"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/register"
                  className="bg-gradient-to-r from-slate-900 to-slate-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md hover:scale-105 transition-all duration-300"
                >
                  Get Started
                </NavLink>

              </div>
            ) : (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-red-500 hover:bg-red-50 transition-all duration-300 font-semibold"
              >
                <FiLogOut />
                Logout
              </button>
            )}

          </div>

        </div>

      </div>

    </header>
  );
}

export default Header;