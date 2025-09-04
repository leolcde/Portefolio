import './App.css'
import Leo from "../src/assets/leo.png"
import Navbar from "./components/navbar/navbar";
import Footer from './components/footer/footer';

function App() {

  return (
    <>
      <Navbar />
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg shadow-lg">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Léo Lacordaire
          </h1>
          <h2 className="text-white mt-2 font-bold text-lg md:text-xl">
            Epitech student | 2nd year 📍 Strasbourg
          </h2>
          <p className='text-white w-90 text-justify'>Software engineering student, passionate about development and innovation. Experienced in C and web development, quick to learn new programming languages. Autonomous, rigorous, and motivated to tackle challenging technical projects.</p>
        </div>
        <div className="flex-shrink-0">
          <img
            src={Leo}
            alt="leo-img"
            className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-lg border-2 border-white shadow-md"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App
