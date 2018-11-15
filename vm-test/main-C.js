const vm = require('vm');
const fs = require('fs');

const content = fs.readFileSync('./scriptModule.js');
let resultContext = vm.createContext({
	module:{},
	require:require	   
})
vm.runInNewContext(content,resultContext)
