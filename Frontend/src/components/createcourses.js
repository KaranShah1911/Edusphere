import React, { useState, useEffect } from 'react';

const CreateCourse = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Loop through 3 images
    }, 3000); // 3 seconds interval

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [isDarkMode]);

  return (
    <div className={`create-course ${isDarkMode ? 'dark-mode' : ''}`}>
      <nav className="navbar">
        <div className="logo">
          <img src="/images/Edusphere logo.png" alt="Edusphere Logo" />
          <span>Edusphere</span>
        </div>
        <div className="nav-links">
          <a href="#">Courses</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? '🌙' : '☀️'}
        </button>
      </nav>

      <div className="container">
        <div className="image-container">
          <div className="image-slider" id="imageSlider"
           style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 1s ease-in-out', // Smooth transition for sliding
          }}
        >
            
            <img src="/images/createcourses.png" alt="Course 1" />
            <img src="/images/createcourses1.png" alt="Course 2" />
            <img src="/images/createcourses2.png" alt="Course 3" />
          </div>
        </div>

        <div className="form-container">
          <h1>Create a New Course</h1>
          <form>
            <div className="form-group">
              <label htmlFor="title">Course Title</label>
              <input type="text" id="title" name="title" placeholder="Enter course title" required />
            </div>

            <div className="form-group">
              <label htmlFor="description">Course Description</label>
              <textarea id="description" name="description" rows="4" placeholder="Enter a brief course description"></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select id="category" name="category">
                <option value="">Select a category</option>
                <option value="technology">Technology</option>
                <option value="business">Business</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="prerequisites">Prerequisites</label>
              <input type="text" id="prerequisites" name="prerequisites" placeholder="Enter prerequisites (if any)" />
            </div>

            <div className="form-group">
              <label htmlFor="tags">Tags</label>
              <input type="text" id="tags" name="tags" placeholder="Enter tags (comma-separated)" />
            </div>

            <div className="form-group">
              <label htmlFor="content">Upload Content</label>
              <input type="file" id="content" name="content" multiple />
            </div>

            <div className="form-group">
              <label htmlFor="level">Course Level</label>
              <select id="level" name="level">
                <option value="">Select course level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="duration">Duration (in hours)</label>
              <input type="number" id="duration" name="duration" placeholder="Enter course duration" />
            </div>

            <div className="form-group">
              <label htmlFor="pricing">Pricing</label>
              <input type="text" id="pricing" name="pricing" placeholder="Enter course price (e.g., Free or $99)" />
            </div>

            <div className="form-footer">
              <button type="submit" className="btn">Publish Course</button>
              <button type="button" className="btn btn-secondary">Save as Draft</button>
            </div>
          </form>
        </div>
      </div>

      <style>
        {`
          :root {
            --bg-light: linear-gradient(135deg, #1a237e, #4a148c, #0d47a1);
            --text-light: #e0e0e0;
            --bg-dark: linear-gradient(135deg, #1d2951, #393e46, #2e3a47);
            --text-dark: #ffffff;
            --primary-light: linear-gradient(135deg, #7e57c2, #673ab7);
            --primary-dark: linear-gradient(135deg, #ff4081, #e040fb);
          }

          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: var(--bg-light);
            color: var(--text-light);
            transition: all 0.3s ease-in-out;
          }

          .create-course.dark-mode {
            background: var(--bg-dark);
            color: var(--text-dark);
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            display: flex;
            gap: 20px;
            align-items: center;
          }

          .form-container {
            flex: 1;
          }

          .image-container {
            flex: 1;
            text-align: center;
            position: relative;
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
            height: 1000px;
          }

          .image-slider {
            position: absolute;
            top: 0;
            left: 0;
            width: 300%;
            height: 100%;
            display: flex;
            object fit: cover;
            transition: transform 1s ease-in-out;
          }

          .image-container img {
            width: 100%;
            height: 100%;
            flex-shrink: 0;
            object-fit: cover;
          }

          h1 {
            text-align: center;
            margin-bottom: 20px;
          }

          form {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
          }

          .form-group {
            margin-bottom: 15px;
          }

          label {
            display: block;
            margin-bottom: 8px;
          }

          input, select, textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 4px;
            font-size: 16px;
            background: rgba(0, 0, 0, 0.2);
            color: inherit;
            transition: border 0.3s ease-in-out;
          }

          input:focus, select:focus, textarea:focus {
            outline: none;
            border-color: #ff4081;
            box-shadow: 0 0 10px rgba(255, 64, 129, 0.8);
          }

          textarea {
            resize: vertical;
          }

          .btn {
            display: inline-block;
            background: var(--primary-light);
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background 0.3s;
          }

          .btn:hover {
            background: var(--primary-dark);
          }

          .btn-secondary {
            background: rgba(255, 255, 255, 0.3);
            color: var(--text-light);
          }

          .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.5);
          }

          .form-footer {
            display: flex;
            justify-content: space-between;
          }

          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            background: rgba(0, 0, 0, 0.8);
            color: var(--text-light);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
            position: sticky;
            top: 0;
            z-index: 1000;
          }

          .navbar .logo {
            display: flex;
            align-items: center;
          }

          .navbar .logo img {
            width: 50px;
            margin-right: 10px;
          }

          .navbar .logo span {
            font-size: 24px;
            font-weight: bold;
            color: #ff4081;
          }

          .navbar .nav-links {
            display: flex;
            align-items: center;
            gap: 20px;
          }

          .navbar .nav-links a {
            text-decoration: none;
            color: var(--text-light);
            font-size: 16px;
            transition: color 0.3s;
          }

          .navbar .nav-links a:hover {
            color: #ff4081;
          }

          .dark-mode-toggle {
            background: transparent;
            border: none;
            font-size: 24px;
            cursor: pointer;
            transition: color 0.3s;
          }

          @media (max-width: 768px) {
            .container {
              flex-direction: column;
            }

            .form-footer {
              flex-direction: column;
              gap: 10px;
            }

            .navbar .nav-links {
              flex-direction: column;
              gap: 10px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CreateCourse;
