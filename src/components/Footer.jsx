import React from "react";

function Footer() {
  return (
    <footer class="bg-white shadow md:flex md:items-center md:justify-between md-gap-3 p-4 md:p-6 xl:p-8 dark:bg-gray-800 antialiased">
      <p class="mb-4 text-lg text-center text-gray-500 dark:text-gray-400 sm:mb-0">
        &copy; {new Date().getFullYear()}{" "}
        <span class="hover:underline">DoQueue.netlify.app</span> All rights
        reserved.
      </p>
      <p class="mb-4 text-xl text-center text-gray-500 dark:text-gray-400 sm:mb-0">
        Made with ❤️ by Vansh Chauhan!
      </p>
      <div class="flex justify-center items-center space-x-2">
        <a
          href="https://www.linkedin.com/in/vansh-chauhan-741a5b257/"
          class="inline-flex justify-center p-2 px-3 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <i class="fa-brands fa-linkedin-in text-2xl"></i>
          <span class="sr-only">LinkedIn</span>
        </a>
        <a
          href="https://github.com/VanshChauhanGit"
          target="_blank"
          class="inline-flex justify-center p-2 px-3 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <i class="fa-brands fa-github text-2xl"></i>
          <span class="sr-only">Github</span>
        </a>
        <a
          href="https://vanshchauhan.vercel.app/"
          target="_blank"
          class="inline-flex justify-center p-2 px-3 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <i class="fa-solid fa-globe text-2xl"></i>
          <span class="sr-only">Portfolio</span>
        </a>
        <a
          href="https://www.instagram.com/vansh_.chauhan/"
          target="_blank"
          class="inline-flex justify-center p-2 px-3 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <i class="fa-brands fa-instagram text-2xl"></i>
          <span class="sr-only">Instagram</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
