import React from 'react';
import './../ModuleTest.css';
import ChartSample from '../ChartSample';

class ModuleTest extends React.Component {

    render() {

        return (
            <body>
            <link rel="stylesheet" href="https://www.google.com"/>
                <table class="navigation">
                    <button class="testing123" onClick="">
                        Previous Module
                    </button>
                    <button class="testing456" disabled="true">
                        Next Module    
                    </button>
                </table>
                <table class="moduleContent">
                    <div class="textblock_placeholder">
                        <p class="placeholder">Module 3</p>
                    </div>
                    <div class="credits">
                        <p class="credits_earnable" id="credits_earnable">Credits you can earn: 4</p>
                        <p class="credits_total" id="credits_total">Total credits: 0</p>
                    </div>
                    <div class="next_content">
                        <button onClick={() => nextContent()} class="continue" id="continue_module" hidden="true">Next page</button>
                    </div>
                </table>
                <div class="testingQuiz" id="testingQuiz">
                    <h3>Which of these stocks would go up based off of the algorithm discussed in Module 2?</h3>
                    <p>Choose 1 answer</p>
                    <hr />

                    <div id='block-11'>
                        <label for='option-11'>
                            <input type='radio' name='option' value='Coke' id='option-11'/>
                        Coke</label>
                        <span id='result-11'></span>
                    </div>
                    <hr />

                    <div id='block-12'>
                        <label for='option-12'>
                            <input type='radio' name='option' value='General Electric' id='option-12' />
                        General Electric</label>
                        <span id='result-12'></span>
                    </div>
                    <hr />

                    <div id='block-13'>
                        <label for='option-13'>
                            <input type='radio' name='option' value='Apple' id='option-13'/>
                        Apple</label>
                        <span id='result-13'></span>
                    </div>
                    <hr />

                    <div id='block-14'>
                        <label for='option-14'>
                            <input type='radio' name='option' value='FaceBook' id='option-14'/>
                        FaceBook</label>
                        <span id='result-14'></span>
                    </div>
                    <hr />
                </div>
                <button type='button' id="submitButton" onClick={() => displayAnswer1()} class="submitButton">Submit</button>
                <ChartSample />
            </body>

        );
    }

}

function displayAnswer1() {
    if (document.getElementById('option-11').checked) {
        document.getElementById('block-11').style.border = '3px solid #85C55A';
        document.getElementById('result-11').style.color = '#85C55A';
        document.getElementById('result-11').innerHTML = ' Correct!';
        addCredit();
    }
    if (document.getElementById('option-12').checked) {
        document.getElementById('block-12').style.border = '3px solid #F26D26';
        document.getElementById('result-12').style.color = '#F26D26';
        document.getElementById('result-12').innerHTML = ' Incorrect!';
        document.getElementById('option-12').checked = false;
        document.getElementById('option-12').disabled = true;
        deductCredit();
    }
    if (document.getElementById('option-13').checked) {
        document.getElementById('block-13').style.border = '3px solid #F26D26';
        document.getElementById('result-13').style.color = '#F26D26';
        document.getElementById('result-13').innerHTML = ' Incorrect!';
        document.getElementById('option-13').checked = false;
        document.getElementById('option-13').disabled = true;
        deductCredit();
    }
    if (document.getElementById('option-14').checked) {
        document.getElementById('block-14').style.border = '3px solid #F26D26';
        document.getElementById('result-14').style.color = '#F26D26';
        document.getElementById('result-14').innerHTML = ' Incorrect!';
        document.getElementById('option-14').checked = false;
        document.getElementById('option-14').disabled = true;
        deductCredit();
    }
}

function deductCredit() {

    var element = document.getElementById('credits_earnable').innerHTML;
    element = element.slice(-1);

    document.getElementById('credits_earnable').innerHTML = "Credits you can earn: " + (element - 1);

}

function addCredit() {

    var element = document.getElementById('credits_earnable').innerHTML;
    element = element.slice(-1);
    document.getElementById('credits_earnable').innerHTML = "Credits you can earn: 0";

    document.getElementById('credits_total').innerHTML = "Total credits: " + element;

    document.getElementById('option-14').disabled = true;
    document.getElementById('option-13').disabled = true;
    document.getElementById('option-12').disabled = true;
    document.getElementById('option-11').disabled = true;
    document.getElementById('option-11').checked = false;

    document.getElementById("continue_module").hidden = false;
}

function nextContent() {

    document.getElementById("testingQuiz").remove();
    document.getElementById("submitButton").hidden = true;
    document.getElementById("continue_module").disabled = true;

    const p = new ModuleTest2();
    p.render();

}

class ModuleTest2 extends React.Component {

    render(){

        return (

                <p id="testtext" class="testtext">This is a test</p>

            );

    }

}

export default ModuleTest