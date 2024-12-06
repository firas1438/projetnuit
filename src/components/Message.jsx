import React, { useRef } from 'react';

function Homepage() {
  // Create a reference for the second section
  const certificateRef = useRef(null);

  // Scroll to the certificate section when the button is clicked
  const handleButtonClick = () => {
    certificateRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900 mt-20">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left side: Text content */}
            <div className="lg:w-2/3 text-left lg:text-center mb-8 lg:mb-0">
              <h1 className="mt-5 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
                Félicitations, vous vous êtes inscrit avec succès ! 🎉
              </h1>
              <p className="mt-10 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                Vous faites maintenant officiellement partie du Club Super Secret, où les secrets sont si secrets que nous ne nous en souvenons même pas. Merci pour votre patience, vous méritez une médaille... ou au moins un certificat! Peut-être que la prochaine fois, nous rendrons le formulaire plus facile. 😉
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <div>
                  <button
                    onClick={handleButtonClick}
                    className="ml-2 px-64 py-4 relative rounded group text-white text-xl font-medium text-base inline-block mt-10"
                  >
                    <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-green-600 to-green-500"></span>
                    <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-green-600 to-green-500"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-green-600 to-green-500"></span>
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-green-600 from-green-500"></span>
                    <span className="relative">Obtenir Certificat</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right side: Image */}
            <div className="lg:w-1/3 flex justify-center">
              <img
                src="https://i.ibb.co/QfTXqBj/Dance-troll.webp"
                alt="excitée"
                className="w-full h-auto max-w-xs md:max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section ref={certificateRef}>
        <div className="mt-64 flex justify-center items-center h-screen">
          <img
            src="https://i.ibb.co/3drWkGr/certiffinale.png"
            alt="certificat"
            className="w-[1000px] h-auto"
          />
        </div>
      </section>
    </div>
  );
}

export default Homepage;
