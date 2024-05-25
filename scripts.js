const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") //Outras moedas

    console.log(currencySelect.value)
    const dolarToday = 5.17
    const euroToday = 5.62
    const libraToday = 6.58
    const bitcoinToday = 354.294


    if (currencySelect.value == "dolar") { // Se o select estiver selecionado no valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") { // Se o select estiver selecionado no valor de euro, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }


    if (currencySelect.value == "libra") { 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GPB"
        }).format(inputCurrencyValue / libraToday)

    }
    if (currencySelect.value == "bitcoin") { 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)

    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)



}

function changeCurrency(){
 const currencyName = document.getElementById("currency-name")
 const currencyImage = document.querySelector(".currency-img")

 if (currencySelect.value == "dolar"){
    currencyName.innerHTML = "Dólar americano"
    currencyImage.src = "./assets/Dólar.png"
 }

 if (currencySelect.value == "euro"){
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/Euro.png"
 }

 if (currencySelect.value == "libra"){
    currencyName.innerHTML = "Libra"
    currencyImage.src = "./assets/libra.png"
 }

 if (currencySelect.value == "bitcoin"){
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./assets/bitcoin 1.png"
 }



  convertValues()
}

currencySelect.addEventListener("change", changeCurrency) 
convertButton.addEventListener("click", convertValues)