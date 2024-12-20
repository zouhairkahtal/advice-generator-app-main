const api = "https://api.adviceslip.com/advice";
const AdviceN = document.querySelector('.AdviceN');
const Advice = document.querySelector('.Advice');
const btn = document.querySelector('.btn');


async function getData() {
  const response = await fetch(api);
  const data = await response.json();
  return data.slip; 
}


btn.addEventListener("click", async () => {
  const slip = await getData(); 
  AdviceN.innerHTML = `ADVICE #${slip.id}`;
  Advice.innerHTML = `${slip.advice}`;
});
