class Store {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    this.products = [];
    this.slideInterval = null;
    this.currentSlide = 0;
    this.init();
  }

  async init() {
    await this.loadProducts();
    this.renderProducts();
    this.setupEventListeners();
    this.updateCartCount();
    this.initSlideshow();
  }

  async loadProducts() {
    try {
      const response = await fetch('store.json');
      if (!response.ok) throw new Error('Failed to load products');
      const data = await response.json();
      this.products = data.products || this.getFallbackProducts();
    } catch (error) {
      console.error("Error loading products:", error);
      this.products = this.getFallbackProducts();
    }
  }

  getFallbackProducts() {
    return [
      {
        id: 1,
        title: "Premium Whey Protein",
        price: 29.99,
        category: "supplements",
        image: "assets/whey-protein.jpg",
        description: "24g protein per serving with digestive enzymes",
        rating: { rate: 4.8, count: 120 }
      },
      {
        id: 2,
        title: "Resistance Bands Set",
        price: 24.99,
        category: "equipment",
        image: "assets/resistance-bands.jpg",
        description: "5 bands with different resistance levels (10-50 lbs)",
        rating: { rate: 4.5, count: 85 }
      },
      {
        id: 3,
        title: "Performance T-Shirt",
        price: 19.99,
        category: "apparel",
        image: "assets/tshirt.jpg",
        description: "Moisture-wicking fabric with odor control",
        rating: { rate: 4.2, count: 64 }
      },
      {
        id: 4,
        title: "Pre-Workout Energizer",
        price: 34.99,
        category: "supplements",
        image: "assets/preworkout.jpg",
        description: "Enhances focus and endurance with 200mg caffeine",
        rating: { rate: 4.7, count: 93 }
      },
      {
        id: 5,
        title: "Adjustable Dumbbells",
        price: 199.99,
        category: "equipment",
        image: "assets/dumbbells.jpg",
        description: "5-50 lbs adjustable in 5 lb increments",
        rating: { rate: 4.9, count: 42 }
      },
      {
        id: 6,
        title: "Training Hoodie",
        price: 39.99,
        category: "apparel",
        image: "assets/hoodie.jpg",
        description: "Breathable fabric with thumb holes",
        rating: { rate: 4.4, count: 37 }
      },
      {
      "id": 7,
      "title": "BCAA Powder",
      "price": 24.99,
      "category": "supplements",
      "image": "assets/bcaa.jpg",
      "rating": { "rate": 4.3, "count": 78 },
      "description": "2:1:1 ratio with electrolytes, tropical flavor"
    },
    {
      "id": 8,
      "title": "Yoga Mat",
      "price": 29.99,
      "category": "equipment",
      "image": "assets/yoga-mat.jpg",
      "rating": { "rate": 4.6, "count": 56 },
      "description": "Non-slip surface with carrying strap"
    },
    {
      "id": 9,
      "title": "Compression Shorts",
      "price": 27.99,
      "category": "apparel",
      "image": "assets/shorts.jpg",
      "rating": { "rate": 4.1, "count": 49 },
      "description": "4-way stretch fabric with pocket"
    },
    {
      "id": 10,
      "title": "Creatine Monohydrate",
      "price": 18.99,
      "category": "supplements",
      "image": "assets/creatine.jpg",
      "rating": { "rate": 4.7, "count": 112 },
      "description": "Micronized for better absorption"
    },
    {
      "id": 11,
      "title": "Jump Rope",
      "price": 14.99,
      "category": "equipment",
      "image": "assets/jump-rope.jpg",
      "rating": { "rate": 4.0, "count": 31 },
      "description": "Weighted handles with adjustable length"
    },
    {
      "id": 12,
      "title": "Gym Bag",
      "price": 44.99,
      "category": "apparel",
      "image": "assets/gym-bag.jpg",
      "rating": { "rate": 4.5, "count": 28 },
      "description": "Multiple compartments with shoe pocket"
    },
    {
      "id": 13,
      "title": "Mass Gainer",
      "price": 49.99,
      "category": "supplements",
      "image": "assets/mass-gainer.jpg",
      "rating": { "rate": 4.2, "count": 45 },
      "description": "1250 calories per serving with 50g protein"
    },
    {
      "id": 14,
      "title": "Foam Roller",
      "price": 22.99,
      "category": "equipment",
      "image": "assets/foam-roller.jpg",
      "rating": { "rate": 4.4, "count": 39 },
      "description": "High-density EPP foam for muscle recovery"
    },
    {
      "id": 15,
      "title": "Training Gloves",
      "price": 19.99,
      "category": "apparel",
      "image": "assets/gloves.jpg",
      "rating": { "rate": 4.3, "count": 52 },
      "description": "Padded palms with wrist support"
    }
  ]
}

  renderProducts() {
    const grid = document.querySelector('.products-grid');
    if (!grid) return;
    
    grid.innerHTML = this.products.map(product => `
      <div class="product-card" data-category="${product.category}" data-id="${product.id}">
        ${product.rating?.rate > 4.5 ? '<div class="product-badge">Bestseller</div>' : ''}
        <img src="${product.image}" alt="${product.title}" loading="lazy">
        <h3>${product.title}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-meta">
          <span class="price">$${product.price.toFixed(2)}</span>
          <div class="rating">
            ${this.renderStars(product.rating?.rate || 4)}
            <span>(${product.rating?.count || 0})</span>
          </div>
        </div>
        <button class="btn cart-btn">Add to Cart</button>
      </div>
    `).join('');
  }

  renderStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    
    return `
      ${'<i class="fas fa-star"></i>'.repeat(fullStars)}
      ${halfStar ? '<i class="fas fa-star-half-alt"></i>' : ''}
      ${'<i class="far fa-star"></i>'.repeat(emptyStars)}
    `;
  }

  setupEventListeners() {
    document.addEventListener('click', e => {
      if (e.target.classList.contains('cart-btn')) {
        this.addToCart(e.target.closest('.product-card'));
      }
    });

    document.getElementById('categoryFilter')?.addEventListener('change', () => this.filterProducts());
    document.getElementById('searchInput')?.addEventListener('input', () => this.filterProducts());

    document.querySelector('[href="#cart"]')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleCartModal();
    });

    document.querySelector('.close-modal')?.addEventListener('click', () => {
      this.toggleCartModal(false);
    });

    document.querySelector('.checkout-btn')?.addEventListener('click', () => {
      alert('Checkout functionality would be implemented here!');
    });

    document.addEventListener('click', e => {
      if (e.target.classList.contains('remove-item')) {
        const itemId = parseInt(e.target.closest('.cart-item').dataset.id);
        this.removeFromCart(itemId);
      }
    });
  }

  initSlideshow() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) return;

    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }

    const showSlide = (index) => {
      slides.forEach(slide => slide.style.opacity = 0);
      dots.forEach(dot => dot.classList.remove('active'));
      
      slides[index].style.opacity = 1;
      dots[index].classList.add('active');
      this.currentSlide = index;
    };

    const autoAdvance = () => {
      let nextSlide = (this.currentSlide + 1) % slides.length;
      showSlide(nextSlide);
    };

    showSlide(0);
    this.slideInterval = setInterval(autoAdvance, 5000);

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        clearInterval(this.slideInterval);
        showSlide(index);
        this.slideInterval = setInterval(autoAdvance, 5000);
      });
    });

    document.querySelector('.slide-btn.prev')?.addEventListener('click', () => {
      clearInterval(this.slideInterval);
      showSlide((this.currentSlide - 1 + slides.length) % slides.length);
      this.slideInterval = setInterval(autoAdvance, 5000);
    });

    document.querySelector('.slide-btn.next')?.addEventListener('click', () => {
      clearInterval(this.slideInterval);
      autoAdvance();
      this.slideInterval = setInterval(autoAdvance, 5000);
    });
  }

  addToCart(productCard) {
    const productId = parseInt(productCard.dataset.id);
    const product = this.products.find(p => p.id === productId);
    
    if (!product) return;
    
    const existingItem = this.cart.find(item => item.id === productId);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({
        ...product,
        quantity: 1
      });
    }
    
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.updateCartCount();
    this.showAlert(`${product.title} added to cart!`);
    
    if (document.getElementById('cartModal').classList.contains('active')) {
      this.renderCart();
    }
  }

  filterProducts() {
    const category = document.getElementById('categoryFilter').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    document.querySelectorAll('.product-card').forEach(card => {
      const matchesCategory = category === 'all' || card.dataset.category === category;
      const matchesSearch = card.querySelector('h3').textContent.toLowerCase().includes(searchTerm);
      card.style.display = matchesCategory && matchesSearch ? 'block' : 'none';
    });
  }

  toggleCartModal(show = true) {
    const modal = document.getElementById('cartModal');
    modal.classList.toggle('active', show);
    
    if (show) {
      this.renderCart();
    }
  }

  renderCart() {
    const cartItems = document.querySelector('.cart-items');
    const totalAmount = document.querySelector('.total-amount');
    
    if (this.cart.length === 0) {
      cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
      totalAmount.textContent = '$0.00';
      return;
    }
    
    cartItems.innerHTML = this.cart.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.image}" alt="${item.title}">
        <div class="item-details">
          <h4>${item.title}</h4>
          <p>$${item.price.toFixed(2)} × ${item.quantity}</p>
          <button class="remove-item">Remove</button>
        </div>
      </div>
    `).join('');
    
    const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalAmount.textContent = `$${total.toFixed(2)}`;
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.updateCartCount();
    this.renderCart();
    this.showAlert('Item removed from cart');
  }

  updateCartCount() {
    const count = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
      cartCount.textContent = count;
      cartCount.style.display = count > 0 ? 'flex' : 'none';
    }
  }

  showAlert(message) {
    const alert = document.createElement('div');
    alert.className = 'cart-alert';
    alert.textContent = message;
    document.body.appendChild(alert);
    
    setTimeout(() => {
      alert.classList.add('fade-out');
      setTimeout(() => alert.remove(), 500);
    }, 2000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Store();
});