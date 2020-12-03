`use strict`;

import StartComponent from "./components/start/start.component";
import CalculatorComponent from "./components/calculator/calculator.component";
import {Router} from './modules/router';
import HelperComponent from "./components/helper/helper.component";

const router = new Router('.app');

router
    .use('/', StartComponent)
    .use('/calculator', CalculatorComponent)
    .use('/helper', HelperComponent)
    .start();

window.router = router;
