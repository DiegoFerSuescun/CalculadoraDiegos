import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Calc = () => {
    
    const [ value, setValue ]= useState('');

    const handleButon = (valuebut) =>{
        setValue( value + valuebut);
    };

    const handleDelete = () =>{
        setValue(value.slice(0, -1));
    };

    const handleClear= () => {
        setValue('')
    }
    
    return (
        <div >
            <div className="mb-4">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    readOnly
                    value={value}
                />
            </div>
            <div className="row">
                {[1, 2, 3].map((number) => (
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
                {[4, 5, 6].map((number) => (
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
                {[7, 8, 9].map((number) => (
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
            <div className="row">
                <div className="col-12 text-right">
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

export default Calc;
