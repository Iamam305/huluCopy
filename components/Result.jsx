import React from 'react'

const Result = ({results}) => {
  console.log(results)
  const BASE_URL = 'http://image.tmdb.org/t/p/original'
  return (
    <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full my-8 px-5">
      {results.map((result) => (
                <div className="overflow-hidden transition-shadow duration-300  rounded p-4" key={result.id}>
                <a href="/" aria-label="Article">
                  <img
                    src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`}
                    className="object-cover w-full h-64 rounded"
                    alt=""
                  />
                </a>
                <div className="py-4">
                  <p className="mb-2 text-xs font-semibold text-white uppercase">
                   {result.release_date || result.first_air_date}
                  </p>
                  <a
                    href="/"
                    aria-label="Article"
                    className="inline-block mb-3 text-green-400 transition-colors duration-200 hover:text-deep-purple-accent-700"
                  >
                    <p className="text-2xl font-bold leading-5">{result.title || result.name}</p>
                  </a>
                  <p className="mb-4 text-white">
                   {result.overview}
                  </p>
                  <div className="flex space-x-4">
                    <span
                   
                      className="flex items-start text-white transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                    >
                      <div className="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5 text-white transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                        >
                          <polyline
                            points="6 23 1 23 1 12 6 12"
                            fill="none"
                            strokeMiterlimit="10"
                          />
                          <path
                            d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                            fill="none"
                            stroke="currentColor"
                            strokeMiterlimit="10"
                          />
                        </svg>
                      </div>
                      <p className="font-semibold">{result.vote_average}</p>
                    </span>
                   
                  </div>
                </div>
              </div>
      ))}
    </div>
  )
}

export default Result