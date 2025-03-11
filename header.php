<header class="navbar-container">
    <!-- Logo container -->
    <div class="logo-container">
      <img src="img/logo.png" alt="Art Thé Logo" class="logo">
    </div>

    <!-- Navigation container -->
    <div class="nav-container">
      <!-- Top navbar with search and social -->
      <div class="top-navbar">
        <div class="brand-info">Arthéfact</div>
        <div class="language-selector">
          <a href="#" class="active">EN</a>
          <a href="#">FR</a>
        </div>
        <div class="search-container">
          <div class="search-wrapper" id="searchWrapper">
            <input type="text" class="search-bar" placeholder="Search...">
          </div>
          <button class="search-toggle" id="searchToggle">🔍</button>
        </div>
        <div class="social-links">
          <a href="#" class="social-icon">
            <img src="img/icons/social/icon-insta-dot.png" alt="Instagram" class="icon-default">
            <img src="img/icons/social/icon-insta-color.png" alt="Instagram" class="icon-hover">
          </a>
          <a href="#" class="social-icon">
            <img src="img/icons/social/icon-tiktok-dot.png" alt="TikTok" class="icon-default">
            <img src="img/icons/social/icon-tiktok-color.png" alt="TikTok" class="icon-hover">
          </a>
          <a href="#" class="social-icon">
            <img src="img/icons/social/icon-youtube-dot.png" alt="YouTube" class="icon-default">
            <img src="img/icons/social/icon-youtube-color.png" alt="YouTube" class="icon-hover">
          </a>
        </div>
      </div>

      <!-- Main navigation menu -->
      <nav class="menu">
        <button class="menu-toggle" id="menuToggle">☰</button>
        <button id="signin-menu-bouton" class="snipcart-customer-signin" data-label="Sign In">
          <img src="img/icons/account.png" alt="Sign In" class="account-icon">
        </button>
        <button id="cart-menu-bouton" class="snipcart-checkout" data-label="Cart">
          <img src="img/icons/cart.png" alt="Cart" class="cart-icon">
          <span class="cart-count">0</span>
        </button>
        <div class="menu-items" id="menuItems">
          <ul>
            <li><a href="#">HOME</a></li>
            <li class="dropdown" id="teaDropdown">
              <a href="#" class="dropdown-toggle">TEA</a>
              <ul class="submenu">
                <li><a href="#">BLACK TEA</a></li>
                <li><a href="#">GREEN TEA</a></li>
                <li><a href="#">WHITE TEA</a></li>
                <li><a href="#">DARK TEA</a></li>
              </ul>
            </li>
            <li><a href="#">SHOP</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </div>  
      </nav>
    </div>
  </header>