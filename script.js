fetch("https://assets.fc-dev.instore.oakley.com/assets/products/products.json")
  .then((response) => response.json())
  .then((products) => {
    function populateProducts(products) {
      let productsWrapper = document.querySelector("#products-wrapper");

      products.forEach((product) => {
        let card = document.createElement("div");

        let chip;

        if (product.availability.stock > 0) {
          chip = `<span class="chip"> in stock </span>`;
        } else {
          chip = `<span class="chip"> out of stock </span>`;
        }

        card.innerHTML = `
        <div class="card" key=${product.UPC}>
        <a class="cardlink" href="./Pdp.html?${product.UPC}" >
            <img class="cardmedia" src="https://via.placeholder.com/350" />
            <div class="cardcontent">
                <h5 class="typography">${product.name}</h5>
                <p class="typographyprice">$ ${product.price.current.value}</p>
                <p class="typographystock">
                    ${chip}
                </p>
            </div>
        </a>
    </div>
            `;

        productsWrapper.appendChild(card);
      });
    }

    populateProducts(products);

  });
