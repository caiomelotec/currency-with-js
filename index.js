let moneyAmount = Math.pow(2000, 100); // Initial value input

const brazil = {
  lang: "pt-BR",
  currency: "BRL",
  rate: {
    toEur: 0.19,
    toInr: 17.19,
  },
};
const india = {
  lang: "en-IN",
  currency: "INR",
  rate: {
    //toEur: exchangeRateBrlToEur,
    toBrl: 0.06,
    toEur: 0.01,
    toInr: 1,
  },
};
const germany = {
  lang: "de-DE",
  currency: "EUR",
  rate: {
    toBrl: 5.21,
    toInr: 89.74,
    toEur: 1,
  },
};

function convertMoney(
  /* inicial value*/ amount,
  /*from which country*/ rate,
  /* to which country*/ country
) {
  if (rate) {
    return (amount * rate).toLocaleString(country.lang, {
      style: "currency",
      currency: country.currency,
    });
  }
}

console.log(convertMoney(moneyAmount, germany.rate.toBrl, brazil));
