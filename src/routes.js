import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';
import StepOne from './components/Wizard/StepOne';
import StepTwo from './components/Wizard/StepTwo';
import StepThree from './components/Wizard/StepThree';


export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/wizard' component={Wizard}/>
        <Route path='/step1' component={StepOne}/>
        <Route path='/step2' component={StepTwo}/>
        <Route path='/step3' component={StepThree}/>
    </Switch>
)