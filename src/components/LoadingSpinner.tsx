import { motion } from 'framer-motion';
import { Logo } from './Logo';

export const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-background via-primary/10 to-background"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo with pulse effect */}
        <div className="relative mb-8">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-primary/20 blur-xl rounded-full"
          />
          <Logo />
        </div>

        {/* Loading spinner */}
        <div className="relative w-24 h-24 mb-8">
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 border-4 border-primary/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          {/* Inner ring */}
          <motion.div
            className="absolute inset-2 border-4 border-primary/40 rounded-full"
            animate={{ rotate: -360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          {/* Center dot */}
          <motion.div
            className="absolute inset-1/3 bg-primary/60 rounded-full"
            animate={{
              scale: [1, 0.8, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Loading text */}
        <div className="text-center">
          <motion.div
            className="flex items-center space-x-1 mb-2"
            animate={{
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-xl font-medium text-text">Loading</span>
            <motion.span
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0
              }}
              className="text-xl text-primary"
            >
              .
            </motion.span>
            <motion.span
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="text-xl text-primary"
            >
              .
            </motion.span>
            <motion.span
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="text-xl text-primary"
            >
              .
            </motion.span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-text/60"
          >
            Preparing your experience
          </motion.p>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-sm text-text/40">
          © {new Date().getFullYear()} Zein Alamah
        </p>
      </motion.div>
    </div>
  );
};