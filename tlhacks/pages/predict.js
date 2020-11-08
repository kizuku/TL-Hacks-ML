import React from 'react';
import Navbar from '../src/components/Navbar.js'
import PredictionForm from '../src/components/PredictionForm.js'


function onChange() {
    // deal with change in a select
}

function PredictPage() {
    return(
        <div>
            <Navbar/>
            <div id="content">
                <PredictionForm/>
            </div>
        </div>
    )
}

export default PredictPage 