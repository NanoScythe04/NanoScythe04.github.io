$.ajax({
    url: "https://dummyjson.com/products",
    method: "GET",
    dataType: "json",
    success: function(response) {

        let products = response.products;

        $.each(products, function(index, product) {

            let tags = product.tags ? product.tags.join(", ") : "N/A";

            let dimensions = product.dimensions 
                ? `${product.dimensions.width}W × ${product.dimensions.height}H × ${product.dimensions.depth}D`
                : "N/A";

            let reviewsHTML = "";
            if (product.reviews && product.reviews.length > 0) {
                $.each(product.reviews, function(i, review) {
                    reviewsHTML += `
                        <div class="review">
                            ⭐ ${review.rating} - ${review.comment}
                            <br>
                            <small><strong>${review.reviewerName}</strong></small>
                            <br>
                            <small style="color:black;">${review.reviewerEmail}</small>
                        </div>
                    `;
                });
            } else {
                reviewsHTML = "No reviews available";
            }

            let imagesHTML = "";
            if (product.images && product.images.length > 0) {
                let galleryImages = product.images.filter(img => img !== product.thumbnail);

                if (galleryImages.length > 0) {
                    imagesHTML = `<div class="images-container">`;
                    galleryImages.forEach(img => {
                        imagesHTML += `<img src="${img}" alt="${product.title} image">`;
                    });
                    imagesHTML += `</div>`;
                }
            }

            let discountedPrice = product.price - 
                (product.price * product.discountPercentage / 100);

            let metaHTML = product.meta 
                ? `<div><strong>Created At:</strong> ${product.meta.createdAt}</div>
                   <div><strong>Updated At:</strong> ${product.meta.updatedAt}</div>
                   <div><strong>Barcode:</strong> ${product.meta.barcode}</div>
                   <div><strong>QR Code:</strong> <a href="${product.meta.qrCode}" target="_blank">View QR</a></div>
                   <br>`
                : "";

            let productCard = `
                <div class="product-card">
                    <div class="product-title">${product.title}</div>
                    <p>${product.description}</p>

                    ${imagesHTML}

                    <div><strong>Brand:</strong> ${product.brand}</div>
                    <div><strong>Category:</strong> ${product.category}</div>
                    <div><strong>SKU:</strong> ${product.sku}</div>
                    <div><strong>Tags:</strong> ${tags}</div>

                    <div><strong>Weight:</strong> ${product.weight}</div>
                    <div><strong>Dimensions:</strong> ${dimensions}</div>

                    <div><strong>Stock:</strong> ${product.stock}</div>
                    <div><strong>Status:</strong> ${product.availabilityStatus}</div>
                    <div><strong>Minimum Order Quantity:</strong> ${product.minimumOrderQuantity}</div>
                    <div><strong>Return Policy:</strong> ${product.returnPolicy}</div>
                    <div><strong>Warranty:</strong> ${product.warrantyInformation}</div>
                    <div><strong>Shipping:</strong> ${product.shippingInformation}</div>

                    <hr>

                    <div><strong>Price:</strong> $${product.price}</div>
                    <div><strong>Discount:</strong> ${product.discountPercentage}%</div>
                    <div><strong>Discounted Price:</strong> $${discountedPrice.toFixed(2)}</div>
                    <div><strong>Rating:</strong> ⭐ ${product.rating}</div>

                    <hr>

                    <div><strong>Reviews:</strong></div>
                    ${reviewsHTML}

                    <hr>

                    <div><strong>Meta Information:</strong></div>
                    ${metaHTML}
                </div>
            `;

            $("#products").append(productCard);
        });
    },
    error: function() {
        $("#products").html("<p>Failed to load products.</p>");
    }
});