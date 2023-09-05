import ColaGenrator from './js/colaGenerator.js';
import VendingMachineFunc from './js/vendingMachineFunc.js';

const colaGenerator = new ColaGenrator();
await colaGenerator.setup();

const vendingMachineFunc = new VendingMachineFunc();
vendingMachineFunc.setup();
