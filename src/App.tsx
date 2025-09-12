import './App.css'
import Leo from "../src/assets/leo.png"
import Navbar from "./components/navbar/navbar";
import Footer from './components/footer/footer';

function App() {

  return (
    <>
      <Navbar />
      
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

      <Footer />
    </>
  );
}

export default App
