`use strict`;

import StartComponent from "./components/start/start.component";
import CalculatorComponent from "./components/calculator/calculator.component";
import {Router} from './modules/router';

const router = new Router('.app');

router
    .use('/', StartComponent)
    .use('/calculator', CalculatorComponent)
    .start();

window.router = router;
