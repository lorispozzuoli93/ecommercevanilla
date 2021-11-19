// fetch("https://assets.fc-dev.instore.oakley.com/assets/products/products.json")
//   .then((response) => response.json())
//   .then((products) => {
//     var upc = window.location.search.substring(1);

//     const product = products.find((prod) => prod.UPC === upc);
//     console.log(product);

//     let cardPdp = document.getElementById("pdp");

//     cardPdp.innerHTML = `
//         ${product}
//             `;

//     cardPdp.appendChild(product);
//   });

fetch("https://assets.fc-dev.instore.oakley.com/assets/products/products.json")
  .then((response) => response.json())
  .then((products) => {
    function populateProductsPdp(products) {
      let productsPdpWrapper = document.querySelector("#productsPdp-wrapper");

      

      products.forEach((product) => {
        let cardPdp = document.createElement("div");

        let variant = product.find((prod) => prod.variants === variant);

        cardPdp.innerHTML = `<div class="containertitle">
          <h5 class="typographytitle">${variant.name}</h5>
      </div>
      <div class="containermedia">
          <img class="" src="https://picsum.photos/1000/600?random=${variant.UPC}" />
      </div>
      <div class="containertext">
          <p class="typographypdp">{variant.name}</p>
          <p class="typographypricepdp">
              {variant.price.current.value} USD
          </p>
          <p class="typographyname">
              <span>Name:</span> {variant.name}
          </p>
          <p class="typographyname">
              <span>Lens color:</span> Green
          </p>
          <p class="typographyname">
              <span>Size:</span> Standard
          </p>
          <p class="typographyname">
              <span>UPC:</span> {variant.UPC}
          </p>
          <button class="buttonaddcart">Add to cart</button>
      </div>
      <div class="containercolor">
          <p class="typographycolors">Available colors:</p>
          <div class="gridimage">
              <img alt="Product${product.UPC}" src="https://picsum.photos/1000/600?random=${product.UPC}"
                  onClick={()=> setVariant(product)}
              />
              {product.variants.map((prod) => (
              <img key={prod.UPC} alt="Product${prod.UPC}" src="https://picsum.photos/1000/600?random=${prod.UPC}"
                  onClick={()=> setVariant(prod)}
              />
              ))}
          </div>
      </div>
                  `;

        productsPdpWrapper.appendChild(cardPdp);
      });
    }

    populateProductsPdp(products);
  });
