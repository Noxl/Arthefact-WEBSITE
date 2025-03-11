// Main script file for Arthéfact tea website
document.addEventListener('DOMContentLoaded', function() {
  // ======== MENU FUNCTIONALITY ========
  
  // Toggle mobile menu
  document.getElementById('menuToggle').addEventListener('click', function() {
    const menuItems = document.getElementById('menuItems');
    menuItems.classList.toggle('active');
  });

  // Toggle search bar
  document.getElementById('searchToggle').addEventListener('click', function(event) {
    event.preventDefault();
    const searchWrapper = document.getElementById('searchWrapper');
    searchWrapper.classList.toggle('active');
  });

  // Handle dropdown menu behavior
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const teaDropdown = document.getElementById('teaDropdown');
  
  // Only use click event for mobile
  dropdownToggle.addEventListener('click', function(event) {
    if (window.innerWidth <= 768) {
      event.preventDefault();
      teaDropdown.classList.toggle('active');
    }
  });

  // Reset menu and search display on resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      document.getElementById('menuItems').classList.remove('active');
      document.getElementById('teaDropdown').classList.remove('active');
      document.getElementById('searchWrapper').classList.remove('active');
    }
  });

  // ======== SNIPCART INTEGRATION ========

  // Initialize Snipcart elements when DOM is loaded
  setupAuthButtonToggle();
  setupCartItemCount();
  
  // Set up Snipcart event listeners when Snipcart is ready
  document.addEventListener('snipcart.ready', function() {
    // First clear any existing event listeners to avoid duplicates
    Snipcart.events.off('customer.signedin');
    Snipcart.events.off('customer.signedout');
    Snipcart.events.off('cart.updated');
    
    // Register the event listeners
    Snipcart.events.on('customer.signedin', updateAuthButton);
    Snipcart.events.on('customer.signedout', updateAuthButton);
    Snipcart.events.on('cart.updated', updateCartItemCount);
    
    // Force an update immediately
    setTimeout(updateAuthButton, 500);
    setTimeout(updateCartItemCount, 500);
  });
});

/**
 * Creates and sets up the sign-out button for Snipcart authentication
 * Uses direct DOM elements for labels instead of CSS ::after
 */
function setupAuthButtonToggle() {
  // Create sign-out button element
  const signOutButton = document.createElement('button');
  signOutButton.id = 'signout-menu-bouton';
  signOutButton.className = 'snipcart-customer-signout';
  signOutButton.style.display = 'none'; // Hide initially
  
  // Create a container for the icon
  const iconContainer = document.createElement('div');
  iconContainer.className = 'button-icon-container';
  
  // Create image for sign-out button
  const signOutImg = document.createElement('img');
  signOutImg.src = 'img/icons/account-logout.png';
  signOutImg.alt = 'My Account';
  signOutImg.className = 'account-icon';
  
  // Create label element
  const labelElement = document.createElement('span');
  labelElement.className = 'button-label';
  labelElement.textContent = 'My Account';
  
  // Append elements to the button
  iconContainer.appendChild(signOutImg);
  signOutButton.appendChild(iconContainer);
  signOutButton.appendChild(labelElement);
  
  // Do the same for the sign-in button (get the existing button and update its structure)
  const signInButton = document.getElementById('signin-menu-bouton');
  signInButton.innerHTML = ''; // Clear existing content
  
  const signInIconContainer = document.createElement('div');
  signInIconContainer.className = 'button-icon-container';
  
  const signInImg = document.createElement('img');
  signInImg.src = 'img/icons/account.png';
  signInImg.alt = 'Sign In';
  signInImg.className = 'account-icon';
  
  const signInLabel = document.createElement('span');
  signInLabel.className = 'button-label';
  signInLabel.textContent = 'Sign In';
  
  signInIconContainer.appendChild(signInImg);
  signInButton.appendChild(signInIconContainer);
  signInButton.appendChild(signInLabel);
  
  // Insert the sign-out button after the sign-in button
  signInButton.parentNode.insertBefore(signOutButton, signInButton.nextSibling);
  
  // Do the same for the cart button
  const cartButton = document.getElementById('cart-menu-bouton');
  if (cartButton) {
    cartButton.innerHTML = ''; // Clear existing content
    
    const cartIconContainer = document.createElement('div');
    cartIconContainer.className = 'button-icon-container';
    
    const cartImg = document.createElement('img');
    cartImg.src = 'img/icons/cart.png';
    cartImg.alt = 'Cart';
    cartImg.className = 'cart-icon';
    
    const cartCount = document.createElement('span');
    cartCount.className = 'cart-count';
    cartCount.textContent = '0';
    
    const cartLabel = document.createElement('span');
    cartLabel.className = 'button-label';
    cartLabel.textContent = 'Cart';
    
    cartIconContainer.appendChild(cartImg);
    cartIconContainer.appendChild(cartCount);
    cartButton.appendChild(cartIconContainer);
    cartButton.appendChild(cartLabel);
  }
}

/**
 * Updates the visibility of sign-in/sign-out buttons based on auth status
 * Updates actual DOM elements for labels
 */
function updateAuthButton() {
  const signInButton = document.getElementById('signin-menu-bouton');
  const signOutButton = document.getElementById('signout-menu-bouton');
  
  if (!signInButton || !signOutButton) return;
  
  // Get label elements
  const signInLabel = signInButton.querySelector('.button-label');
  const signOutLabel = signOutButton.querySelector('.button-label');
  
  if (!signInLabel || !signOutLabel) return;
  
  Snipcart.api.user.getUser()
    .then(user => {
      if (user && user.email) {
        // User is signed in
        console.log('User is signed in:', user.email);
        signInButton.style.display = 'none';
        signOutButton.style.display = 'flex';
        
        // Update label text directly
        signOutLabel.textContent = 'My Account';
      } else {
        // User is not signed in
        console.log('User is not signed in');
        signInButton.style.display = 'flex';
        signOutButton.style.display = 'none';
        
        // Update label text directly
        signInLabel.textContent = 'Sign In';
      }
    })
    .catch(error => {
      console.error('Error checking Snipcart user status:', error);
      signInButton.style.display = 'flex';
      signOutButton.style.display = 'none';
    });
}

/**
 * Sets up the cart count indicator
 */
function setupCartItemCount() {
  // The cart count is now created in setupAuthButtonToggle
  const cartButton = document.getElementById('cart-menu-bouton');
  if (cartButton) {
    cartButton.setAttribute('data-item-count', '0');
  }
}

/**
 * Updates the cart count indicator based on Snipcart cart
 */
function updateCartItemCount() {
  const cartButton = document.getElementById('cart-menu-bouton');
  if (!cartButton) return;
  
  Snipcart.api.cart.get()
    .then(cart => {
      const itemCount = cart.items.count;
      cartButton.setAttribute('data-item-count', itemCount.toString());
      
      // Update the text in the count span
      const cartCount = cartButton.querySelector('.cart-count');
      if (cartCount) {
        cartCount.textContent = itemCount.toString();
      }
    })
    .catch(error => {
      console.error('Error getting cart items:', error);
    });
}
