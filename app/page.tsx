import { Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-white dark:bg-black">
      <div className="max-w-md w-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <img 
            src="/images/js.jpeg" 
            alt="Profile Picture" 
            className="w-28 h-28 rounded-full mx-auto mb-6"
          />
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">Janis Solks</h1>
          <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-4">Infrastructure Engineer</p>
          <p className="text-base text-center text-gray-800 dark:text-gray-200 mb-8 max-w-sm mx-auto">
            Passionate about delivering quality IT support and building useful infrastructure solutions.
          </p>
          <div className="flex justify-center space-x-6">
          <a href="https://linkedin.com/in/thinkjanis" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
              <Linkedin className="w-7 h-7" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:cv@thinkjanis.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
              <Mail className="w-7 h-7" />
              <span className="sr-only">Email</span>
            </a>
            <a href="https://github.com/thinkjanis" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
              <Github className="w-7 h-7" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}