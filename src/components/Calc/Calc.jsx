import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Calc = () => {
    
    const [value, setValue] = useState('');

    const handleButton = (valuebut) => {
        setValue(value + valuebut);
    };

    const handleDelete = () => {
        setValue(value.slice(0, -1));
    };

    const handleClear = () => {
        setValue('');
    };
    
    return (
        <div>
            <div className="mb-1">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    readOnly
                    value={value}
                />
            </div>
            <div className="d-flex justify-content-between m-2">
                {[1, 4, 7].map((number) => (
                    <div className="col-4" key={number}>
                        <button
                            className="btn btn-primary btn-lg mb-2"
                            onClick={() => handleButton(number)}
                        >
                            {number}
                        </button>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-between m-2">
                {[2, 5, 8].map((number) => (
                    <div className="col-4" key={number}>
                        <button
                            className="btn btn-primary btn-lg mb-2"
                            onClick={() => handleButton(number)}
                        >
                            {number}
                        </button>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-between m-2">
                {[3, 6, 9].map((number) => (
                    <div className="col-4" key={number}>
                        <button
                            className="btn btn-primary btn-lg mb-2"
                            onClick={() => handleButton(number)}
                        >
                            {number}
                        </button>
                    </div>
                ))}
            </div>
            <div className="row">
                {["+", "-", "*", "/"].map((operation) => (
                    <div className="col-3 text-center" key={operation}>
                        <button className="btn btn-light btn-lg mb-2">{operation}</button>
                    </div>
                ))}
            </div>
            <div className='row'>
                <button className='btn btn-ligth btn-lg mb-6'>=</button>
            </div>
            <div className="row">
                <div className="col-12 text-right mr-5">
                    <button className="btn btn-danger btn-lg mr-2" onClick={handleDelete}>
                        Borrar
                    </button>
                    <button className="btn btn-dark btn-lg" onClick={handleClear}>
                        Limpiar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Calc