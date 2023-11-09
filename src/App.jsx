import { useState } from "react"
import data from "../data"
import { nanoid } from "nanoid"

function App() {
    const [count, setCount] = useState(1)
    const [text, setText] = useState([])

    const handleSubmit = e => {
        e.preventDefault()
        let amount = parseInt(count)
        setText(data.slice(0, amount))
    }
    return (
        <section>
            <div className="container mx-auto px-8 py-16">
                <h1 className="text-3xl font-bold text-center mb-4">
                    Ipsum Generator
                </h1>
                <form className="text-center" onSubmit={handleSubmit}>
                    <label htmlFor="amount" className="me-4">
                        Paragraphs:
                    </label>
                    <input
                        type="number"
                        name="amount"
                        id="amount"
                        min="1"
                        step="1"
                        max="8"
                        value={count}
                        onChange={e => setCount(e.target.value)}
                        className="border-solid border-gray-300 border-2 rounded-md ps-2 pe-1 active:outline-green-500 focus:outline-green-500 me-4"
                    />
                    <button
                        type="submit"
                        className="bg-green-600 text-white px-4 py-1 rounded-md hover:bg-green-700">
                        Generate
                    </button>
                </form>
                <article>
                    {text.map(item => {
                        return (
                            <p
                                key={nanoid()}
                                className="max-w-xl mx-auto mb-4 mt-4">
                                {item}
                            </p>
                        )
                    })}
                </article>
            </div>
        </section>
    )
}

export default App
