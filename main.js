var numbers = document.querySelectorAll('.number'), // add a buttons to script
operations = document.querySelectorAll('.operator'),
decimalBtn = document.getElementById('decimal'),
clearBtns = document.querySelectorAll('.clear-btn'),
result = document.getElementById('result'),
display = document.getElementById('display'), // add operations
MemoryCurrentNumber = 0,
MemoryNewNumber = false,
MemoryPendingOperation =  '';
	//Счетчик выборки событий по кнопке
for (var i = 0; i < numbers.length ; i++) {
	var number = numbers[i];  

	number.addEventListener ('click', function (e) {
	numberPress(e.target.textContent)
	});
	};
	//Счетчик кнопок очистки
for (var i = 0; i < clearBtns.length; i++) {
	var clearBtn = clearBtns[i];   

clearBtn.addEventListener ('click', function(e) {
	clear(e.srcElement.id)	
});
};
	// Счетчик кнопки
for (var i = 0; i < operations.length ; i++) {
	var operation = operations[i];  

	operation.addEventListener ('click', function (e) {
	operationPress(e.target.textContent);
});
};



decimalBtn.addEventListener ('click', decimal)



function numberPress (number) {
	if (MemoryNewNumber) {
		display.value = number;
		MemoryNewNumber = false;
	} else {
	if (display.value === "0") {
		display.value = number
	} else {
		display.value += number;
	};
}; 
};
function operationPress (op) {
	let localOperationMemory = display.value;
	if (MemoryNewNumber && MemoryPendingOperation !== '=') {
		display.value = MemoryCurrentNumber
		} else {
			MemoryNewNumber = true;
			if (MemoryPendingOperation === '+' ) {
			MemoryCurrentNumber += parseFloat (localOperationMemory);
			} else if( MemoryPendingOperation === '-') {
			MemoryCurrentNumber -= parseFloat(localOperationMemory);
			} else if (MemoryPendingOperation === '*') {
			MemoryCurrentNumber *= parseFloat (localOperationMemory);
			} else if (MemoryPendingOperation === "/") {
			MemoryCurrentNumber /= parseFloat (localOperationMemory);
			} else if (MemoryPendingOperation === "x²") {
			MemoryCurrentNumber **= parseFloat(localOperationMemory);
			} else {
			MemoryCurrentNumber = parseFloat(localOperationMemory);
			};
			display.value = MemoryCurrentNumber
			MemoryPendingOperation = op;
			if( (MemoryCurrentNumber).toString().indexOf('.') != -1 ) 
                MemoryCurrentNumber = parseFloat((MemoryCurrentNumber).toFixed(10));
			display.value = MemoryCurrentNumber;
			

		};
		console.log(op)
	}; 

function decimal (argument) {
	let localDecimalMemory = display.value;
	if (MemoryNewNumber) {
		localDecimalMemory = "0.";
		MemoryNewNumber = false;
	} else {
			if (localDecimalMemory.indexOf('.') === -1 ){
			localDecimalMemory += '.';
		}
	}
display.value = localDecimalMemory
};

function clear(id) {
if (id === 'ce') {
	display.value = '0';
	MemoryNewNumber = true;

} else if (id === "c") {
	display.value = '0';
	MemoryNewNumber = true;
	MemoryCurrentNumber = 0;
	MemoryPendingOperation = '';
};
console.log("Click button with  " + id);
};

