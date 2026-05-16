import { motion } from "framer-motion";
import {
  FiEdit3,
  FiUsers,
  FiTrendingUp,
  FiArrowRight,
} from "react-icons/fi";

function Home() {
  return (
    <div className="space-y-20">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-[36px] bg-white border border-slate-200 shadow-sm px-8 lg:px-20 py-24">

        {/* subtle background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50 opacity-80" />

        <div className="relative z-10 text-center max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >

            <span className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 border border-indigo-100 px-5 py-2 rounded-full text-sm font-medium mb-8">
              🚀 Modern Publishing Platform
            </span>

            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight">

              Write freely.
              <br />

              <span className="text-slate-700">
                Share openly.
              </span>

            </h1>

            <p className="text-slate-500 text-lg leading-relaxed mt-8 max-w-3xl mx-auto">
              A clean and professional platform built for creators,
              writers, and publishers who want to share ideas
              beautifully and grow their audience.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap justify-center gap-5 mt-12">

              <button
                onClick={() => window.location.href = "/login"}
                className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-semibold hover:-translate-y-1 hover:bg-slate-800 transition-all duration-300 shadow-lg flex items-center gap-2"
              >
                Start Writing
                <FiArrowRight />
              </button>

              <button
                onClick={() => window.location.href = "/articles"}
                className="border border-slate-300 bg-white text-slate-700 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300"
              >
                Explore Blogs
              </button>

            </div>

          </motion.div>

        </div>

      </section>

      {/* FEATURES */}
      <section>

        {/* HEADING */}
        <div className="text-center mb-16">

          <h2 className="text-4xl lg:text-5xl font-black text-slate-900">
            Why Choose InkFlow?
          </h2>

          <p className="text-slate-500 text-lg mt-5 max-w-2xl mx-auto">
            Everything you need to publish content professionally
            and build your digital presence.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-[28px] border border-slate-200 p-10 shadow-sm hover:shadow-xl transition-all duration-300"
          >

            <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-3xl mb-8">
              <FiEdit3 />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Simple Editor
            </h3>

            <p className="text-slate-600 leading-relaxed">
              Focus on writing without distractions using
              a clean and modern editor experience.
            </p>

          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-[28px] border border-slate-200 p-10 shadow-sm hover:shadow-xl transition-all duration-300"
          >

            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl mb-8">
              <FiUsers />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Community
            </h3>

            <p className="text-slate-600 leading-relaxed">
              Discover writers, connect with readers,
              and grow through a strong creator network.
            </p>

          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-[28px] border border-slate-200 p-10 shadow-sm hover:shadow-xl transition-all duration-300"
          >

            <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-3xl mb-8">
              <FiTrendingUp />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Growth
            </h3>

            <p className="text-slate-600 leading-relaxed">
              Build your presence consistently with
              analytics, engagement, and publishing tools.
            </p>

          </motion.div>

        </div>

      </section>

    </div>
  );
}

export default Home;