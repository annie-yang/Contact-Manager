// "simple mechanism for distributing actions to the store" -- Flux
// deals with data flow
// "application architecture for building client-side web applications" -- Flux

import {Dispatcher} from 'flux';

const AppDispatcher = new Dispatcher();

export default AppDispatcher;
