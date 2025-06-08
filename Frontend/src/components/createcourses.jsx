import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from 'framer-motion';
import { FiUploadCloud, FiCopy, FiBook , FiUser } from 'react-icons/fi';
import { Tooltip } from 'react-tooltip';
import { useThemeStore } from '../store/themeStore';
import { useWallet } from "../context/WalletProvider";
import axios from 'axios';
import { contractAbi, contractAddress } from "../utils/constants";
import { useWriteContract, useAccount } from 'wagmi'
import {CourseContext, CourseProvider} from "./context1"
import { toast , ToastContainer} from "react-toastify"

const CreateCourse = () => {

  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const setIsDarkMode = useThemeStore((state) => state.setIsDarkMode);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme, setTheme } = useTheme();
  const { walletAddress, walletConnected, connectWallet } = useWallet();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [videoFiles, setVideoFiles] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    pricing: '',
    category: []
  });
  const { writeContract, writeContractAsync } = useWriteContract()
  const { address } = useAccount()
  
  const dropdownRef = useRef(null);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };



  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const handleWalletClick = () => {
    console.log("Wallet Address:", walletAddress);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    alert("Wallet address copied to clipboard!");
  };

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Loop through 3 images
    }, 3000); // 3 seconds interval

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [isDarkMode]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handleVideoUpload = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 2) {
      alert('You can only upload a maximum of 2 video files.');
      event.target.value = '';
    } else {
      setVideoFiles(files);
    }
  };

  const uploadFileToPinata = async (file) => {
    const pinataFormData = new FormData(); // Renamed to avoid conflict
    pinataFormData.append('file', file);

    const metadata = {
      name: formData.title,
      keyvalues: {
        description: formData.description,
        pricing: formData.pricing,
        fileType: file.type
      },
    };

    pinataFormData.append('pinataMetadata', JSON.stringify(metadata));
    pinataFormData.append('pinataOptions', JSON.stringify({ cidVersion: 0 }));

    try {
      console.log(import.meta.env.VITE_PINATA_API_KEY);
      console.log(import.meta.env.VITE_PINATA_API_SECRET);
      const res = await axios.post(
        'https://api.pinata.cloud/pinning/pinFileToIPFS',
        pinataFormData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'pinata_api_key': import.meta.env.VITE_PINATA_API_KEY,
            'pinata_secret_api_key': import.meta.env.VITE_PINATA_API_SECRET
          }
        }
      );
      return res.data.IpfsHash;
    } catch (error) {
      console.error('Error uploading file to Pinata:', error.response ? error.response.data : error.message);
      throw error;
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const uploadedFiles = {
        image: null,
        videos: []
      };

      // Upload image if exists
      if (imageFile) {
        uploadedFiles.image = await uploadFileToPinata(imageFile);
      }

      // Upload videos if exist
      for (const videoFile of videoFiles) {
        const videoHash = await uploadFileToPinata(videoFile);
        uploadedFiles.videos.push(videoHash);
      }
      console.log('Course published successfully!');

      // Create course metadata with file references
      const courseMetadata = {
        ...formData,
        thumbnail: uploadedFiles.image,
        videoUrls: uploadedFiles.videos,
      };

      console.log(courseMetadata)

      const courseData = {
          title: courseMetadata.title,
          description: courseMetadata.description,
          price: Number(courseMetadata.pricing),
          category: courseMetadata.category.split(','),
          image_hash: courseMetadata.thumbnail,
          video_hash: courseMetadata.videoUrls,
      };

      console.log(courseData)
      try {
        const cookie = document.cookie.split("; ").find(row => row.startsWith("admin="));
        if (!cookie) throw new Error("Admin is not logged in");
        const token = cookie.split("=")[1];
        console.log("Token:", token);

        const response = await axios.post("http://localhost:3000/courses", courseData , {
          headers: {
            "Content-Type" : 'application/json',
            "Authorization" : `Bearer ${token}`,
          }
        });

        if (response.status === 200) {
          // let wei_pricing = response.data.course.course_price * 1e18; 
          writeContract({
            abi: contractAbi,
            address: contractAddress,
            functionName: 'addCourse',
            value: 10000000000000000n
          });
          
          toast.success(response.data.message);
          console.log(response.data.message);
          console.log(response.data);

          try {
            const cookie = document.cookie.split("; ").find(row => row.startsWith("admin="));
            if (!cookie) throw new Error("Admin is not logged in");
            const token = cookie.split("=")[1];
            console.log("Token:", token);

            const course_id = response.data.course._id;
            const response1 = await axios.post('http://localhost:3000/admin/add-course', {
              course_id: course_id,
            }, {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              },
            });

            if (response1.status === 200) {
              toast.success(response1.data.message);
            } else {
              toast.error(response1.data.error);
            }
          } catch (error) {
            toast.error(error.message);
          }
        } else {
          toast.error(response.data.error);
        }
      } catch (error) {
        toast.error('Error submitting course data:', error);
        // alert('Failed to create the course. Please try again.');
      }

      // Reset form
      setFormData({
        title: '',
        description: '',
        pricing: '',
        category: ''
      });
      setImageFile(null);
      setVideoFiles([]);

      // Reset file inputs
      document.getElementById('image').value = '';
      document.getElementById('videos').value = '';

    } catch (error) {
      console.error('Error publishing course:', error);
      // alert('Failed to publish the course. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const formVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  };


  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? "light" : "dark");
  };

  // State for file upload
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setSelectedFiles([...selectedFiles, ...files]);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      setImageFile(files[0]); // Take only the first file
    }
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };



  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`min-h-screen ${isDarkMode ?
        "bg-gray-900 text-gray-100" :
        "bg-gradient-to-br from-amber-50 to-white text-gray-800"}`}
    >
      {/* Enhanced Navigation */}
      {/* Navbar Section */}
      <nav className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <img
            src="/images/Edusphere logo.png"
            alt="Logo"
            className="w-12 h-12 rounded-full shadow-lg"
          />

          <h1 className="text-4xl font-bold ">Edusphere</h1>
        </div>
        <div className="flex items-center space-x-8">
          <div className="flex space-x-8">
            <Link
              to="/educatorhome"
              className="group relative text-lg font-medium hover:text-amber-500 transition-colors"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/createcourses"
              className="group relative text-lg font-medium hover:text-amber-500 transition-colors"
            >
              Create Courses
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
          </div>

          {/* Wallet Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full ${walletConnected ?
              'bg-emerald-500/20 text-emerald-400' :
              'bg-amber-500 hover:bg-amber-600 text-white'
              } transition-colors`}
            onClick={walletConnected ? handleWalletClick : connectWallet}
          >
            {walletConnected ? (
              <>
                <span className="hidden sm:inline">
                  {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                </span>
                <FiCopy
                  className="hover:text-amber-400 transition-colors"
                  onClick={copyToClipboard}
                  data-tooltip-id="copy-tooltip"
                />
              </>
            ) : (
              <>
                <span>Connect Wallet</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1.323l3.954.99a1 1 0 01.686.828L15.667 8H17a1 1 0 110 2h-1.333l-.012.082a5 5 0 01-4.245 4.245L11 14.667V17a1 1 0 11-2 0v-2.333l-.082-.012a5 5 0 01-4.245-4.245L4.333 10H3a1 1 0 110-2h1.333l.027-.86a1 1 0 01.686-.827L9 4.323V3a1 1 0 011-1z" />
                </svg>
              </>
            )}
          </motion.button>

          {/* Theme toggle */}
          <button className="dark-mode-toggle text-3xl" onClick={toggleTheme}>
            {isDarkMode ? "🌙" : "☀️"}
          </button>

          {/* Dropdown Menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className={`text-lg bg-gradient-to-r from-amber-500 to-amber-300 text-black py-2 px-4 rounded-full ${walletAddress ? "" : "cursor-not-allowed opacity-50"
                }`}
              disabled={!walletAddress}
            >
              ☰
            </button>
            <AnimatePresence>
              {dropdownOpen && walletAddress && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`absolute right-0 mt-2 w-64 origin-top-right rounded-xl shadow-xl backdrop-blur-lg ${isDarkMode
                    ? "bg-gray-800/95 border border-gray-700"
                    : "bg-white/95 border border-amber-100"
                    } z-50`}
                >
                  <div className="p-2 space-y-1">
                    <Link
                      to={walletAddress ? "/signup" : "#"}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${walletAddress
                        ? "hover:bg-amber-500/10"
                        : "opacity-50 cursor-not-allowed"
                        }`}
                    >
                      <FiUser className="text-amber-500" />
                      <span>Add Details</span>
                    </Link>
                    
                    
                    <Link
                      to="/managecourses"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-amber-500/10 transition-colors"
                    >
                      <FiBook className="text-amber-500" />
                      <span>Manage Courses</span>
                    </Link>
                    
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
      <div className="border-b-4 border-gold"></div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 py-12"
      >
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Carousel */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <AnimatePresence mode='wait'>
              <motion.img
                key={currentIndex}
                src={`/images/createcourses${currentIndex + 1}.png`}
                alt={`Course ${currentIndex + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Carousel Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ?
                    'bg-amber-400 w-6' :
                    'bg-white/50 hover:bg-white/80'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Course Creation Form */}
          <motion.form
            variants={formVariants}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border dark:border-gray-700"
            onSubmit={handleFormSubmit}
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Create New Course
            </h2>

            <div className="space-y-6">
              {/* Form Fields */}
        

              <div className="relative">
                <label className="block text-sm font-medium mb-2">
                  Title
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="tilte"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full pl-0 pr-4 py-3 bg-transparent border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none transition-all"
                    placeholder="e.g Web Development"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <div className="relative">
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full pl-0 pr-4 py-3 bg-transparent border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none transition-all"
                    placeholder="e.g This course will teach you how to..."
                  />
                </div>
              </div>

              {/*  Price Field */}
              <div className="relative">
                <label className="block text-sm font-medium mb-2">
                  Pricing
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="pricing"
                    name="pricing"
                    value={formData.pricing}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 bg-transparent border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none transition-all"
                    placeholder="eg 0.1 ETH"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">EDU</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium mb-2">
                  Category
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full pl-0 pr-4 py-3 bg-transparent border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none transition-all"
                    placeholder="e.g IT, Business, Marketing"
                  />

                </div>
              </div>

              {/* File Upload */}

              <div className="space-y-2">
                <label className="block text-sm font-medium">Course Thumbnail</label>
                <motion.label
                  whileHover={{ scale: 1.02 }}
                  htmlFor="image"
                  className="group border-2 border-dashed dark:border-gray-700 rounded-xl p-8 text-center cursor-pointer transition-colors hover:border-amber-400 hover:bg-amber-50/20 block"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  <FiUploadCloud className="mx-auto w-8 h-8 text-gray-400 mb-4 group-hover:text-amber-400" />
                  <p className="text-gray-500 group-hover:text-amber-400">
                    Drag & drop an image or{" "}
                    <span className="text-amber-500 font-medium">click to upload</span>
                  </p>
                </motion.label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />

                {/* Display selected files */}
                {imageFile && (
                  <div className="mt-4">
                    <h3 className="text-sm font-medium">Selected Image:</h3>
                    <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
                      {imageFile.name}
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Course Video</label>
                <motion.label
                  whileHover={{ scale: 1.02 }}
                  htmlFor="video"
                  className="group border-2 border-dashed dark:border-gray-700 rounded-xl p-8 text-center cursor-pointer transition-colors hover:border-amber-400 hover:bg-amber-50/20 block"

                >
                  <FiUploadCloud className="mx-auto w-8 h-8 text-gray-400 mb-4 group-hover:text-amber-400" />
                  <p className="text-gray-500 group-hover:text-amber-400">
                    Drag & drop a video or{" "}
                    <span className="text-amber-500 font-medium">click to upload</span>
                  </p>
                </motion.label>
                <input
                  type="file"
                  id="video"
                  name="video"
                  accept="video/*"
                  className="hidden"
                  onChange={handleVideoUpload}
                  multiple
                />
                {videoFiles.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm font-medium">Uploaded Videos:</p>
                    <ul className="list-disc list-inside">
                      {videoFiles.map((file, index) => (
                        <li key={index} className="text-gray-500">
                          {file.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Form Actions */}
              <div className="flex flex-col gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-medium rounded-lg hover:shadow-lg transition-all"
                  type="submit"
                >
                  Publish Course
                </motion.button>
              </div>
            </div>
          </motion.form>
        </div>
      </motion.div>

      {/* Tooltips */}
      <Tooltip id="copy-tooltip" place="bottom" content="Copy Address" />
    </motion.div>
  );
};

// Reusable Form Field Component
const FormField = ({ label, id, type = 'text', placeholder, required }) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block text-sm font-medium">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {type === 'textarea' ? (
      <textarea
        id={id}
        rows="4"
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-transparent border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none transition-all"
        required={required}
      />
    ) : (
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-transparent border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none transition-all"
        required={required}
      />
    )}
  </div>
);

// Reusable NavLink Component
const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-600 dark:text-gray-300 hover:text-amber-500 px-3 py-2 rounded-lg transition-colors font-medium relative group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full" />
  </Link>
);

export default CreateCourse;