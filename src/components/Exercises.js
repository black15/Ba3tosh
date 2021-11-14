import React from 'react'

const Exercises = () => {
    const exercises = [
        {id: 1, module:"Physic", teacher:"terma"},
        {id: 2, module:"Math", teacher:"ba3d"},
        {id: 3, module:"Science", teacher:"termat"},
    ]
    return (
        <div>
            <div className="options">
                <h3>Module</h3>
                <h3>Teacher</h3>
            </div>
            {exercises.map(exercise => {
                return(
                <div key={exercise.id} className="exercises">
                    <h4>{exercise.module}</h4>{exercise.teacher}
                </div>
                )
            })}
        </div>
    )
}

export default Exercises
