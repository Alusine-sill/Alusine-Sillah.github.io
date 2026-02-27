<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alusine Sillah - Web Developer Portfolio</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #f8f8f8;
        }
        .container {
            max-width: 1100px;
            margin: auto;
            padding: 0 20px;
        }
        header {
            background: #2c3e50;
            color: white;
            padding: 60px 0;
            text-align: center;
        }
        header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }
        header p {
            font-size: 1.2em;
            opacity: 0.9;
        }
        .section {
            padding: 40px 0;
            border-bottom: 1px solid #ddd;
        }
        .section h2 {
            text-align: center;
            margin-bottom: 30px;
            color: #2c3e50;
        }
        .project-card {
            background: white;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .project-card h3 {
            color: #2c3e50;
            margin-bottom: 10px;
        }
        .project-card a {
            display: inline-block;
            margin-top: 10px;
            color: #3498db;
            text-decoration: none;
        }
        .project-card a:hover {
            text-decoration: underline;
        }
        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
        }
        .skill-tag {
            background: #3498db;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9em;
        }
        .contact-info {
            text-align: center;
            background: #ecf0f1;
            padding: 20px;
            border-radius: 8px;
        }
        .contact-info p {
            margin: 10px 0;
        }
        .btn {
            display: inline-block;
            background: #2c3e50;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            margin: 10px 5px;
        }
        .btn:hover {
            background: #34495e;
        }
        footer {
            background: #2c3e50;
            color: white;
            text-align: center;
            padding: 20px 0;
        }
    </style>
</head>
<body>
    <header>
      
        <div class="container">
            <h1>Alusine Sillah</h1>
            <p>Web Developer | PHP | JavaScript | CSS | MySQL</p>
            <p>BSc Social Work, Fourah Bay College</p>
            <div style="margin-top: 20px;">
                <a href="#projects" class="btn">View My Work</a>
                <a href="#contact" class="btn">Contact Me</a>
            </div>
        </div>
    </header>

    <section id="about" class="section">
        <div class="container">
            <h2>About Me</h2>
            <p style="text-align: center; max-width: 800px; margin: auto;">
                I'm a self-taught web developer based in Bundung Borehole, The Gambia. With a background in Social Work from Fourah Bay College, I bring a unique human-centered approach to web development. Over the past 10 months, I've built a fully functional school portal using PHP, MySQL, and JavaScript, demonstrating my ability to learn complex skills independently and deliver practical solutions.
            </p>
        </div>
    </section>

    <section id="skills" class="section">
        <div class="container">
            <h2>Technical Skills</h2>
            <div class="skills">
                <span class="skill-tag">HTML5</span>
                <span class="skill-tag">CSS3</span>
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">PHP</span>
                <span class="skill-tag">MySQL</span>
                <span class="skill-tag">Git & GitHub</span>
                <span class="skill-tag">Responsive Design</span>
                <span class="skill-tag">AI-Assisted Development</span>
            </div>
        </div>
    </section>

    <section id="projects" class="section">
        <div class="container">
            <h2>Featured Project</h2>
            <div class="project-card">
                <h3>School Management Portal</h3>
                <p><strong>Technologies:</strong> PHP, MySQL, JavaScript, HTML/CSS</p>
                <p>A comprehensive web application for managing school operations including student records, user authentication, and administrative dashboards. Built entirely through self-directed learning over 10 months.</p>
                <p><strong>Key Features:</strong></p>
                <ul style="margin-left: 20px; margin-bottom: 15px;">
                    <li>Secure login system for administrators and teachers</li>
                    <li>Complete student record management (CRUD operations)</li>
                    <li>Responsive design for mobile and desktop</li>
                    <li>Database-driven architecture</li>
                </ul>
                <a href="https://github.com/YOUR-USERNAME/school-portal" target="_blank">View Code on GitHub →</a><br>
                <a href="https://myeas-school-portal.kesug.com" target="_blank">View Live Demo →</a>
            </div>
        </div>
    </section>

    <section id="education" class="section">
        <div class="container">
            <h2>Education</h2>
            <div style="text-align: center;">
                <h3>Bachelor of Science in Social Work</h3>
                <p>Fourah Bay College, University of Sierra Leone</p>
                <p>Graduated: 2017</p>
            </div>
        </div>
    </section>

    <section id="contact" class="section">
        <div class="container">
            <h2>Contact Me</h2>
            <div class="contact-info">
                <p>📧 Email: alusinesillah33048@gmail.com</p>
                <p>📞 Phone: 5383270</p>
                <p>📍 Location: Bundung Borehole, The Gambia</p>
                <p>🔗 GitHub: <a href="https://github.com/Alusine-sill
                " target="_blank">github.com/ALUSINE-SILLAH</a></p>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy 2025 Alusine Sillah. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>
