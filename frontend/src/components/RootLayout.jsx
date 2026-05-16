import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { useEffect } from "react";
import { useAuth } from "../store/AuthStore";

function RootLayout() {

  const checkAuth = useAuth((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-indigo-50">

      <Header />

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-8">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}

export default RootLayout;