import './App.css'
import Leo from "../src/assets/leo.png"
// import Navbar from "./components/navbar/navbar";
// import Footer from './components/footer/footer';

function App() {

  return (
    <>
      {/* <Navbar /> */}
      
      {/* Présentation Card */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 p-4 md:p-8 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
        <div className="text-center md:text-left flex-1">
          <h1 className="text-2xl md:text-5xl font-bold text-white drop-shadow-lg">
            Léo Lacordaire
          </h1>
          <h2 className="text-white mt-2 font-bold text-base md:text-xl">
            Epitech student | 2nd year 📍 Strasbourg
          </h2>
          <p className='text-white text-sm md:text-base w-full text-justify mt-2'>
            Software engineering student, passionate about development and innovation. Experienced in C and web development, quick to learn new programming languages. Autonomous, rigorous, and motivated to tackle challenging technical projects.
          </p>
        </div>
        <div className="flex-shrink-0 mt-4 md:mt-0">
          <img
            src={Leo}
            alt="leo-img"
            className="w-28 h-28 md:w-48 md:h-48 object-cover rounded-lg border-2 border-white shadow-md"
          />
        </div>
      </div>
      {/* Project, jobs/stage, info perso*/}
      <div className="flex flex-col md:flex-row gap-8 items-start mt-8 max-w-4xl mx-auto px-2 w-full">
        {/* Projects */}
        <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-xl shadow-lg p-6 flex-1 min-w-[250px]">
          <h2 className="text-white text-2xl font-bold mb-4 flex items-center gap-2">
            <span>🧠</span> Projects
          </h2>
          <ul className="space-y-4">
            <li>
              <span className="text-white font-semibold text-lg">Tardis</span>
              <p className="text-blue-100 text-sm mt-1">
                A prediction app created to display train delays and help passengers anticipate them earlier. The project uses a machine learning model trained to estimate probability of delays based on all data related to past delays recorded, their causes, the number of occurences, and more. Long story short, Tardis is made to help you travel without the stress of being uninformed. 😊
              </p>
            </li>
            <li>
              <span className="text-white font-semibold text-lg">TodoList</span>
              <p className="text-blue-100 text-sm mt-1">
                A clean and responsive ToDoList web application with user authentication (Login/Register). Built with modern web technologies to help you stay productive and organized.
              </p>
            </li>
            <li>
              <span className="text-white font-semibold text-lg">Plane Radar</span>
              <p className="text-blue-100 text-sm mt-1">
                The Aviation Radar Simulator is a real-time radar system simulation developed in C using CSFML. It simulates aircraft movement, radar scanning, and aircraft detection on a 2D map.
              </p>
            </li>
          </ul>
        </div>
        {/* Jobs/Stage & Contact */}
        <div className="flex flex-col gap-8.5 flex-1 min-w-[250px]">
          <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-xl shadow-lg p-6">
            <h2 className="text-white text-2xl font-bold mb-2 flex items-center gap-2">
              <span>👨🏻‍💻</span> Jobs / Internship
            </h2>
            <ul className="text-blue-100 text-base space-y-1">
              <li>August - Decembre 2025 : Internship at Ubertone</li>
              <li> July 2024 : Service agent</li>
            </ul>
          </div>
            <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-xl shadow-lg p-6">
            <h2 className="text-white text-2xl font-bold mb-2 flex items-center gap-2">
              <span>🎉</span> Associative
            </h2>
            <ul className="text-blue-100 text-base space-y-1">
              <li> Decembre 2025 - Today : Student union member, EPITECH</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-xl shadow-lg p-6">
            <h2 className="text-white text-2xl font-bold mb-2 flex items-center gap-2">
              <span>📩</span> Contact me
            </h2>
            <ul className="text-blue-100 text-base space-y-1">
              <li>leo.lacordaire@epitech.eu</li>
              <li>
                <a
                  href="https://www.linkedin.com/in/l%C3%A9o-lacordaire-b9087b347/"
                  className="text-blue-200 underline hover:text-blue-300 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-2">
        <div className="text-center mt-8">
          <h1 className="font-bold text-3xl text-white mb-6 drop-shadow-lg px-6 py-3 rounded-xl inline-block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-md">
            My skills
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {/* Software */}
          <div className="bg-blue-600 bg-opacity-90 rounded-xl shadow-lg p-6 min-w-[200px] flex-1 max-w-xs">
            <h2 className="text-center text-white text-xl font-semibold mb-4 flex items-center justify-center gap-2">
              <span>🖥️</span> Software
            </h2>
            <ul className="text-white space-y-1 text-base">
              <li>Git</li>
              <li>Docker</li>
              <li>Linux environnement</li>
              <li>Windows environnement</li>
            </ul>
          </div>
          {/* Langages */}
          <div className="bg-blue-600 bg-opacity-90 rounded-xl shadow-lg p-6 min-w-[200px] flex-1 max-w-xs">
            <h2 className="text-center text-white text-xl font-semibold mb-4 flex items-center justify-center gap-2">
              <span>💻</span> Langages
            </h2>
            <ul className="text-white space-y-1 text-base">
              <li>C</li>
              <li>Python</li>
              <li>HTML/CSS</li>
              <li>nodeJs</li>
              <li>React / Vue</li>
            </ul>
          </div>
          {/* Other */}
          <div className="bg-blue-600 bg-opacity-90 rounded-xl shadow-lg p-6 min-w-[200px] flex-1 max-w-xs">
            <h2 className="text-center text-white text-xl font-semibold mb-4 flex items-center justify-center gap-2">
              <span>✨</span> Other
            </h2>
            <ul className="text-white space-y-1 text-base">
              <li>Teamwork</li>
              <li>Curious</li>
              <li>Sociable</li>
              <li>Project management</li>
              <li>Problem solving</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        school curriculum

      </div>

      {/* <Footer /> */}
    </>
  );
}

export default App
