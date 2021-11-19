fetch("https://assets.fc-dev.instore.oakley.com/assets/products/products.json")
  .then((response) => response.json())
  .then((products) => {
    var upc = window.location.search.substring(1);

    const product = products.find((prod) => prod.UPC === upc);
    console.log(product);

    let cardPdp = document.getElementById("productsPdp-wrapper");

    cardPdp.innerHTML = `
    <p>${product.name}</p>
    <div class="griddp">
      <img alt="Product${product.UPC}" src="https://picsum.photos/1000/600?random=${product.UPC}"/>
      <div>
        <p>${product.price.current.value} USD</p>
        <p><span>Name:</span> ${product.name}</p>
        <p><span>Lens color:</span> Green</p>
        <p><span>Size:</span> Standard</p>
        <p><span>UPC:</span> ${product.UPC}</p>
      </div>
    </div>
    `;

    let variantsDiv = document.getElementById("variants");

    variantsDiv.innerHTML += ` <img alt="Product${product.UPC}" src="https://picsum.photos/1000/600?random=${product.UPC}"/>`;

    product.variants.map(
      (v) =>
        (variantsDiv.innerHTML += `
    <img alt="Product${v.UPC}" src="https://picsum.photos/1000/600?random=${v.UPC}"/>
    `)
    );
  });

// `<div class="containertitle">
//         <h5 class="typographytitle">${variant.name}</h5>
//     </div>
//     <div class="containermedia">
//         <img class="" src="https://picsum.photos/1000/600?random=${variant.UPC}" />
//     </div>
//     <div class="containertext">
//
//         <button class="buttonaddcart">Add to cart</button>
//     </div>
//     <div class="containercolor">
//         <p class="typographycolors">Available colors:</p>
//         <div class="gridimage">
//             <img alt="Product${product.UPC}" src="https://picsum.photos/1000/600?random=${product.UPC}"
//                 onClick={()=> setVariant(product)}
//             />
//             {product.variants.map((prod) => (
//             <img key={prod.UPC} alt="Product${prod.UPC}" src="https://picsum.photos/1000/600?random=${prod.UPC}"
//                 onClick={()=> setVariant(prod)}
//             />
//             ))}`
