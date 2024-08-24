import { LampContainer } from "../components/ui/lamp";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden font-outfit">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center text-white font-semibold font-manrope leading-tight
                      text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          We appreciate your patience but
          <br />
          something really cool is coming soon!
        </motion.h1>
      </LampContainer>
      <div className="absolute bottom-4 right-4 text-white text-xs opacity-70">
        © ArkTech
      </div>
    </div>
  );
};

export default Home;
