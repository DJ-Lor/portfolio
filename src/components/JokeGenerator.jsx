import { useState } from 'react'
import Button from './Button'

export default function JokeGenerator () {
    const [joke, setJoke] = useState('')

    const fetchJoke = async () => {
        try {
            const response = await fetch(
                `https://icanhazdadjoke.com/search?`,
                {
                    headers: {
                        Accept: 'application/json',
                    },
                }
            )
            if (!response.ok) throw new Error('network error')

            const data = await response.json()
            return data.results // returns an array of joke objects
        } catch (err) {
            console.log(err.error)
        }
    }

    const pickRandom = (arr) => {
        const randomIndex = Math.floor(Math.random() * arr.length)
        return arr[randomIndex]
    }

    const generateJoke = async (e) => {
        e.preventDefault()

        const jokesArray = await fetchJoke()

        const joke = pickRandom(jokesArray).joke // joke objects are in the form { id, joke }
        setJoke(joke)
        
    }

    return (
        <div className="max-w-screen-lg mx-auto p-4 mb-24 mt-24 font-google">
          <div className="w-full h-64 pb-full rounded-xl bg-floral-white flex items-center justify-center">
            <div className="grid h-screen text-xl text-black place-items-center">
              <div className="">
                <form
                  onSubmit={generateJoke}
                  className="w-3/4 mx-auto text-center"
                >
                <Button onClick={generateJoke}>Click for a Dad Joke</Button>

                </form>
                <p className="mt-6 sm:text-sm md:text-md lg:text-xl m-8 font-light text-center">
                  {joke}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
      
}
