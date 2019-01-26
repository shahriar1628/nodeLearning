var rect = require('./rect');
function measureArea(l,b){
	rect(l,b,(err,object) => {
		if(err){
			console.log(err.message);
		} 
		else {
                      console.log(object.area());
                      console.log(object.perimeter());
		}

	});
};
measureArea(2,4);
console.log("last line");

