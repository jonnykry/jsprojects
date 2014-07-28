var input = process.argv;

var output = fib(Number(input[2]));

console.log(output);

function fib(val) {
	if( isNaN(val) ) {
		return 'Value was NaN.  Please enter a number.';
	}

	if(val == 1) {
		return 1;
	}
	else if(val == 0) {
		return 0;
	}

	return fib(val-1) + fib(val-2);	
}

