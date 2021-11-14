import React from 'react'
import Exercises from './Exercises'
import './Home.css';

const Home = () => {
    return (
        <div className="container">
            <div className="home">
                <div className="table">
                    <table width="100%" >
                        <tbody>
                            <tr className="tbl-head">
                                <td>Module</td>
                                <td>Name</td>
                                <td>Date</td>
                                <td>Likes</td>
                                <td>Downloads</td>
                            </tr>
                            <tr>
                                <td>Physics</td>
                                <td>Cours de zeb de biologie avec td</td>
                                <td>2021/02/22</td>
                                <td>3labali bik</td>
                                <td>techti zeb</td>
                            </tr>
                            <tr>
                                <td>Math</td>
                                <td>9alwa</td>
                                <td>2020/01/28</td>
                                <td>22</td>
                                <td>5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home
