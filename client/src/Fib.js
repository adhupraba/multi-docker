import { useState, useEffect } from 'react'
import axios from 'axios'

const Fib = () => {
    const [seenIndexes, setSeenIndexes] = useState([])
    const [values, setValues] = useState({})
    const [index, setIndex] = useState('')
    
    useEffect(() => {
        fetchValues()
        fetchIndexes()
    }, [])
    
    const fetchValues = async () => {
        const vals = await axios.get('/api/values/current')
        setValues(vals.data)
    }
    
    const fetchIndexes = async () => {
        const seenIdxs = await axios.get('/api/values/all')
        setSeenIndexes(seenIdxs.data)
    }
    
    const submitHandler = async (e) => {
        e.preventDefault()
        
        await axios.post('/api/values', { index: index })
        setIndex('')
    }
    
    const inputHandler = (e) => {
        setIndex(e.target.value)
    }
    
    const renderSeenIndexes = () => {
        return seenIndexes.map(({ number }) => number).join(', ')
    }
    
    const renderValues = () => {
        const entries = []
        
        for (let key in values) {
            entries.push(
                <div key={ key }>
                    For index { key } I calculated { values[key] }
                </div>
            )
        }
        
        return entries
    }
    
    return (
        <div>
            <form onSubmit={ submitHandler }>
                <label>Enter your index:</label>
                <input type="text" value={ index } onChange={ inputHandler } />
                <button type='submit'>Submit</button>
            </form>
            
            <h3>Indexes I have seen:</h3>
            { renderSeenIndexes() }
            
            <h3>Calculated Values:</h3>
            { renderValues() }
        </div>
    )
}

export default Fib
