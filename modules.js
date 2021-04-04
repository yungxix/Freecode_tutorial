//CommonJS, every file is module (by default)
//Modules = Encapsulated Code (Only share minimum)

const names = require('./3.module');
const sayHi = require('./4-names');
const data = require('./')




 sayHi('Timi');
 sayHi(names.John);
 sayHi(names.peter);



