'use client'
import React, { useState } from 'react';
import Footer from '../components/footer';

const Calculator = () => {
    const [error, setError] = useState('');
    const [firstNumber, setFirstNumber] = useState();
    const [secondNumber, setSecondNumber] = useState();
    const [output, setOutput] = useState();

    const checkValidation = (val) => {
        console.log(typeof val);
        if (isNaN(val)) {
            setError('Please enter only numeric value');
            setOutput('');
        } else {
            setError('');
            setFirstNumber(val);
        }
    }

    const addNumbers = () => {
        const sum = Number(firstNumber) + Number(secondNumber);
        setOutput(sum);
    }

    return (
        <>
            <div className='container'>
                <h1>Calculator Page</h1>
                <div className='input-fields'>
                    <input name='input-text' onChange={(e) => checkValidation(e.target.value)} />
                    {error && <span className='error'>{error}</span>}
                    <input name='input-number' type='number' onChange={(e) => setSecondNumber(e.target.value)} />
                    <button onClick={addNumbers} disabled={error}>Add Two Numbers</button>
                    <div className='output'>
                        Total: {output}
                    </div>
                </div>
            </div>
            <Footer prevPagePath={'/'} nextPagePath={'/navbar'} isNextBtnShow isPrevBtnShow />
        </>
    );
}
 
export default Calculator;