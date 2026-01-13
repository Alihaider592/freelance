import { motion } from "framer-motion";
import HeroButtons from "../components/searchbar";
import PopularCategory from "../components/populercategory";
import TopFreelancer from "../components/topfreelancer";
import Howitwork from "../components/how_it_work";
import FAQ from "../components/FAQ";
import Footer from "../components/footer";

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <div className="relative w-full h-[70vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.mediabistro.com/wp-content/uploads/2016/06/successful-freelancer-repeat-work_opt.jpg')",
            backgroundPosition: "center 10%",
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-[1216px] mx-auto h-full flex flex-col justify-center px-6">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-2xl"
          >
            Hire Top Talent or <br />
            Get Hired Faster
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-200 text-lg md:text-xl mt-4 max-w-xl"
          >
            Connect with skilled freelancers and trusted clients worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <HeroButtons />
          </motion.div>

        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <PopularCategory />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <TopFreelancer />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Howitwork />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <FAQ />
      </motion.div>

      <Footer />
    </div>
  );
}

export default App;
