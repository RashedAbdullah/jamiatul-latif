import { TiThMenu } from "react-icons/ti";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = ({ onOpenMenu, openMenu }) => {
  return (
    <div>
      <div className="block lg:hidden mr-5 text-2xl">
        <button
          onClick={onOpenMenu}
          className="relative flex items-center justify-center w-12 h-12 bg-green-500 rounded-full"
        >
          <AnimatePresence initial={false} mode="wait">
            {openMenu ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
                className="absolute"
              >
                <MdClose color="white" size={28} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
                className="absolute"
              >
                <TiThMenu color="white" size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
