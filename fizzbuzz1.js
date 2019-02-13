// Building our fizz Buzz algorithm - code

function fizzBuzz(num) {
    for (var i = 1; i < num; i++) {
        if (i % 15 === 0){
            console.log('fizzBuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        };
    };
};

fizzBuzz(30);