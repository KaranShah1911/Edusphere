import React, { useState, useEffect } from 'react';

const ManageCourses = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'React Basics',
      status: 'published',
      enrollments: 120,
      averageRating: 4.5,
      completionRate: 90,
      engagementTrend: 'High',
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      status: 'draft',
      enrollments: 80,
      averageRating: 4.7,
      completionRate: 85,
      engagementTrend: 'Medium',
    },
    {
      id: 3,
      title: 'Web Development Bootcamp',
      status: 'archived',
      enrollments: 200,
      averageRating: 4.8,
      completionRate: 95,
      engagementTrend: 'High',
    },
  ]);
  const [filterStatus, setFilterStatus] = useState('all');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleDeleteCourse = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this course?');
    if (confirmDelete) {
      setCourses(courses.filter((course) => course.id !== id));
    }
  };

  const handleCloneCourse = (course) => {
    const clonedCourse = { ...course, id: courses.length + 1 };
    setCourses([...courses, clonedCourse]);
  };

  const filteredCourses = courses.filter(
    (course) => filterStatus === 'all' || course.status === filterStatus
  );

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`manage-courses ${isDarkMode ? 'dark-mode' : ''}`}>
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
        <div className="filter-container">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="archived">Archived</option>
          </select>
        </div>

        <div className="courses-list">
          {filteredCourses.map((course) => (
            <div className="course-card" key={course.id}>
              <h3>{course.title}</h3>
              <p>Status: {course.status}</p>
              <p>Enrollments: {course.enrollments}</p>
              <p>Average Rating: {course.averageRating}</p>
              <p>Completion Rate: {course.completionRate}%</p>
              <p>Engagement Trend: {course.engagementTrend}</p>
              <div className="course-actions">
                <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
                <button onClick={() => handleCloneCourse(course)}>Clone</button>
              </div>
            </div>
          ))}
        </div>

        <div className="analytics-dashboard">
          <h2>Analytics Dashboard</h2>
          <div className="analytics-card">
            <p>Average Ratings: {courses.reduce((acc, course) => acc + course.averageRating, 0) / courses.length}</p>
            <p>Average Completion Rate: {courses.reduce((acc, course) => acc + course.completionRate, 0) / courses.length}%</p>
          </div>
        </div>
      </div>

      <style>
        {`
          :root {
            // --bg-light: linear-gradient(135deg, #1a237e, #4a148c, #0d47a1);
            --text-light: #004d40;
            --bg-dark: linear-gradient(135deg, #ff4081, #e040fb);
            --text-dark: #000000;
            --gamma-background: linear-gradient(135deg, #7e57c2, #673ab7);
             --nebulae-background: linear-gradient(135deg, #1d2951, #393e46, #2e3a47);
           
            // --gamma-background: linear-gradient(135deg, #64b5f6, #01579b);
            // --nebulae-background: linear-gradient(135deg, #303f9f, #673ab7);
          }

          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: var(--bg-light);
            color: var(--text-light);
            transition: all 0.3s ease-in-out;
          }

          .manage-courses.dark-mode {
            background: var(--bg-dark);
            color: var(--text-dark);
            transition: background 0.3s, color 0.3s;
          }

          .manage-courses {
            transition: background 0.3s, color 0.3s;
            background: var(--gamma-background);
            color: var(--text-light);
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }

          .navbar {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            background: var(--gamma-background);
            color: white;
            border-radius: 5px;
            transition: background 0.3s;
          }

          .manage-courses.dark-mode .navbar {
            background: var(--nebulae-background);
          }

          .nav-links a {
            color: white;
            margin: 0 10px;
            text-decoration: none;
          }

          .logo img {
            width: 65px;
            margin-right: 10px;
          }

          .filter-container select {
            margin: 20px 0;
            padding: 10px;
            font-size: 16px;
          }

          .courses-list {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
          }

          .course-card {
            background: white;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            width: calc(33% - 20px);
            box-sizing: border-box;
            transition: background 0.3s;
          }

          .manage-courses.dark-mode .course-card {
            background: #333;
            color: white;
          }

          .course-card h3 {
            margin-top: 0;
          }

          .course-actions button {
            margin-right: 10px;
            padding: 8px 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            background: var(--primary-light);
            color: white;
            transition: background 0.3s;
          }

          .course-actions button:hover {
            background: var(--primary-dark);
          }

          .analytics-dashboard {
            background: var(--gamma-background);
            padding: 20px;
            border-radius: 10px;
            margin-top: 40px;
          }

          .manage-courses.dark-mode .analytics-dashboard {
            background: var(--nebulae-background);
          }

          .analytics-card {
            background: white;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .dark-mode-toggle {
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default ManageCourses;
