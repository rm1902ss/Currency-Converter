const addCurrencyBtn = document.querySelector('.add-currency-btn')
const addCurrencyList = document.querySelector('.add-currency-list')
const currenciesList = document.querySelector('.currencies')

const api = 'https://api.exchangeratesapi.io/latest'

const initiallyDisplayedCurrencies = ["USD", "EUR", "BGN"]
let baseCurrency
let baseCurrencyAmount


let currencies = [
    {
      name: "US Dollar",
      abbreviation: "USD",
      symbol: "\u0024",
      flagURL: "http://www.geonames.org/flags/l/us.gif"
    },
    {
      name: "Euro",
      abbreviation: "EUR",
      symbol: "\u20AC",
      flagURL: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
    },
    {
      name: "Japanese Yen",
      abbreviation: "JPY",
      symbol: "\u00A5",
      flagURL: "http://www.geonames.org/flags/l/jp.gif"
    },
    {
      name: "British Pound",
      abbreviation: "GBP",
      symbol: "\u00A3",
      flagURL: "http://www.geonames.org/flags/l/uk.gif"
    },
    {
      name: "Australian Dollar",
      abbreviation: "AUD",
      symbol: "\u0024",
      flagURL: "http://www.geonames.org/flags/l/au.gif"
    },
    {
      name: "Canadian Dollar",
      abbreviation: "CAD",
      symbol: "\u0024",
      flagURL: "http://www.geonames.org/flags/l/ca.gif"
    },
    {
      name: "Swiss Franc",
      abbreviation: "CHF",
      symbol: "\u0043\u0048\u0046",
      flagURL: "http://www.geonames.org/flags/l/ch.gif"
    },
    {
      name: "Chinese Yuan Renminbi",
      abbreviation: "CNY",
      symbol: "\u00A5",
      flagURL: "http://www.geonames.org/flags/l/cn.gif"
    },
    {
      name: "Swedish Krona",
      abbreviation: "SEK",
      symbol: "\u006B\u0072",
      flagURL: "http://www.geonames.org/flags/l/se.gif"
    },
    {
      name: "New Zealand Dollar",
      abbreviation: "NZD",
      symbol: "\u0024",
      flagURL: "http://www.geonames.org/flags/l/nz.gif"
    },
    {
      name: "Mexican Peso",
      abbreviation: "MXN",
      symbol: "\u0024",
      flagURL: "http://www.geonames.org/flags/l/mx.gif"
    },
    {
      name: "Singapore Dollar",
      abbreviation: "SGD",
      symbol: "\u0024",
      flagURL: "http://www.geonames.org/flags/l/sg.gif"
    },
    {
      name: "Hong Kong Dollar",
      abbreviation: "HKD",
      symbol: "\u0024",
      flagURL: "http://www.geonames.org/flags/l/hk.gif"
    },
    {
      name: "Norwegian Krone",
      abbreviation: "NOK",
      symbol: "\u006B\u0072",
      flagURL: "http://www.geonames.org/flags/l/no.gif"
    },
    {
      name: "South Korean Won",
      abbreviation: "KRW",
      symbol: "\u20A9",
      flagURL: "http://www.geonames.org/flags/l/kr.gif"
    },
    {
      name: "Turkish Lira",
      abbreviation: "TRY",
      symbol: "\u20BA",
      flagURL: "http://www.geonames.org/flags/l/tr.gif"
    },
    {
      name: "Russian Ruble",
      abbreviation: "RUB",
      symbol: "\u20BD",
      flagURL: "http://www.geonames.org/flags/l/ru.gif"
    },
    {
      name: "Indian Rupee",
      abbreviation: "INR",
      symbol: "\u20B9",
      flagURL: "http://www.geonames.org/flags/l/in.gif"
    },
    {
      name: "Brazilian Real",
      abbreviation: "BRL",
      symbol: "\u0052\u0024",
      flagURL: "http://www.geonames.org/flags/l/br.gif"
    },
    {
      name: "South African Rand",
      abbreviation: "ZAR",
      symbol: "\u0052",
      flagURL: "http://www.geonames.org/flags/l/za.gif"
    },
    {
      name: "Philippine Peso",
      abbreviation: "PHP",
      symbol: "\u20B1",
      flagURL: "http://www.geonames.org/flags/l/ph.gif"
    },
    {
      name: "Czech Koruna",
      abbreviation: "CZK",
      symbol: "\u004B\u010D",
      flagURL: "http://www.geonames.org/flags/l/cz.gif"
    },
    {
      name: "Indonesian Rupiah",
      abbreviation: "IDR",
      symbol: "\u0052\u0070",
      flagURL: "http://www.geonames.org/flags/l/id.gif"
    },
    {
      name: "Malaysian Ringgit",
      abbreviation: "MYR",
      symbol: "\u0052\u004D",
      flagURL: "http://www.geonames.org/flags/l/my.gif"
    },
    {
      name: "Hungarian Forint",
      abbreviation: "HUF",
      symbol: "\u0046\u0074",
      flagURL: "http://www.geonames.org/flags/l/hu.gif"
    },
    {
      name: "Icelandic Krona",
      abbreviation: "ISK",
      symbol: "\u006B\u0072",
      flagURL: "http://www.geonames.org/flags/l/is.gif"
    },
    {
      name: "Croatian Kuna",
      abbreviation: "HRK",
      symbol: "\u006B\u006E",
      flagURL: "http://www.geonames.org/flags/l/hr.gif"
    },
    {
      name: "Bulgarian Lev",
      abbreviation: "BGN",
      symbol: "\u043B\u0432",
      flagURL: "http://www.geonames.org/flags/l/bg.gif"
    },
    {
      name: "Romanian Leu",
      abbreviation: "RON",
      symbol: "\u006C\u0065\u0069",
      flagURL: "http://www.geonames.org/flags/l/ro.gif"
    },
    {
      name: "Danish Krone",
      abbreviation: "DKK",
      symbol: "\u006B\u0072",
      flagURL: "http://www.geonames.org/flags/l/dk.gif"
    },
    {
      name: "Thai Baht",
      abbreviation: "THB",
      symbol: "\u0E3F",
      flagURL: "http://www.geonames.org/flags/l/th.gif"
    },
    {
      name: "Polish Zloty",
      abbreviation: "PLN",
      symbol: "\u007A\u0142",
      flagURL: "http://www.geonames.org/flags/l/pl.gif"
    },
    {
      name: "Israeli Shekel",
      abbreviation: "ILS",
      symbol: "\u20AA",
      flagURL: "http://www.geonames.org/flags/l/il.gif"
    }
]

addCurrencyBtn.addEventListener('click', addCurrencyBtnClick) 

function addCurrencyBtnClick(event) {
    addCurrencyBtn.classList.toggle('open')
}

addCurrencyList.addEventListener('click', addCurrencyListClick)

function addCurrencyListClick(event) {
  const clickedListItem = event.target.closest('li')
  if(!clickedListItem.classList.contains('disabled')) {
    const newCurrency = currencies.find(c => c.abbreviation === clickedListItem.getAttribute('data-currency'))
    if(newCurrency) newCurrenciesListItem(newCurrency)
  }
}

currenciesList.addEventListener('click', currenciesListClick)

function currenciesListClick(event) {
  if(event.target.classList.contains('close')) {
    const parentNode = event.target.parentNode.parentNode
    parentNode.remove()
    addCurrencyList.querySelector(`[data-currency=${parentNode.id}]`).classList.remove('disabled')
    if(parentNode.classList.contains('base-currency')) {
      const newBaseCurrencyLi = currenciesList.querySelector('.currency')
      if(newBaseCurrencyLi) {
        setNewBaseCurrency(newBaseCurrencyLi)
        baseCurrencyAmount = Number(newBaseCurrencyLi.querySelector('.input input').value)
      }
    }
  }
}

function setNewBaseCurrency(newBaseCurrencyLi) {
  newBaseCurrencyLi.classList.add('base-currency')
  baseCurrency = newBaseCurrencyLi.id
  const baseCurrencyRate = currencies.find(currency => currency.abbreviation === baseCurrency).rate
  currenciesList.querySelectorAll('.currency').forEach(currencyLi => {
    const currencyRate = currencies.find(currency => currency.abbreviation === currencyLi.id).rate
    const exchangeRate = currencyLi.id === baseCurrency ? 1 : (currencyRate / baseCurrencyRate).toFixed(4)
    currencyLi.querySelector('.base-currency-rate').textContent =  `1 ${baseCurrency} = ${exchangeRate} ${currencyLi.id}`
  })
}

currenciesList.addEventListener('input', currenciesListInputChange)

function currenciesListInputChange(event) {
  const isNewBaseCurrency = event.target.closest('li').id !== baseCurrency
  if(isNewBaseCurrency) {
    currenciesList.querySelector(`#${baseCurrency}`).classList.remove('base-currency')
    setNewBaseCurrency(event.target.closest('li'))
  }
  const newBaseCurrencyAmount = isNaN(event.target.value) ? 0 : Number(event.target.value)
  if(baseCurrencyAmount !== newBaseCurrencyAmount || isNewBaseCurrency) {
    baseCurrencyAmount = newBaseCurrencyAmount
    const baseCurrencyRate = currencies.find(currency => currency.abbreviation === baseCurrency).rate
    currenciesList.querySelectorAll('.currency').forEach(currencyLi => {
      if(currencyLi.id !== baseCurrency) {
        const currencyRate = currencies.find(currency => currency.abbreviation === currencyLi.id).rate
        const exchangeRate = currencyLi.id === baseCurrency ? 1 : (currencyRate / baseCurrencyRate).toFixed(4)
        currencyLi.querySelector('.input input').value = exchangeRate*baseCurrencyAmount!==0 ? (exchangeRate * baseCurrencyAmount).toFixed(4) : ''
      } 
    })
  }
}

function populateAddCurrencyList() {
    for(let i=0; i<currencies.length; i++) {
        addCurrencyList.insertAdjacentHTML('beforeend',
        `<li data-currency=${currencies[i].abbreviation}>
            <img src=${currencies[i].flagURL} class="flag"><span>${currencies[i].abbreviation} - ${currencies[i].name}</span>
        </li>`
        )
    }
}

function populateCurrenciesList() {
    for(let i=0; i<initiallyDisplayedCurrencies.length; i++) {
        const currency = currencies.find(c => c.abbreviation === initiallyDisplayedCurrencies[i])
        if(currency) newCurrenciesListItem(currency)
    }
}

function newCurrenciesListItem(currency) {
    if(currenciesList.childElementCount === 0) {
        baseCurrency = currency.abbreviation
        baseCurrencyAmount = 0
    }
    addCurrencyList.querySelector(`[data-currency=${currency.abbreviation}]`).classList.add('disabled')
    const baseCurrencyRate = currencies.find(c => c.abbreviation === baseCurrency).rate
    const exchangeRate = currency.abbreviation === baseCurrency ? 1 : (currency.rate / baseCurrencyRate).toFixed(4)
    const inputValue = baseCurrencyAmount ? (baseCurrencyAmount * exchangeRate).toFixed(4) : ""

    currenciesList.insertAdjacentHTML("beforeend",
    `<li class="currency ${currency.abbreviation === baseCurrency ? "base-currency" : ""}" id=${currency.abbreviation}>
        <div class="flag">
            <img src=${currency.flagURL}>
        </div>
        <div class="currency-symbol">
            <span >${currency.symbol}</span>
        </div>
        <div class="info">
            <p class="input"><input placeholder="0.0000" value=${inputValue}></p>
            <p class="currency-name">${currency.abbreviation} - ${currency.name}</p>
            <p class="base-currency-rate">1 ${baseCurrency} = ${exchangeRate} ${currency.abbreviation}</p>
        </div>
        <div class="close-div">
            <span class="close">&times;</span>
        </div> 
    </li>`
    )
}

fetch(api)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.querySelector('.date').textContent = data.date.split('-').reverse().join('-')
    data.rates["EUR"] = 1
    currencies = currencies.filter(currency => data.rates[currency.abbreviation])
    currencies.forEach(currency => currency.rate = data.rates[currency.abbreviation])
    populateAddCurrencyList()
    populateCurrenciesList()
  })
  .catch(error => console.log(error))
