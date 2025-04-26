class AdviceGenerator {
  constructor(apiUrl, adviceNSelector, adviceSelector, buttonSelector) {
    this.apiUrl = apiUrl;
    this.adviceNElement = document.querySelector(adviceNSelector);
    this.adviceElement = document.querySelector(adviceSelector);
    this.button = document.querySelector(buttonSelector);

    this.button.addEventListener('click', () => this.updateAdvice());
  }

  async fetchAdvice() {
    const response = await fetch(this.apiUrl);
    const data = await response.json();
    return data.slip;
  }

  async updateAdvice() {
    const slip = await this.fetchAdvice();
    this.adviceNElement.innerHTML = `ADVICE #${slip.id}`;
    this.adviceElement.innerHTML = `“ ${slip.advice} ”`;

    this.adviceNElement.classList.add('active-advice-number');
    this.adviceElement.classList.add('active-advice-text');
  }
}

const generator = new AdviceGenerator(
  "https://api.adviceslip.com/advice",
  ".AdviceN",
  ".Advice",
  ".btn"
);
