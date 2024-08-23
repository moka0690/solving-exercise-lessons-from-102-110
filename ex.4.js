// const counterDiv3 = document.querySelector(".counterDiv3");
// const counter2 = parseInt(counterDiv3.textContent);

// for (let i = counter2; i >= 0; i--) {
//   c
//   setTimeout(() => {
//     counterDiv3.textContent = i;
//     if (i === 5) {
//       window.open("https://elzero.org", "_blank", "width=600,height=400");
//     }
//   }, (counter2 - i) * 1000);
//   }


const counterDiv3 = document.querySelector(".counterDiv3");
const counter2 = parseInt(counterDiv3.textContent);

for (let i = counter2; i >= 0; i--) {
   setTimeout(() => {
    const finalValue = i; 
    counterDiv3.textContent = finalValue;

    if (finalValue === 5) {
      window.open("https://elzero.org", "_blank", "width=600,height=400");
    }
  }, (counter2 - i) * 1000);
}







