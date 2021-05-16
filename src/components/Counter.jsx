import React from 'react'

export default function Counter ({count, setCount}) {
    return (
        <div>
            <span>
                <b>
                    Count:
                </b>
                {count}
            </span>

            <br/>

            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}