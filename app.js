// if divisible by 3 : fizz
// divisble by 5: Buzz
// divisble by both: Fizz Buzz

let content = "";

const isDiviz = (number, denominator) => number % denominator === 0;
for (i = 1; i <= 100; i++) {
  if (isDiviz(i, 15)) {
    content += '<li>FizzBuzz</li>';
    console.log("FizzBuzz");
  } else if (isDiviz(i, 5)) {
    console.log("Fizz");
    content += '<li>Buzz</li>';
  } else if (isDiviz(i, 3)) {
    console.log("Buzz");
    content += '<li>Buzz</li>';
  } else {
    console.log(i);
    content += `<li>${i}</li>`;
  }
}

const container = document.querySelector('main')

container.innerHTML = `<ul>${content}</ul>`;
