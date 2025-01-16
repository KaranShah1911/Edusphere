import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Sample course data
const courses = [
  {
    name: "Python For Beginners Course In-Depth",
    category: "IT & Software",
    image: "https://img-c.udemycdn.com/course/480x270/3495852_8004.jpg",
    actual_price_usd: 19.99,
    sale_price_usd: 19.99,
    sale_end: "2025-01-10T14:20:00",
    description: "Python For Beginners Course In-Depth, This course is a depth introduction to both fundamental python programming concepts and the Python programming language.",
    url: "https://www.udemy.com/course/python-for-beginners-course-in-depth/?couponCode=20A74E86411E0A67A146",
    clean_url: "https://www.udemy.com/course/python-for-beginners-course-in-depth/"
  },
  {
    name: "100% OFF- Python And Flask Framework Complete Course",
    category: "Flask",
    image: "https://img-c.udemycdn.com/course/480x270/3407178_5bd8_3.jpg",
    actual_price_usd: 24.99,
    sale_price_usd: 24.99,
    sale_end: "2025-01-11T02:46:00",
    description: "Python And Flask Framework Complete Course, Depth Introduction To Python Programming And Python Web framework Flask.",
    url: "https://www.udemy.com/course/flask-framework-complete-course-for-beginners/?couponCode=2FA8E12A82CA9E38B840",
    clean_url: "https://www.udemy.com/course/flask-framework-complete-course-for-beginners/"
  },
  {
    name: "HTML 5 With Quizzes And Python 3 Complete Course 2023",
    category: "IT & Software",
    image: "https://img-c.udemycdn.com/course/480x270/5009916_fc64.jpg",
    actual_price_usd: 74.99,
    sale_price_usd: 74.99,
    sale_end: "2025-01-14T02:31:00",
    description: "Learn HTML5 With HTML 5 Quizzes And Python 3 From the Beginning in HTML 5 And Python Complete Course 2023 we’ve created thorough, extensive, but easy-to-follow Hours of content that you’ll easily understand and absorb.The course starts with the basics of HTML5, Python fundamentals, programming, and user interaction in full stack courseThe curriculum is going to be very hands-on as we walk you from start to finish to become a professional HTML 5, Python developer. We will start from the very beginning by teaching you HTML 5 Basics then Python basics and programming fundamentals, and then going into advanced topics and different career fields in Python so you can get real-life practice and be ready for the real world. The topics covered in this course are: * Brief Introduction To HTML 5 And HTML 5 Quizzes HTML Basic Tags HTML List Tags HTML Attributes HTML Forms HTML SVG HTML Blocks * Beginner to Expert Python contents: The course teaches you the essential concepts of Python programming, and gives you an in-depth knowledge in data analytics, machine learning, data visualization, web scraping, and natural language processing. You will master the essential concepts of data types, tuples, lists, dicts, basic operators, and functions Array implementation File methods Keywords and Identifiers Python Tuples Python Basics Python Fundamentals Data Structures Object-Oriented Programming with Python Functional Programming with Python Lambdas Decorators Generators Testing in Python Debugging Error Handling Regular Expressions Comprehensions Modules Thank you, See you inside the course.",
    url: "https://www.udemy.com/course/html-5-with-quizzes-and-python-3-complete-course-2023/?couponCode=F20BD8C3C7516F1CC0AF",
    clean_url: "https://www.udemy.com/course/html-5-with-quizzes-and-python-3-complete-course-2023/"
  },
  {
    name: "Master the Machine Muse Build Generative AI with ML",
    category: "Data Science",
    image: "https://img-c.udemycdn.com/course/480x270/6085251_5113_6.jpg",
    actual_price_usd: 74.99,
    sale_price_usd: 74.99,
    sale_end: "2025-01-10T18:00:00",
    description: "Unlock the creative potential of artificial intelligence with “Master the Machine Muse: Build Generative AI with ML.” This comprehensive course takes you on an exciting journey into the world of generative AI, blending the art of machine learning with the science of creativity. Whether you’re an aspiring data scientist, a tech enthusiast, or a creative professional looking to harness the power of AI, this course will provide you with the skills and knowledge to build and deploy your generative models. Course Highlights: – Introduction to Generative AI: Understand the fundamentals of generative AI and its applications across various domains such as art, music, text, and design. – Foundations of Machine Learning: Learn the core concepts of machine learning, including supervised and unsupervised learning, and how they apply to generative models. – Deep Learning for Creativity: Dive deep into neural networks and explore architectures like GANs (Generative Adversarial Networks), VAEs (Variational Autoencoders), and transformers that are driving the generative AI revolution. – Hands-On Projects: Engage in practical, hands-on projects that will guide you through the process of building your generative models. From generating art to composing music, you’ll experience the thrill of creating with AI. – Python Programming: Gain proficiency in Python programming, focusing on libraries and frameworks essential for generative AI, such as TensorFlow, PyTorch, and Keras. – Ethics and Future of Generative AI: Discuss the ethical considerations and future implications of generative AI, ensuring you are well-equipped to navigate this rapidly evolving field responsibly. Who Should Enroll: – Data Scientists and Machine Learning Engineers looking to specialize in generative models. – Artists, Musicians, and Designers interested in exploring AI as a tool for creativity. – Tech Enthusiasts and Innovators eager to stay ahead in the field of AI. – Students and Professionals aiming to enhance their skill set with cutting-edge technology. Prerequisites: – Basic understanding of Python programming. – Familiarity with machine learning concepts is beneficial but not required. Course Outcomes: By the end of this course, you will: – Have a strong grasp of generative AI concepts and techniques. – Be able to build and train generative models using state-of-the-art machine learning frameworks. – Understand the ethical considerations and potential impacts of generative AI. – Be prepared to apply generative AI skills in real-world projects and innovative applications. Join us in “Master the Machine Muse: Build Generative AI with ML” and embark on a creative journey that merges technology with imagination, empowering you to shape the future of AI-driven creativity.",
    url: "https://www.udemy.com/course/master-the-machine-muse-build-generative-ai-with-ml/?couponCode=AKHIL_JAN1",
    clean_url: "https://www.udemy.com/course/master-the-machine-muse-build-generative-ai-with-ml/"
  },
  {
    name: "Mastering Deep Learning for Generative AI",
    category: "Data Science",
    image: "https://img-c.udemycdn.com/course/480x270/6085269_ee3f_4.jpg",
    actual_price_usd: 64.99,
    sale_price_usd: 64.99,
    sale_end: "2025-01-10T18:00:00",
    description: "Unlock the potential of Generative AI through Deep Learning. ‘Mastering Deep Learning for Generative AI’ is your comprehensive guide to mastering the art of creating AI models that can generate new, original content. This course is designed for anyone looking to take their machine learning skills to the next level by exploring the creative possibilities of AI. You’ll learn how to use deep learning techniques, including GANs (Generative Adversarial Networks), to develop models that can create new images, music, text, and more. Whether you’re an aspiring AI researcher or developer, or a creative professional looking to explore the possibilities of generative AI, this course has something for you. Course Highlights: – Introduction to Deep Learning for Generative AI: Understand the principles behind deep learning and how it powers the latest breakthroughs in generative models. – Mastering GANs: Dive deep into the mechanics of GANs and learn how to build and train them to generate realistic images, videos, and more. – Advanced Generative Techniques: Explore other advanced generative models like VAEs (Variational Autoencoders) and transformers. – Hands-On Projects: Build real-world generative models in Python and TensorFlow/PyTorch, applying your knowledge to a range of creative projects, from generating realistic art to producing AI-generated music. – Ethics of Generative AI: Learn about the ethical implications and challenges of creating content with AI, and how to approach these issues responsibly. – Career Applications: Discover how generative AI is transforming industries such as entertainment, gaming, design, and beyond. Who Should Enroll: – Data scientists and AI engineers seeking to deepen their understanding of generative models. – Developers looking to incorporate generative AI into their applications. – Creative professionals exploring how AI can enhance their work. – Students or professionals eager to learn about the latest trends in AI and deep learning. Prerequisites: – Basic understanding of machine learning and deep learning concepts. – Python programming knowledge. – Familiarity with TensorFlow or PyTorch (recommended but not required). Course Outcomes: By the end of this course, you will: – Be able to build and train cutting-edge generative models using deep learning techniques. – Understand the underlying principles of GANs, VAEs, and transformers. – Gain practical experience in developing creative applications with generative AI. – Be prepared to tackle real-world challenges in generative AI and deep learning. Join “Mastering Deep Learning for Generative AI” and unlock the world of AI creativity. Create stunning works of art, text, music, and more—all powered by AI!",
    url: "https://www.udemy.com/course/mastering-deep-learning-for-generative-ai/?couponCode=AKHIL_JAN2",
    clean_url: "https://www.udemy.com/course/mastering-deep-learning-for-generative-ai/"
  },
  {
    name: "100% OFF- Python Demonstrations For Practice Course",
    category: "Development",
    image: "https://img-c.udemycdn.com/course/480x270/3518698_0aff.jpg",
    actual_price_usd: 19.99,
    sale_price_usd: 19.69,
    sale_end: "2025-01-12T11:43:00",
    description: "Python Demonstrations For Practice Course, This course is a depth introduction to fundamental python programming concepts by demonstrations in Python.",
    url: "https://www.udemy.com/course/python-for-beginners-demonstration-course/?couponCode=CD29D02165FB7D76A1F0",
    clean_url: "https://www.udemy.com/course/python-for-beginners-demonstration-course/"
  }
];

const ContestPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Automatically slide every 3 seconds
    centerMode: true, // Center the current slide
  };

  const filteredCourses = courses.filter(course => 
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`contest-page ${darkMode ? 'dark' : 'light'}`}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/images/Edusphere logo.png" alt="Logo" />
          <span>Edusphere</span>
        </div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/courses">Courses</a>
          <a href="/contest">Contest</a>
          <a href="/transaction">Transaction</a>
        </div>
        <div className="navbar-right">
          <button className="toggle-btn" onClick={toggleDarkMode}>
            {darkMode ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for a course..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Course Slider */}
      
      <div className="slider-container">
        <Slider {...settings}>
          {filteredCourses.map((course, index) => (
            <div key={index} className="course-card">
              <img src={course.image} alt={course.name} className="course-image" />
              <div className="course-details">
                <h2>{course.name}</h2>
                <p>{course.category}</p>
                <p className="course-description">{course.description}</p>
                <p><strong>Sale Price: ${course.sale_price_usd}</strong></p>
                <p><strong>Ends: {new Date(course.sale_end).toLocaleString()}</strong></p>
                <button class="gradient-button">
  <a href={course.clean_url} target="_blank" rel="noopener noreferrer">Visit Course</a>
</button>

              </div>
            </div>
          ))}
        </Slider>
      </div>

      <footer className="footer">
        <p>Edusphere | 2025 copyright reserved</p>
      </footer>

      {/* Styles */}
      <style jsx>{`
        .contest-page {
          text-align: center;
          margin: 20px;
          background-color: ${darkMode ? '#333' : 'linear-gradient(to right, #ff512f, #dd2476)'};
        }

        .contest-heading {
          font-size: 2em;
          margin-bottom: 30px;
          color: #f90;
        }

        .slider-container {
          width: 97%;
          margin: 0 auto;
          background-color: ${darkMode ? '#333' : "linear-gradient(to right, #ff512f,rgb(11, 11, 11))"}; /* Keep background consistent */
    padding-bottom: 100px; /* Ensure space between cards and footer */
        }

        .course-card {
          background: none;
          padding: 10px;
          border-radius: 8px;
          box-shadow: none;
          margin: 0 30px;
          transition: transform 0.3s ease,background-color 0.3s ease;
          cursor: pointer;
          background: ${darkMode ? "linear-gradient(45deg, #ff4500, #f90);" : "linear-gradient(to bottom, #ffecd2, #fcb69f)"};
          width: 70%; /* Reduced width of the card */
          max-width: 375px; /* Set a max-width to prevent it from becoming too large */
          height: auto; /* Let the height adjust according to content */
          outline: 2px solid transparent;
        }

        .course-card:hover {
          transform: scale(1.05);
          outline: 2px solid #f90;
          
        }

        .course-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
        }

        .course-details {
          text-align: left;
          margin-top: 10px;
        }

        .course-details h2 {
          font-size: 1.3em;
        }

        .course-details p {
          font-size: 1em;
          margin: 5px 0;
        }

        .course-description {
          display: none;
        }

        .course-card:hover .course-description {
          display: block;
          font-size: 0.9em;
          color: #444;
        }

        footer.footer {
          background-color: #333;
          color: #fff;
          padding: 10px 0;
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
        }

        footer.footer p {
          margin: 0;
          font-size: 1em;
        }

        .slick-prev, .slick-next {
  display: block; /* Ensure they are visible */
  color: #000000; /* Set the arrow color, use any color you prefer */
  font-size: 1.5em; /* Increase the size of the arrows */
  background-color: transparent; /* Remove background */
  border: none; /* Remove borders */
  padding: 10px; /* Add padding for larger clickable area */
  cursor: pointer; /* Change cursor to indicate it's clickable */
  transition: transform 0.3s ease;
}
      
      .slick-prev:hover, .slick-next:hover {
  transform: scale(1.2); /* Increase size when hovered */
}

.slick-prev {
  left: -55px; /* Adjust the left button position */
}

.slick-next {
  right: -20px; /* Adjust the right button position */
}

.slick-prev:before, .slick-next:before {
  font-size: 1.5em; /* Increase arrow size */
  color: #f90; /* Arrow color */
}

.slick-prev.slick-disabled, .slick-next.slick-disabled {
  opacity: 0.3; /* Make the disabled arrows semi-transparent */
  pointer-events: none; /* Disable clicks on disabled arrows */
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
  .slick-prev, .slick-next {
    color: white; /* Dark mode color */
  }
}
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 19px;
          background: ${darkMode ? "#333" : "linear-gradient(to bottom, #ffecd2, #fcb69f)"};
          box-sizing: border-box;
        }

        .logo {
          font-size: 2em;
          display: flex;
          align-items: center;
        }

        .logo img {
          width: 65px;
          margin-right: 10px;
        }

        .logo span {
          font-weight: bold;
          font-size: 1.5em;
          color: #f90;
        }

        .nav-links a {
          margin: 0 15px;
          text-decoration: none;
          color: #333;
        }

        .navbar-right {
          display: flex;
          align-items: right;
        }

        .toggle-btn {
          font-size: 1.5em;
          background: none;
          border: none;
          cursor: pointer;
          margin-right: 10px;
        }

        .dark .navbar {
          background-color: #444;
        }

        .dark .nav-links a {
          color: #fff;
        }

        .dark .footer {
          background-color: #444;
        }

        .dark .footer p {
          color: #fff;
        }

        .search-container {
          margin: 20px;
        }

        .search-bar {
          padding: 10px;
          font-size: 1.2em;
          border: 2px solid ${darkMode ? "#fff" : "#333"};
          border-radius: 8px;
          width: 50%;
        }

        .search-bar:focus {
          outline: none;
          border-color: #f90;
        }
        
        /* Button styling with blue gradient */
.gradient-button {
  background: linear-gradient(45deg, #1e3c72, #2a5298); /* Blue gradient */
  color: white; /* White text color */
  padding: 15px 32px; /* Padding around the text */
  font-size: 16px; /* Font size */
  border: none; /* Remove border */
  border-radius: 4px; /* Rounded corners */
  cursor: pointer; /* Change cursor on hover */
  transition: background 0.3s ease; /* Smooth transition for background change */
  display: inline-block; /* Make it behave like a button */
  text-align: center; /* Center the text */
}

.gradient-button a {
  color: white; /* White color for the link */
  text-decoration: none; /* Remove underline */
  font-weight: bold; /* Make the link text bold */
}

.gradient-button:hover {
  background: linear-gradient(45deg, #2a5298, #1e3c72); /* Reverse gradient effect on hover */
}

          
      `}</style>
    </div>
  );
};

export default ContestPage;
