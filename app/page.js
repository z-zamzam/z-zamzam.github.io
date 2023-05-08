"use client";
import React, { useState } from 'react';
import useMobileNav from 'components/useMobileNav'; 



export default function Home() {
  const { isNavOpen, handleNavToggle } = useMobileNav();
  return (
    
    <main>
           <nav className="bg-slate-300 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={isNavOpen} onClick={handleNavToggle}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-slate-300 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-slate-300 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#home" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#about-me" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-900 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Me</a>
              </li>
              <li>
                <a href="#projects" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-900 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Personal Projects</a>
              </li>
              <li>
                <a href="#experience" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-900 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Work Experience</a>
              </li>
              <li>
                <a href="#contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-900 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

{/* 
          <div className="absolute top-0 right-0 h-12 w-18 p-4">
            <button id="darkModeToggle" className="js-change-theme focus:outline-none" onClick={toggleDarkMode}>🌙</button>
  </div> */}

      <section id="home">
        <div className="bg-gradient-to-tr from-blue-700 to-stone-700 w-full bg-cover bg-center relative">
          <img src="/computer-2.jpg" alt="computer" className="absolute object-cover w-full h-full mix-blend-overlay" />
          <div className="flex flex-col items-center justify-center p-64 h-full">
            <h1 className="text-white text-5xl font-bold relative">Zeiad&apos;s Portfolio</h1>
            <h2 className="text-slate-200 text-2xl font-light mt-5 relative">This is my website.</h2>
            <a href="#projects" className="bg-green-700 hover:bg-green-900 text-white font-bold px-4 py-2 rounded-full mt-5 relative">
              My Projects
            </a>
          </div>
        </div>
      </section>

    <section id="about-me">
      <div className="flex items-center h-auto lg:h-screen flex-wrap mx-auto lg:my-0 bg-gradient-to-r from-neutral-700 to-blue-950">
      <img src="/city-view.jpg" alt="computer" className="absolute object-cover w-full h-full mix-blend-overlay" />
    
        <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl opacity-100 mx-6 lg:mx-0">
        
    
            <div className="p-4 md:p-12 text-center lg:text-left">
                <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"></div>
                
                <h1 className="text-3xl font-bold pt-8 lg:pt-0 relative text-gray-200">Zeiad Zamzam</h1>
                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-white opacity-25"></div>
                <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start text-gray-200 relative"><svg className="h-4 fill-current text-white pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"></path></svg>Software Developer</p>
                <p className="pt-2 text-gray-200 text-xs lg:text-sm flex items-center justify-center lg:justify-start relative"><svg className="h-4 fill-current text-white pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"></path></svg>Toronto, ON</p>
                <p className="pt-8 text-sm text-gray-200 relative">Hello! I&apos;m Zeiad Zamzam, a dedicated Software Developer with a passion for creating elegant and efficient solutions to complex problems. With a background in Industrial Engineering and experience working with various technologies like JavaScript, React, Node.js, and Python, I&apos;m confident in my ability to develop and maintain cutting-edge web applications. In my spare time, I love exploring new technologies, producing music, and playing my guitar. I&apos;m always eager to learn, adapt, and challenge myself to grow both personally and professionally. My ultimate goal is to make a positive impact on people&apos;s lives by building innovative and user-friendly digital products. Let&apos;s connect!</p>
    
                <div className="pt-12 pb-8">
                    <a href="#contact" className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full relative">
                      Get In Touch
                    </a> 
                    <a href="https://drive.google.com/uc?export=download&id=1jwmaGCYB17EmObLaNPHxs_cWwuxC4ntw" className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full relative">
                      Resume
                    </a> 
                </div>
    
                <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-start">
                    <a className="link" href="mailto:ziadhe@gmail.com" data-tippy-content="ziadhe@gmail.com"><svg className="h-6 fill-current text-white hover:text-green-700 relative" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg></a>                        
                    <a className="link" href="https://www.linkedin.com/in/zeiad-zamzam-646b12107/" target="_blank" rel="noopener noreferrer" data-tippy-content="zeiad-zamzam"><svg className="h-6 fill-current text-white px-10 hover:text-green-700 relative" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
                    <a className="link" href="https://github.com/z-zamzam" target="_blank" rel="noopener noreferrer" data-tippy-content="@z-zamzam"><svg className="h-6 fill-current text-white hover:text-green-700 relative" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg></a>
                    </div>

                                
                    
            </div>
    
        </div>
        
        <div className="w-full lg:w-1/4 relative">
            <img src="/zeiad.jpg" alt="profile picture" className="rounded-full object-scale-down h-50 w-50 lg:rounded-full shadow-2xl hidden lg:block" />            
        </div>
    </div></section> 

    <section id="projects">
        <div className="bg-gradient-to-tr from-blue-700 to-stone-700 min-h-screen w-full bg-cover bg-center relative flex flex-col justify-center items-center">
          <img src="/computer-1.jpg" alt="computer" className="absolute object-cover w-full h-full mix-blend-overlay" />
          <div className="mb-4 rounded-full bg-slate-400 p-6 dark:bg-neutral-700 relative w-2/3 align-bottom flex flex-col items-center justify-center">
          <img src="/crypto-bot.png" alt="robot using computer" className="relative object-cover rounded-full w-48 h-48 float" />
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Cryptocurrency Trading Bot
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Cryptocurrency trading bot coded from scratch using python by pulling live 
            market data from the Binance API and using the pandas framework to manipulate 
            the data and set conditions for buying/selling. The code was deployed to run 
            serverless on the cloud using Azure Functions.
            </p>
            <button
              type="button"
              className="bg-green-700 hover:bg-green-900 text-white font-bold px-4 py-2 rounded-full mt-5 relative"
              data-te-ripple-init
              data-te-ripple-color="light">
              Learn More
            </button>
          </div>
          <div className="mb-4 rounded-full bg-slate-400 p-6 dark:bg-neutral-700 relative w-2/3 align-bottom flex flex-col items-center justify-center">
          <img src="/chatgpt-logo.png" alt="chatgpt logo" className="relative object-cover rounded-full w-48 h-48 float" />
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              ChatGPT-based Chatbot
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Chatbot in Python built on the ChatGPT API and using a Flask server allowing the 
            user to choose a role for ChatGPT providing context to the conversation e.g.: Act 
            as a travel guide. Designed a UI for the chatbot and built the frontend using the 
            Angular JavaScript framework.
            </p>
            <button
              type="button"
              className="bg-green-700 hover:bg-green-900 text-white font-bold px-4 py-2 rounded-full mt-5 relative"
              data-te-ripple-init
              data-te-ripple-color="light">
              Learn More
            </button>
          </div>
          {/* <div className="rounded-md bg-slate-300 p-6 dark:bg-neutral-700 relative w-2/3 align-bottom flex flex-col items-center">
          <img src="/website-blog.jpg" alt="blog website" className="relative rounded-full w-48 h-48 object-right" />
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Blog Website
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Tristique senectus et netus et malesuada fames ac turpis egestas. Leo duis ut diam quam nulla porttitor. 
            Amet aliquam id diam maecenas ultricies mi. Eu scelerisque felis imperdiet proin fermentum leo vel. 
            </p>
            <button
              type="button"
              className="bg-green-700 hover:bg-green-900 text-white font-bold px-4 py-2 rounded-full mt-5 relative"
              data-te-ripple-init
              data-te-ripple-color="light">
              Learn More
            </button>
          </div> */}
          
        </div>
      </section>

    <section id="experience" className="bg-gradient-to-tr from-blue-700 to-stone-700 max-w-full mx-auto max-h-full">
      <div className="bg-gradient-to-tr from-blue-700 to-stone-700 w-full bg-cover bg-center relative min-h-screen">
        <img src="/coffee-keyboard.jpg" alt="man in office" className="absolute object-cover w-full h-full mix-blend-overlay" />
        <h1 className="text-5xl font-bold text-white text-center pt-20">Work Experience</h1>
        <div className="flex flex-col items-center justify-center p-28 h-full">
        <ol className="border-l border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t relative">
          <li>
          <div className="flex-start flex items-center pt-2 md:block md:pt-0 relative">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
            <p className="mt-2 text-sm text-white dark:text-neutral-300">
              Sep 2021 - May 2022
            </p>
          </div>
          <div className="ml-4 mt-2 pb-5 md:ml-0">
            <h4 className="mb-1.5 text-xl font-semibold text-gray-300">Data Science Intern - Multitech Trades Corp.</h4>
            <p className="mb-3 text-white dark:text-neutral-300">
            - Streamlined the management of project data for the Mt. Sinai renovation project. <br />
            - Stored, sorted, and queried all project data efficiently, improving data accessibility by 80%. <br />
            - Established SOPs for shareholders to manage project data and reduced time spent searching for information by 30%. <br />
            - Established vital KPIs for the business to reduce costs and delays and leveraged PowerBI’s visualization capabilities to help shareholders track established KPIs. <br />
            - Reduced project costs by 15% and project delays by 20%. <br />

            </p>
          </div>
        </li>
        <li>
          <div className="flex-start flex items-center pt-2 md:block md:pt-0 relative">
            <div
              className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
            <p className="mt-2 text-sm text-white dark:text-neutral-300">
              May 2022
            </p>
          </div>
          <div className="ml-4 mt-2 pb-5 md:ml-0">
            <h4 className="mb-1.5 text-xl font-semibold text-gray-300">Industrial Engineering - Ryerson University</h4>
            <p className="mb-3 text-white dark:text-neutral-300">
              - Graduated with a B.Eng in Industrial Engineering from Ryerson University, Toronto, ON. <br />
              - That was only the start of my journey of learning about the world of engineering and how it can be applied to solve real-world problems. <br />
              - Started learning how to apply my engineering knowledge to the world of programming and data science, and how to use data to make informed decisions.
            </p>
          </div>
        </li>
        <li>
          <div className="flex-start flex items-center pt-2 md:block md:pt-0 relative">
            <div
              className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
            <p className="mt-2 text-sm text-white dark:text-neutral-300">
              Jul 2022 - Present
            </p>
          </div>
          <div className="ml-4 mt-2 pb-5 md:ml-0">
            <h4 className="mb-1.5 text-xl font-semibold text-gray-300">Front of House Supervisor - Nile River Restaurant</h4>
            <p className="mb-3 text-white dark:text-neutral-300">
            - Needed scheduling flexibility to focus on personal issues and my journey of self-learning, so I decided to pick up a temporary job that facilitates that. <br />
            - Utilized technology such as POS systems, inventory management software, and online reservation platforms to streamline operations and enhance customer experience. <br />
            - Analyzed customer feedback and restaurant performance data to identify areas for improvement and implement changes to increase revenue and profitability. <br />
            </p>
          </div>
        </li>
          </ol>
    </div>
      </div>
    </section>

    <section id="contact">
        <div className="bg-gradient-to-tr from-blue-700 to-stone-700 min-h-screen w-full bg-cover bg-center relative">
          <img src="/working-hands.jpg" alt="computer" className="absolute object-cover w-full h-full mix-blend-overlay" />
          <div className="flex flex-col items-center justify-center p-8 h-full">
          <section className="bg-white dark:bg-gray-900">
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md relative">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Me</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Want to get in touch? I can be reached via this form, e-mail, linkedin, and/or phone during business hours. Let me know!</p>
        <form action="#" className="space-y-8">
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                <input type="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Name" required />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
                <input type="email" id="email" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" required />
            </div>
            <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your Message</label>
                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a message..."></textarea>
            </div>
            <button type="submit" className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full relative ml-72">Send Message</button>
        </form>
    </div>
  </section>
          </div>
        </div>
      </section>

      <section id="footer">
        
      <footer className="bg-slate-300 border-gray-200 dark:bg-gray-900 rounded-lg shadow m-4">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Zeiad Zamzam</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#about-me" className="mr-4 hover:underline md:mr-6 ">About Me</a>
        </li>
        <li>
            <a href="#contact" className="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>

      </section>


    </main>
  )
}
