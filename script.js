function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

function updateOutput(message) {
    document.getElementById("output").textContent = message;
	console.log(message);
}

getNumbers()
    .then((numbers) => {
        const evenNumbers = numbers.filter(num => num % 2 === 0);

        updateOutput("Even numbers: " + evenNumbers.join(", "));
    
        return new Promise((resolve) => {
            setTimeout(() => {
                const doubledEvenNumbers = evenNumbers.map(num => num * 2);
                resolve(doubledEvenNumbers);
            }, 2000); 
        });
    })
    .then((doubledNumbers) => {
        updateOutput("Doubled even numbers: " + doubledNumbers.join(", "));
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
