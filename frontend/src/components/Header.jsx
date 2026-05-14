import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../store/AuthStore";

function Header() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const user = useAuth((state) => state.currentUser);
  const logout = useAuth((state) => state.logout);

  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  // profile route based on role
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
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="text-2xl font-bold tracking-tight cursor-pointer text-gray-900"
        >
          InkFlow
        </div>

        {/* NAVIGATION */}
        <div className="flex items-center gap-6">

          <NavLink
            to="/"
            className="text-sm font-medium text-gray-600 hover:text-black transition"
          >
            Home
          </NavLink>

          {isAuthenticated && (
            <NavLink
              to={getProfilePath()}
              className="text-sm font-medium text-gray-600 hover:text-black transition"
            >
              Dashboard
            </NavLink>
          )}

          {/* USER INFO */}
          {isAuthenticated && user && (
            <div
              onClick={() => navigate(getProfilePath())}
              className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-full cursor-pointer hover:bg-gray-200 transition"
            >

              {/* PROFILE IMAGE */}
              {user.profileImageUrl ? (
                <img
                  src={user.profileImageUrl}
                  alt="profile"
                  className="w-9 h-9 rounded-full object-cover border"
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center text-sm font-semibold">
                  {user.firstName?.charAt(0)?.toUpperCase()}
                </div>
              )}

              {/* USER NAME */}
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-xs text-gray-500">
                  Hi,
                </span>

                <span className="text-sm font-semibold text-gray-800">
                  {user.firstName}
                </span>
              </div>
            </div>
          )}

          {/* AUTH BUTTONS */}
          {!isAuthenticated ? (
            <>
              <NavLink
                to="/login"
                className="text-sm font-medium text-gray-600 hover:text-black transition"
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="bg-black text-white px-5 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
              >
                Get Started
              </NavLink>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="text-sm font-medium text-red-500 hover:text-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;