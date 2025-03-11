<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Arthéfact</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="preload" href="fonts/amandine-regular.otf" as="font" type="font/otf" crossorigin>
  <link rel="preload" href="fonts/montserrat-light.ttf" as="font" type="font/ttf" crossorigin>
  <link rel="icon" href="img/logo.png" type="image/png">
</head>

<?php include('header.php')?>

<body>
  <!-- Content area placeholder -->
  <div class="content-area">
    <h1>Our Premium Tea Collection</h1>
    <p>Discover our selection of premium organic teas, carefully sourced from the finest tea gardens around the world.</p>

    <!-- Product listing with Snipcart integration -->
    <div class="product-container">
      <div class="product-card">
        <img src="img/products/green-tea.jpg" alt="Premium Green Tea" class="product-image">
        <div class="product-info">
          <h3>Premium Green Tea</h3>
          <p class="product-description">A refreshing green tea with delicate floral notes</p>
          <p class="product-price">€12.95</p>
          <button 
            class="add-to-cart-btn snipcart-add-item"
            data-item-id="green-tea-1"
            data-item-price="12.95"
            data-item-url="/products/green-tea"
            data-item-description="Premium organic green tea with delicate floral notes"
            data-item-image="img/products/green-tea.jpg"
            data-item-name="Premium Green Tea"
            data-item-weight="100"
            data-item-taxes="VAT"
            data-item-quantity="1">
            Add to Cart
          </button>
        </div>
      </div>
      
      <div class="product-card">
        <img src="img/products/black-tea.jpg" alt="Earl Grey Black Tea" class="product-image">
        <div class="product-info">
          <h3>Earl Grey Black Tea</h3>
          <p class="product-description">A classic black tea with bergamot essence</p>
          <p class="product-price">€14.50</p>
          <button 
            class="add-to-cart-btn snipcart-add-item"
            data-item-id="black-tea-1"
            data-item-price="14.50"
            data-item-url="/products/black-tea"
            data-item-description="Classic Earl Grey black tea with bergamot essence"
            data-item-image="img/products/black-tea.jpg"
            data-item-name="Earl Grey Black Tea"
            data-item-weight="100"
            data-item-taxes="VAT"
            data-item-quantity="1">
            Add to Cart
          </button>
        </div>
      </div>
      
      <div class="product-card">
        <img src="img/products/herbal-tea.jpg" alt="Chamomile Herbal Tea" class="product-image">
        <div class="product-info">
          <h3>Chamomile Herbal Tea</h3>
          <p class="product-description">Soothing caffeine-free herbal blend</p>
          <p class="product-price">€9.95</p>
          <button 
            class="add-to-cart-btn snipcart-add-item"
            data-item-id="herbal-tea-1"
            data-item-price="9.95"
            data-item-url="/products/herbal-tea"
            data-item-description="Soothing caffeine-free chamomile herbal blend"
            data-item-image="img/products/herbal-tea.jpg"
            data-item-name="Chamomile Herbal Tea"
            data-item-weight="75"
            data-item-taxes="VAT"
            data-item-quantity="1">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</body>

  <!-- Footer -->
  <?php include('footer.php')?>

</html>