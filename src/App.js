import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-black bg-opacity-50 backdrop-blur-md fixed w-full z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Bishak Mitra</h1>
          <div className="space-x-6">
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4">Hi, I'm Bishak Mitra</h2>
          <p className="text-2xl text-blue-300 mb-6">Full Stack Web Developer</p>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            B.Tech CSE Student passionate about building scalable web applications 
            with the MERN stack. Creating solutions that make a difference.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/JaseWils" target="_blank" rel="noopener noreferrer" 
               className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold">
              View GitHub
            </a>
            <a href="https://linkedin.com/in/bishakmitra" target="_blank" rel="noopener noreferrer"
               className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-semibold">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black bg-opacity-30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-300 space-y-4">
            <p>
              I'm a final-year Computer Science student at Future Institute of Engineering & Management, 
              with a CGPA of 7.75. My journey in web development began with self studying on YouTube and comprehensive training 
              program in the MERN stack at Ardent Computech Pvt. Ltd.
            </p>
            <p>
              I'm passionate about creating efficient, user-friendly web applications and solving 
              real-world problems through technology. Previously selected for Smart India Hackathon 2025 
              where I worked on environmental sustainability solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Frontend</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• HTML5, CSS3</li>
                <li>• JavaScript (ES6+)</li>
                <li>• React.js</li>
                <li>• Responsive Design</li>
              </ul>
            </div>
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Backend & Database</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Node.js (Learning)</li>
                <li>• Express.js (Learning)</li>
                <li>• MongoDB</li>
                <li>• MySQL</li>
              </ul>
            </div>
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Tools & Languages</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Git/GitHub</li>
                <li>• VS Code</li>
                <li>• Java, Python, C</li>
                <li>• SQL</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-black bg-opacity-30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Project 1 */}
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg hover:transform hover:scale-105 transition">
              <h3 className="text-2xl font-bold mb-3">Environment Management System</h3>
              <p className="text-gray-300 mb-4">
                Sustainability tracking application developed for Smart India Hackathon 2025. 
                Features real-time data visualization and environmental metrics monitoring.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-600 px-3 py-1 rounded text-sm">JavaScript</span>
                <span className="bg-blue-600 px-3 py-1 rounded text-sm">HTML/CSS</span>
                <span className="bg-blue-600 px-3 py-1 rounded text-sm">Git</span>
              </div>
              <a href="https://github.com/JaseWils/Environment-Management-System-main" 
                 target="_blank" rel="noopener noreferrer"
                 className="text-blue-400 hover:text-blue-300">
                View on GitHub →
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg hover:transform hover:scale-105 transition">
              <h3 className="text-2xl font-bold mb-3">Employee Management System</h3>
              <p className="text-gray-300 mb-4">
                Full-stack CRUD application for managing employee records with role-based 
                access control. Built during my training at Ardent Computech.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-600 px-3 py-1 rounded text-sm">JavaScript</span>
                <span className="bg-blue-600 px-3 py-1 rounded text-sm">CRUD</span>
                <span className="bg-blue-600 px-3 py-1 rounded text-sm">Database</span>
              </div>
              <a href="https://github.com/sandipan-das-sd/Employee-Manegment-System-" 
                 target="_blank" rel="noopener noreferrer"
                 className="text-blue-400 hover:text-blue-300">
                View on GitHub →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm currently looking for opportunities to start my career. Let's connect!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 text-lg">
            <a href="mailto:bishakmitra@gmail.com" 
               className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold">
              Email Me
            </a>
            <a href="tel:+916291890245" 
               className="bg-gray-700 hover:bg-gray-600 px-8 py-3 rounded-lg font-semibold">
              Call: +91 6291890245
            </a>
          </div>
          <p className="mt-8 text-gray-400">📍 Kolkata, West Bengal, India</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black bg-opacity-50 py-6 text-center text-gray-400">
        <p>© 2025 Bishak Mitra. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;

/**
 * Main Portfolio Application Component
 * 
 * This component renders the complete portfolio website including:
 * - Navigation bar
 * - Hero section with introduction
 * - About section with background
 * - Skills showcase
 * - Projects gallery
 * - Contact information
 * 
 * @returns {JSX.Element} Complete portfolio website
 */
function App() {
  // ...
}