fetch("https://assets.fc-dev.instore.oakley.com/assets/products/products.json")
  .then((response) => response.json())
  .then((products) => {
    var upc = window.location.search.substring(1);

    const product = products.find((prod) => prod.UPC === upc);
    console.log(product);

    let cardPdp = document.getElementById("productsPdp-wrapper");

    cardPdp.innerHTML = `
    <div class="containertitle">
                <p>${product.name}</p>
            </div>
            <div class="containermedia">
                <img alt="Product${product.UPC}" src="https://picsum.photos/1000/600?random=${product.UPC}" />
            </div>
            <div class="containertext">
                <p>${product.price.current.value} USD</p>
                <p><span>Name:</span> ${product.name}</p>
                <p><span>Lens color:</span> Green</p>
                <p><span>Size:</span> Standard</p>
                <p><span>UPC:</span> ${product.UPC}</p>
                <button>Add to cart</button>
            </div>
    `;

    let variantsDiv = document.getElementById("variants");

    variantsDiv.innerHTML += `
    <div class="containercolor">
                    <p>Available colors:</p>
                    <img alt="Product${product.UPC}" src="https://picsum.photos/1000/600?random=${product.UPC}" />
                </div>
    `;

    product.variants.map(
      (v) =>
        (variantsDiv.innerHTML += `
    <img alt="Product${v.UPC}" src="https://picsum.photos/1000/600?random=${v.UPC}"/>
    `)
    );
  });
