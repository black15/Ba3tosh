import { useState, useEffect } from 'react';
import './Add.css';

const Add = () => {

    const [name, setName] = useState('');
    const [module, setModule] = useState('');

    const formSub = (e) => {
        e.preventDefault();
        console.log("gg")
    }
    const getName = (e) => {
        setName(
            e.target.value
        )
    }
    const getModule = (e) => {
        setModule(
            e.target.value
        )
    }

    return (
        <div className="container">
            <form onSubmit={formSub}>
                <div className="add-form">
                    <div className="form-child">
                        <label>Name </label>
                        <input type="text"/>
                    </div>
                    <div className="form-child">
                        <label>Module </label>
                        <select onClick={getModule}>
                            <option></option>
                            <option value="physic">Physics</option>
                            <option value="maths">Maths</option>
                            <option value="bio">Bio</option>
                            <option value="info">Info</option>
                            <option value="algo">Algo</option>
                        </select>
                    </div>
                    <div className="form-child">
                        <label>Upload : </label>
                        <input type="file" />
                    </div>
                </div>
                <div className="add-btn">
                    <input className="add-sub" type="submit" value="SAVE"  onClick={getName}/>
                </div>
            </form>
            {name}
            {module}
        </div>
    )
}

export default Add
