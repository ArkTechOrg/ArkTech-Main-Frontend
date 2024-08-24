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
          className="text-center text-white font-semibold leading-tight
                      sm:text-3xl sm:leading-[40px]
                      md:text-4xl md:leading-[50px]
                      lg:text-5xl lg:leading-[60px]
                      xl:text-6xl xl:leading-[70px]"
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
