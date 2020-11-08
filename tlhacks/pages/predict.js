import React from 'react';
import Navbar from '../src/components/Navbar.js'

function PredictPage() {
    return(
        <div>
            <Navbar/>
            <div id="content">
                <div id="team1" class="team">
                    <div class="teamselect">
                        <p>Team A: </p>
                        <select name="teamA" id="teamA">
                            <option value="test1">Test 1</option>
                            <option value="test2">Test 2</option>
                            <option value="test3">Test 3</option>
                        </select>
                    </div>
                    <div class="champselect topselect">
                        <p>Top B: </p>
                        <select name="teamB" id="teamB">
                            <option value="top4">Top 4</option>
                            <option value="top5">Top 5</option>
                            <option value="top6">Top 6</option>
                        </select>
                    </div>
                    <div class="jgselect champselect">
                        <p>Top B: </p>
                        <select name="teamB" id="teamB">
                            <option value="top4">Top 4</option>
                            <option value="top5">Top 5</option>
                            <option value="top6">Top 6</option>
                        </select>
                    </div>
                    <div class="champselect midselect">
                        <p>Top B: </p>
                        <select name="teamB" id="teamB">
                            <option value="top4">Top 4</option>
                            <option value="top5">Top 5</option>
                            <option value="top6">Top 6</option>
                        </select>
                    </div>
                    <div class="champselect botselect">
                        <p>Top B: </p>
                        <select name="teamB" id="teamB">
                            <option value="top4">Top 4</option>
                            <option value="top5">Top 5</option>
                            <option value="top6">Top 6</option>
                        </select>
                    </div>
                    <div class="champselect supselect">
                        <p>Top B: </p>
                        <select name="teamB" id="teamB">
                            <option value="top4">Top 4</option>
                            <option value="top5">Top 5</option>
                            <option value="top6">Top 6</option>
                        </select>
                    </div>
                </div>
                <div id="team2" class="team">
                    <div class="teamselect">
                        <p>Team B: </p>
                        <select name="teamB" id="teamB">
                            <option value="test4">Test 4</option>
                            <option value="test5">Test 5</option>
                            <option value="test6">Test 6</option>
                        </select>
                    </div>
                    <div class="champselect topselect">
                        <p>Top B: </p>
                        <select name="teamB" id="teamB">
                            <option value="top4">Top 4</option>
                            <option value="top5">Top 5</option>
                            <option value="top6">Top 6</option>
                        </select>
                    </div>
                    <div class="champselect jgselect">
                        <p>Top B: </p>
                        <select name="teamB" id="teamB">
                            <option value="top4">Top 4</option>
                            <option value="top5">Top 5</option>
                            <option value="top6">Top 6</option>
                        </select>
                    </div>
                    <div class="champselect midselect">
                        <p>Top B: </p>
                        <select name="teamB" id="teamB">
                            <option value="top4">Top 4</option>
                            <option value="top5">Top 5</option>
                            <option value="top6">Top 6</option>
                        </select>
                    </div>
                    <div class="champselect botselect">
                        <p>Top B: </p>
                        <select name="teamB" id="teamB">
                            <option value="top4">Top 4</option>
                            <option value="top5">Top 5</option>
                            <option value="top6">Top 6</option>
                        </select>
                    </div>
                    <div class="champselect supselect">
                        <p>Top B: </p>
                        <select name="teamB" id="teamB">
                            <option value="top4">Top 4</option>
                            <option value="top5">Top 5</option>
                            <option value="top6">Top 6</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PredictPage 