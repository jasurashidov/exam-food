let btn = document.querySelector(".btn");

btn.addEventListener("click", () =>{
    let productName = document.querySelector(".productName")
    let productPrice = document.querySelector(".productPrice");
    let productImage = document.querySelector(".productImage");
    let productChef = document.querySelector(".productChef");
    let restaurant = document.querySelector(".restaurant");
    
    let cardsContainer = document.querySelector(".container-cards");
    cardsContainer.classList.add("cards-container", "my-3")


    let card = document.createElement("div")
    card.classList.add("row", "card-container")

    let col = document.createElement("div")
    col.classList.add("col-3")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("imgContainer", "col-3")

    let img = document.createElement("img")
    img.classList.add("img")
    img.src = productImage.value

    let cardTexts = document.createElement("div")
    cardTexts.classList.add("card-texts", "col-6")

    let prName = document.createElement("p")
    prName.classList.add("prName")
    prName.innerHTML = "Taom nomi: " + productName.value
    
    let prPrice = document.createElement("p");
    prPrice.classList.add("prPrice")
    prPrice.innerHTML = "Taom narxi: " + productPrice.value
    
    let prChef = document.createElement("p");
    prChef.classList.add("prChef")
    prChef.innerHTML = "Taom oshpazi: " + productChef.value;

    let prRestaurant = document.createElement("p");
    prRestaurant.classList.add("prRestaurant")
    prRestaurant.innerHTML = "Taom restorani: " + restaurant.value

    let yellowDate = document.createElement("div");
    yellowDate.classList.add("date", "col-3")

    let currentDate = new Date
    yellowDate.innerHTML = currentDate
    
    cardsContainer.appendChild(card)
    card.appendChild(imgContainer)
    imgContainer.appendChild(img)
    card.appendChild(cardTexts)
    cardTexts.appendChild(prName)
    cardTexts.appendChild(prPrice)
    cardTexts.appendChild(prChef)
    cardTexts.appendChild(prRestaurant)
    card.append(yellowDate)


    productName.value = ""
    productPrice.value = ""
    productChef.value = ""
    productImage.value = "";
    restaurant.value = "";
})