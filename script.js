let searchbtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
searchbtn.addEventListener("click", () => {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL).then((Response) => Response.json()).then((data) => {
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(
            Object.values(data[0].languages).toString().split(",").join(",")
        );
        result.innerHTML = `
            <img src="${data[0].flags.svg}"class="flag-img">
            <h2>${data[0].name.common}</h2>
            
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>capital:</h4>
                     <span>${data[0].capital[0]}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>continents:</h4>
                     <span>${data[0].continents[0]}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>population:</h4>
                     <span>${data[0].population}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>currencies:</h4>
                     <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]} </span>
                </div>
            </div>
            <div class="wrapper">
            <div class="data-wrapper">
                <h4>common languages:</h4>
                 <span>${Object.values(data[0].languages).toString().split(",").join(",")} </span>
            </div>
        </div>
            
            `;
    });
});