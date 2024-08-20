import { LampContainer } from "../components/ui/lamp";
import { motion } from "framer-motion";
import glowing_penguin from "../assets/images/glowing_penguin.svg";

const Home = () => {
  return (
    <div>
      <div className="relative min-h-screen overflow-hidden">
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
                      sm:text-3xl sm:leading-[40px]
                      md:text-4xl md:leading-[50px]
                      lg:text-5xl lg:leading-[60px]
                      xl:text-6xl xl:leading-[70px]"
          >
            We appreciate your patience but<br />something really cool is coming soon!
          </motion.h1>
        </LampContainer>
        <img src={glowing_penguin}
          alt="Glowing Penguin"
          className="absolute right-0 bottom-[-3%]"
        />
      </div>
    </div>
  );
};

export default Home;