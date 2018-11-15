const vm = require('vm');
const fs = require('fs');

const content = fs.readFileSync('./scriptModule.js');
let resultContext = {
	module:{},
}
vm.runInNewContext(content,resultContext)
