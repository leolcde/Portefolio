export default function Footer() {
  return (
    <footer className='fixed bottom-0 left-0 w-full flex bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-md border-t border-blue-700'>
      <div className="flex flex-col items-center justify-center w-full p-4">
        <p className='text-center text-white mb-2'>2025 © Léo's Portefolio. All rights reserved.</p>
        <p className='text-white mb-2'>⬇️ Follow me on ⬇️</p>
        <ul className='flex justify-center gap-6'>
          <li className='text-white transition duration-300 hover:text-blue-200 hover:scale-105'>
            <a href="https://www.linkedin.com/in/l%C3%A9o-lacordaire-b9087b347/">LinkedIn</a>
          </li>
          <li className='text-white transition duration-300 hover:text-blue-200 hover:scale-105'>
            <a href="https://www.instagram.com/leo_lcde/?next=%2F">Instagram</a>
          </li>
          <li className='text-white transition duration-300 hover:text-blue-200 hover:scale-105'>
            <a className="link" href="https://github.com/leolcde">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
