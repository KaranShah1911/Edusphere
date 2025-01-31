import { motion } from 'framer-motion';
import { FiLock, FiShield, FiDatabase, FiDollarSign, FiCloud, FiAward } from 'react-icons/fi';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';
import { useThemeStore } from '../store/themeStore';

const HowItWorks = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  
  const features = [
    {
      icon: <FiLock className="w-8 h-8" />,
      title: "Decentralized Ownership",
      content: "Your purchased courses are stored permanently on the blockchain. Even if administrators remove a course, your access remains intact through smart contracts.",
      animation: "https://lottie.host/5603972b-ac23-48b5-84d9-19ac7ed462a3/FIokjQbPsW.lottie",
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Immutable Credentials",
      content: "All certifications and achievements are permanently recorded on-chain, creating tamper-proof academic records recognized globally.",
      animation: "https://lottie.host/c35cafd9-47c8-40d1-b8da-b1ec5f438ce8/BOkx6yNfDC.lottie",
    },
    {
      icon: <FiDatabase className="w-8 h-8" />,
      title: "Blockchain Backend",
      content: "Leveraging Ethereum smart contracts for enrollments and Hyperledger Fabric for secure academic records storage.",
      animation: "https://lottie.host/35b0410c-5260-4043-982f-3abc2d505971/DgMX7iJaVi.lottie",
    }
  ];

  const steps = [
    {
      title: "1. Earn EdusTokens",
      content: "Complete courses and challenges to earn our native EdusTokens (EDU)",
      icon: <FiDollarSign className="w-6 h-6" />
    },
    {
      title: "2. Decentralized Storage",
      content: "Course content secured on IPFS with blockchain-based access control",
      icon: <FiCloud className="w-6 h-6" />
    },
    {
      title: "3. Lifetime Access",
      content: "Your educational achievements permanently stored on-chain",
      icon: <FiAward className="w-6 h-6" />
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 
      "bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100" : 
      "bg-gradient-to-br from-amber-50 to-white text-gray-900"
    }`}>
      {/* Navbar - Same as StudentHome */}
      
      <div className="container mx-auto px-6 py-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"
        >
          How Edusphere Works
        </motion.h1>

        {/* Core Features Section */}
        <div className="space-y-28 mb-28">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-12 even:lg:flex-row-reverse">
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-1"
              >
                <DotLottieReact
                  src={feature.animation}
                  loop
                  autoplay
                  className="w-full h-96"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-1 space-y-6"
              >
                <div className={`inline-flex items-center gap-3 p-4 rounded-xl ${
                  isDarkMode ? "bg-gray-800" : "bg-amber-100"
                }`}>
                  {feature.icon}
                  <h3 className="text-3xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-xl leading-relaxed opacity-90">
                  {feature.content}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Blockchain Architecture Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-28 p-8 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-white"
        >
          <h2 className="text-4xl font-bold mb-8">Blockchain Architecture</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Smart Contracts</h3>
              <p>Course enrollment and token transactions managed through Ethereum smart contracts</p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">IPFS Storage</h3>
              <p>Decentralized content storage with access permissions recorded on-chain</p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Hyperledger Fabric</h3>
              <p>Private blockchain network for secure academic record keeping</p>
            </div>
          </div>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-28">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } shadow-xl`}
            >
              <div className="inline-block p-4 mb-4 rounded-lg bg-amber-500/20 text-amber-500">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="opacity-90">{step.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Unique Selling Points */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-8">Why Choose Edusphere?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`p-8 rounded-2xl ${
              isDarkMode ? "bg-gray-800" : "bg-amber-50"
            }`}>
              <h3 className="text-2xl font-bold mb-4">True Ownership</h3>
              <p>Your courses remain accessible even if removed from the platform, through blockchain-stored access rights</p>
            </div>
            <div className={`p-8 rounded-2xl ${
              isDarkMode ? "bg-gray-800" : "bg-amber-50"
            }`}>
              <h3 className="text-2xl font-bold mb-4">Secure Verification</h3>
              <p>Employers can instantly verify credentials through our blockchain explorer</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer - Same as StudentHome */}
    </div>
  );
};

export default HowItWorks;