import React from 'react'
import { Link } from 'react-router-dom';


function Homepage() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 mt-20">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left side: Text content */}
            <div className="lg:w-2/3 text-left lg:text-center mb-8 lg:mb-0">
              <h1 className="mt-5 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
                Top Secret : Seuls les Courageux Peuvent S'inscrire !
              </h1>
              <p className="mt-10 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                Psst, j'ai quelque chose de top secret à te dire... mais seulement si tu remplis ce formulaire super simple. T'inquiète, ça ne prendra pas longtemps... enfin, peut-être juste quelques secondes (ou centièmes)!
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <div>
              <Link to="/signup">
<button class="ml-2 px-64 py-4 relative rounded group text-white text-xl font-medium text-base inline-block mt-10">
<span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
<span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
<span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
<span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
<span class="relative">S'inscrire maintenant!</span>
</button>
</Link>

</div>
              </div>
            </div>

            {/* Right side: Image */}
            <div className="lg:w-1/3 flex justify-center">
              <img
                src="https://i.ibb.co/wRvkccV/de17e41fa1f435a09ab209e9b4939176.gif"
                alt="excitée"
                className="w-full h-auto max-w-xs md:max-w-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage
