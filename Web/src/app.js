import baskinRobbinsLogo from '../assets/restaurant-logos/baskin-robbins.svg'
import burgerKingLogo from '../assets/restaurant-logos/burger-king.svg'
import dominoLogo from '../assets/restaurant-logos/dominos.svg'
import kfcLogo from '../assets/restaurant-logos/kfc.svg'
import mcdonaldsLogo from '../assets/restaurant-logos/mcdonalds.svg'
import pizzaHutLogo from '../assets/restaurant-logos/pizza-hut.svg'
import subwayLogo from '../assets/restaurant-logos/subway.svg'
import texasChickenLogo from '../assets/restaurant-logos/texas-chicken.svg'
import zusCoffeeLogo from '../assets/restaurant-logos/zus-coffee.png'

const categories = [
  { name: 'All', icon: '✦' },
  { name: 'Favorites', icon: '♡' },
  { name: 'Rice', icon: '🍛' },
  { name: 'Mamak', icon: '🫓' },
  { name: 'Noodles', icon: '🍜' },
  { name: 'Burger', icon: '🍔' },
  { name: 'Chicken', icon: '🍗' },
  { name: 'Pizza', icon: '🍕' },
  { name: 'Sides', icon: '🍟' },
  { name: 'Sushi', icon: '🍣' },
  { name: 'Sandwiches', icon: '🥪' },
  { name: 'Salads', icon: '🥗' },
  { name: 'Desserts', icon: '🍧' },
  { name: 'Drinks', icon: '🥤' },
]

const homeCategories = [
  { name: 'Burger', icon: '🍔' },
  { name: 'Chicken', icon: '🍗' },
  { name: 'Pizza', icon: '🍕' },
  { name: 'Sides', icon: '🍟' },
  { name: 'Sushi', icon: '🍣' },
  { name: 'Sandwiches', icon: '🥪' },
  { name: 'Salads', icon: '🥗' },
  { name: 'Desserts', icon: '🍰' },
  { name: 'Drinks', icon: '🥤' },
]

const dishes = [
  {
    id: 'nasi-lemak-ayam',
    name: 'Nasi Lemak Ayam Berempah',
    restaurant: 'Village Park Restaurant',
    category: 'Rice',
    description: 'Coconut rice, crispy spiced chicken, sambal, egg & crunchy ikan bilis.',
    price: 12.5,
    rating: 4.9,
    time: '15–25 min',
    badge: 'STUDENT FAVE',
    emoji: '🍛',
    image: 'photo-1512621776951-a57141f2eefd',
  },
  {
    id: 'nasi-goreng-kampung',
    name: 'Nasi Goreng Kampung',
    restaurant: 'Serai',
    category: 'Rice',
    description: 'Wok-fried rice with water spinach, anchovies, egg & sambal.',
    price: 9.5,
    rating: 4.8,
    time: '15–20 min',
    badge: 'BUDGET PICK',
    emoji: '🍳',
    image: 'photo-1603133872878-684f208fb84b',
  },
  {
    id: 'roti-canai',
    name: 'Roti Canai Set',
    restaurant: 'Pelita Nasi Kandar',
    category: 'Mamak',
    description: 'Two flaky roti canai served with dhal and chicken curry.',
    price: 5.5,
    discount: 20,
    rating: 4.8,
    time: '10–20 min',
    badge: 'UNDER RM6',
    emoji: '🫓',
    image: 'photo-1601050690597-df0568f70950',
  },
  {
    id: 'mee-kari',
    name: 'Mee Kari Mamak',
    restaurant: 'Pelita Nasi Kandar',
    category: 'Noodles',
    description: 'Yellow noodles in fragrant curry broth with tofu puffs & lime.',
    price: 10.9,
    rating: 4.8,
    time: '15–25 min',
    badge: '',
    emoji: '🍜',
    image: 'photo-1569718212165-3a8278d5f624',
  },
  {
    id: 'ayam-gepuk',
    name: 'Ayam Gepuk Sambal',
    restaurant: 'Ayam Gepuk Pak Gembus',
    category: 'Rice',
    description: 'Smashed crispy chicken, rice, fresh cucumber & fiery sambal.',
    price: 14.9,
    rating: 4.7,
    time: '20–30 min',
    badge: '',
    emoji: '🍗',
    image: 'photo-1546069901-ba9599a7e63c',
  },
  {
    id: 'teh-tarik',
    name: 'Iced Teh Tarik',
    restaurant: 'Pelita Nasi Kandar',
    category: 'Drinks',
    description: 'A chilled, frothy Malaysian tea tarik for your study break.',
    price: 3.5,
    rating: 4.8,
    time: '10–15 min',
    badge: '',
    emoji: '🥤',
    image: 'photo-1558857563-b371033873b8',
  },
  {
    id: 'cendol',
    name: 'Cendol Gula Melaka',
    restaurant: 'Cendol Bakar',
    category: 'Desserts',
    description: 'Shaved ice, pandan jelly, coconut milk & rich gula Melaka.',
    price: 6.5,
    rating: 4.9,
    time: '10–20 min',
    badge: 'COOL DOWN',
    emoji: '🍧',
    image: 'photo-1488900128323-21503983a07e',
  },
  {
    id: 'chicken-burger',
    name: 'Crispy Chicken Burger',
    restaurant: 'myBurgerLab',
    category: 'Burger',
    description: 'Crunchy chicken, lettuce, cheese & pepper mayo in a toasted bun.',
    price: 13.9,
    rating: 4.7,
    time: '15–25 min',
    badge: '',
    emoji: '🍔',
    image: 'photo-1568901346375-23c9450c58cd',
  },
  {
    id: 'margherita-pizza',
    name: 'Classic Margherita Pizza',
    restaurant: 'Pizza Hut',
    category: 'Pizza',
    description: 'Tomato, mozzarella and basil on a freshly baked crust.',
    price: 18.9,
    rating: 4.8,
    time: '20–30 min',
    badge: '',
    emoji: '🍕',
    image: 'photo-1513104890138-7c749659a591',
  },
  {
    id: 'salmon-sushi-set',
    name: 'Salmon Sushi Set',
    restaurant: 'Sushi King',
    category: 'Sushi',
    description: 'A colorful mix of salmon nigiri and maki rolls.',
    price: 16.9,
    rating: 4.8,
    time: '15–25 min',
    badge: '',
    emoji: '🍣',
    image: 'photo-1579871494447-9811cf80d66c',
  },
  {
    id: 'subway-veggie-sandwich',
    name: 'Fresh Veggie Sandwich',
    restaurant: 'Subway',
    category: 'Sandwiches',
    description: 'A crisp, freshly made sandwich with vegetables and your choice of toppings.',
    price: 10.9,
    rating: 4.7,
    time: '15–25 min',
    badge: '',
    emoji: '🥪',
    image: 'photo-1528735602780-2552fd46c7af',
  },
  {
    id: 'garden-salad',
    name: 'Garden Salad Bowl',
    restaurant: 'SaladStop!',
    category: 'Salads',
    description: 'Crisp greens, tomatoes, cucumber and a light sesame dressing.',
    price: 14.5,
    rating: 4.7,
    time: '15–25 min',
    badge: '',
    emoji: '🥗',
    image: 'photo-1512621776951-a57141f2eefd',
  },
  {
    id: 'big-mac',
    name: 'Big Mac',
    restaurant: "McDonald's",
    category: 'Burger',
    description: 'Two beef patties, lettuce, cheese, pickles and signature sauce.',
    price: 15.9,
    rating: 4.8,
    time: '15–25 min',
    badge: '',
    emoji: '🍔',
    image: 'photo-1568901346375-23c9450c58cd',
  },
  {
    id: 'kfc-zinger',
    name: 'Zinger Burger',
    restaurant: 'KFC',
    category: 'Burger',
    description: 'Crispy chicken fillet with fresh lettuce and creamy sauce.',
    price: 13.9,
    rating: 4.7,
    time: '15–25 min',
    badge: '',
    emoji: '🍔',
    image: 'photo-1568901346375-23c9450c58cd',
  },
  {
    id: 'burger-king-whopper',
    name: 'Whopper',
    restaurant: 'Burger King',
    category: 'Burger',
    description: 'Flame-grilled beef with lettuce, tomato, onion and pickles.',
    price: 16.9,
    rating: 4.7,
    time: '15–25 min',
    badge: '',
    emoji: '🍔',
    image: 'photo-1565299507177-b0ac66763828',
  },
  {
    id: 'texas-chicken-burger',
    name: 'Tex Supreme Burger',
    restaurant: 'Texas Chicken',
    category: 'Burger',
    description: 'Crispy chicken, cheese and fresh vegetables in a toasted bun.',
    price: 14.9,
    rating: 4.7,
    time: '15–25 min',
    badge: '',
    emoji: '🍔',
    image: 'photo-1568901346375-23c9450c58cd',
  },
  {
    id: 'dominos-pepperoni',
    name: 'Pepperoni Pizza',
    restaurant: "Domino's Pizza",
    category: 'Pizza',
    description: 'Baked crust topped with tomato sauce, cheese and pepperoni.',
    price: 19.9,
    rating: 4.8,
    time: '20–35 min',
    badge: '',
    emoji: '🍕',
    image: 'photo-1571407970349-bc81e7e96d47',
  },
  {
    id: 'baskin-robbins-sundae',
    name: 'Chocolate Fudge Sundae',
    restaurant: 'Baskin-Robbins',
    category: 'Desserts',
    description: 'Creamy ice cream with chocolate fudge and crunchy toppings.',
    price: 12.9,
    rating: 4.8,
    time: '10–20 min',
    badge: '',
    emoji: '🍨',
    image: 'photo-1563805042-7684c019e1cb',
  },
  {
    id: 'tealive-boba',
    name: 'Signature Brown Sugar Milk Tea',
    restaurant: 'Tealive',
    category: 'Drinks',
    description: 'Chilled milk tea with brown sugar pearls.',
    price: 9.9,
    rating: 4.8,
    time: '10–20 min',
    badge: '',
    emoji: '🧋',
    image: 'photo-1558857563-b371033873b8',
  },
  {
    id: 'zus-iced-spanish-latte',
    name: 'Iced Spanish Latté',
    restaurant: 'ZUS Coffee',
    category: 'Drinks',
    description: 'Espresso blended with smooth, lightly sweetened milk over ice.',
    price: 11.9,
    rating: 4.8,
    time: '10–20 min',
    badge: '',
    emoji: '☕',
    image: 'photo-1461023058943-07fcbe16d735',
  },
  {
    id: 'mcd-cheeseburger',
    name: 'Cheeseburger',
    restaurant: "McDonald's",
    category: 'Burger',
    description: 'A juicy beef patty with melted cheese, pickles, onion and tangy sauce.',
    price: 8.9,
    rating: 4.7,
    time: '15–25 min',
    badge: '',
    emoji: '🍔',
    image: 'photo-1568901346375-23c9450c58cd',
  },
  {
    id: 'mcd-mcchicken',
    name: 'McChicken',
    restaurant: "McDonald's",
    category: 'Burger',
    description: 'Crispy chicken, shredded lettuce and creamy mayonnaise in a sesame bun.',
    price: 10.9,
    rating: 4.6,
    time: '15–25 min',
    badge: '',
    emoji: '🍔',
    image: 'photo-1550547660-d9450f859349',
  },
  {
    id: 'pizza-hut-supreme',
    name: 'Supreme Pan Pizza',
    restaurant: 'Pizza Hut',
    category: 'Pizza',
    description: 'A hearty pan pizza with savoury toppings, mozzarella and tomato sauce.',
    price: 24.9,
    rating: 4.8,
    time: '20–35 min',
    badge: '',
    emoji: '🍕',
    image: 'photo-1565299624946-b28f40a0ae38',
  },
  {
    id: 'pizza-hut-cheesy-bread',
    name: 'Cheesy Garlic Bread',
    restaurant: 'Pizza Hut',
    category: 'Sides',
    description: 'Warm baked bread with garlic, herbs and melted cheese.',
    price: 9.9,
    rating: 4.6,
    time: '15–25 min',
    badge: '',
    emoji: '🥖',
    image: 'photo-1619531040576-f9416740661b',
  },
  {
    id: 'dominos-chicken-pizza',
    name: 'BBQ Chicken Pizza',
    restaurant: "Domino's Pizza",
    category: 'Pizza',
    description: 'Smoky barbecue sauce, chicken and mozzarella on a golden crust.',
    price: 22.9,
    rating: 4.8,
    time: '20–35 min',
    badge: '',
    emoji: '🍕',
    image: 'photo-1559847844-5315695dadae',
  },
  {
    id: 'dominos-chicken-wings',
    name: 'Oven-Baked Chicken Wings',
    restaurant: "Domino's Pizza",
    category: 'Sides',
    description: 'A shareable serving of savoury chicken wings with a smoky glaze.',
    price: 14.9,
    rating: 4.6,
    time: '20–30 min',
    badge: '',
    emoji: '🍗',
    image: 'photo-1527477396000-e27163b481c2',
  },
  {
    id: 'br-strawberry-scoop',
    name: 'Strawberry Ice Cream Scoop',
    restaurant: 'Baskin-Robbins',
    category: 'Desserts',
    description: 'A cool, creamy strawberry-flavoured scoop for a sweet treat.',
    price: 7.9,
    rating: 4.7,
    time: '10–20 min',
    badge: '',
    emoji: '🍨',
    image: 'photo-1560008581-09826d1de69e',
  },
  {
    id: 'br-ice-cream-sundae',
    name: 'Ice Cream Sundae',
    restaurant: 'Baskin-Robbins',
    category: 'Desserts',
    description: 'Ice cream topped with rich chocolate sauce and crunchy sprinkles.',
    price: 14.9,
    rating: 4.8,
    time: '10–20 min',
    badge: '',
    emoji: '🍨',
    image: 'photo-1488900128323-21503983a07e',
  },
  {
    id: 'kfc-original-chicken',
    name: 'Original Recipe Chicken',
    restaurant: 'KFC',
    category: 'Chicken',
    description: 'A tender, seasoned fried chicken piece with a crisp golden coating.',
    price: 9.9,
    rating: 4.8,
    time: '15–25 min',
    badge: '',
    emoji: '🍗',
    image: 'photo-1626082927389-6cd097cdc6ec',
  },
  {
    id: 'kfc-popcorn-chicken',
    name: 'Popcorn Chicken',
    restaurant: 'KFC',
    category: 'Chicken',
    description: 'Bite-sized crispy chicken pieces, great for a quick snack.',
    price: 12.9,
    rating: 4.7,
    time: '15–25 min',
    badge: '',
    emoji: '🍗',
    image: 'photo-1579751626657-72bc17010498',
  },
  {
    id: 'bk-chicken-royale',
    name: 'Crispy Chicken Burger',
    restaurant: 'Burger King',
    category: 'Burger',
    description: 'Crispy chicken with lettuce and creamy sauce in a toasted bun.',
    price: 14.9,
    rating: 4.7,
    time: '15–25 min',
    badge: '',
    emoji: '🍔',
    image: 'photo-1565299507177-b0ac66763828',
  },
  {
    id: 'bk-onion-rings',
    name: 'Crispy Onion Rings',
    restaurant: 'Burger King',
    category: 'Sides',
    description: 'Golden battered onion rings served hot and crisp.',
    price: 7.9,
    rating: 4.5,
    time: '10–20 min',
    badge: '',
    emoji: '🧅',
    image: 'photo-1573080496219-bb080dd4f877',
  },
  {
    id: 'texas-two-piece-chicken',
    name: 'Two-Piece Fried Chicken',
    restaurant: 'Texas Chicken',
    category: 'Chicken',
    description: 'Two pieces of crunchy fried chicken with a savoury seasoned crust.',
    price: 17.9,
    rating: 4.8,
    time: '20–30 min',
    badge: '',
    emoji: '🍗',
    image: 'photo-1555939594-58d7cb561ad1',
  },
  {
    id: 'texas-honey-biscuit',
    name: 'Honey-Butter Biscuit',
    restaurant: 'Texas Chicken',
    category: 'Sides',
    description: 'A warm, fluffy biscuit finished with a sweet honey-butter glaze.',
    price: 4.9,
    rating: 4.6,
    time: '10–20 min',
    badge: '',
    emoji: '🥐',
    image: 'photo-1606755962773-d324e0a13086',
  },
  {
    id: 'subway-chicken-teriyaki',
    name: 'Chicken Teriyaki Sub',
    restaurant: 'Subway',
    category: 'Sandwiches',
    description: 'Tender teriyaki-style chicken with crisp vegetables in fresh bread.',
    price: 16.9,
    rating: 4.8,
    time: '15–25 min',
    badge: '',
    emoji: '🥪',
    image: 'photo-1528735602780-2552fd46c7af',
  },
  {
    id: 'subway-tuna-sub',
    name: 'Tuna Salad Sub',
    restaurant: 'Subway',
    category: 'Sandwiches',
    description: 'A creamy tuna-style filling with crunchy greens and your choice of toppings.',
    price: 15.9,
    rating: 4.7,
    time: '15–25 min',
    badge: '',
    emoji: '🥪',
    image: 'photo-1606755962773-d324e0a13086',
  },
]

const popularRestaurants = [
  { name: "McDonald's", cuisine: 'Burgers · Classic favorites', icon: '🍔', logo: mcdonaldsLogo },
  { name: 'Pizza Hut', cuisine: 'Pizza · Oven-baked favorites', icon: '🍕', logo: pizzaHutLogo },
  { name: "Domino's Pizza", cuisine: 'Pizza · Made to share', icon: '🍕', logo: dominoLogo },
  { name: 'Baskin-Robbins', cuisine: 'Desserts · Ice cream treats', icon: '🍨', logo: baskinRobbinsLogo },
  { name: 'KFC', cuisine: 'Chicken · Crispy favorites', icon: '🍗', logo: kfcLogo },
  { name: 'Burger King', cuisine: 'Burgers · Flame-grilled', icon: '🍔', logo: burgerKingLogo },
  { name: 'Texas Chicken', cuisine: 'Chicken · Southern-style', icon: '🍗', logo: texasChickenLogo },
  { name: 'Subway', cuisine: 'Sandwiches · Made fresh to order', icon: '🥪', logo: subwayLogo, wideLogo: true },
  { name: 'ZUS Coffee', cuisine: 'Coffee · Specialty favorites', icon: '☕', logo: zusCoffeeLogo },
].filter((restaurant) => restaurant.logo)
const sauces = ['No extra sauce', 'Sambal', 'Dhal curry', 'Sweet chilli']
const toppings = [
  { name: 'Fried egg', price: 2 },
  { name: 'Extra sambal', price: 1 },
  { name: 'Cheese', price: 2 },
  { name: 'Crispy ikan bilis', price: 1.5 },
]
const deliveryFee = 2.5
const freeDeliveryThreshold = 25
const foodGrid = document.querySelector('#food-grid')
const popularRestaurantsGrid = document.querySelector('#popular-restaurants-grid')
const specialGrid = document.querySelector('#special-grid')
const categoryList = document.querySelector('#category-list')
const homeCategoryList = document.querySelector('#home-category-list')
const searchInput = document.querySelector('#search-input')
const headerSearch = document.querySelector('#header-search')
const searchToggle = document.querySelector('#header-search-toggle')
const heroAddressForm = document.querySelector('#hero-address-form')
const heroAddressInput = document.querySelector('#hero-address-input')
const newsletterForm = document.querySelector('#newsletter-form')
const favoritesButton = document.querySelector('#favorites-button')
const restaurantSelect = document.querySelector('#restaurant-select')
const sortSelect = document.querySelector('#sort-select')
const cartItems = document.querySelector('#cart-items')
const cartEmpty = document.querySelector('#cart-empty')
const cartSummary = document.querySelector('#cart-summary')
const cartDialog = document.querySelector('#cart-dialog')
const headerCartButton = document.querySelector('.header-cart')
const locationForm = document.querySelector('#location-form')
const profileForm = document.querySelector('#profile-page-form')
const checkoutDialog = document.querySelector('#checkout-dialog')
const checkoutForm = document.querySelector('#checkout-form')
const checkoutDetailsStep = document.querySelector('#checkout-details-step')
const checkoutPaymentStep = document.querySelector('#checkout-payment-step')
const checkoutTrackingStep = document.querySelector('#checkout-tracking-step')
const trackingContent = document.querySelector('#tracking-content')
const itemDialog = document.querySelector('#item-dialog')
const itemForm = document.querySelector('#item-form')
const toast = document.querySelector('#toast')
const views = [...document.querySelectorAll('.app-view')]
const navButtons = [...document.querySelectorAll('.primary-nav [data-view], .header-actions [data-view]')]

let activeCategory = 'All'
let activeRestaurant = ''
let searchTerm = ''
let activeView = 'home'
let checkoutStep = 'details'
let checkoutNeedsAddress = false
let toastTimeout
let currentDish = null
let cart = loadCart()
let favorites = loadFavorites()
let profile = loadProfile()
let address = loadAddress()
let orders = loadOrders()

function money(amount) {
  return new Intl.NumberFormat('en-MY', {
    style: 'currency',
    currency: 'MYR',
  }).format(amount)
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character])
}

function priceFor(dish) {
  return dish.price * (1 - (dish.discount || 0) / 100)
}

function loadProfile() {
  try {
    const saved = JSON.parse(localStorage.getItem('crave-profile') || '{}')
    return {
      name: typeof saved.name === 'string' ? saved.name : '',
      email: typeof saved.email === 'string' ? saved.email : '',
      phone: typeof saved.phone === 'string' ? saved.phone : '',
    }
  } catch (error) {
    console.warn('Could not restore your profile.', error)
    return { name: '', email: '', phone: '' }
  }
}

function loadAddress() {
  try {
    const saved = JSON.parse(localStorage.getItem('crave-delivery-address') || '{}')
    return {
      area: typeof saved.area === 'string' ? saved.area : '',
      address: typeof saved.address === 'string' ? saved.address : '',
      block: typeof saved.block === 'string' ? saved.block : '',
      unit: typeof saved.unit === 'string' ? saved.unit : '',
      instructions: typeof saved.instructions === 'string' ? saved.instructions : '',
    }
  } catch (error) {
    console.warn('Could not restore your delivery address.', error)
    return emptyAddress()
  }
}

function emptyAddress() {
  return { area: '', address: '', block: '', unit: '', instructions: '' }
}

function loadFavorites() {
  try {
    const ids = JSON.parse(localStorage.getItem('crave-favorites') || '[]')
    return new Set(Array.isArray(ids) ? ids.filter((id) => dishes.some((dish) => dish.id === id)) : [])
  } catch (error) {
    console.warn('Could not restore your favorite dishes.', error)
    return new Set()
  }
}

function validCartLine(line) {
  return line && typeof line === 'object' &&
    dishes.some((dish) => dish.id === line.dishId) &&
    Number.isInteger(line.quantity) && line.quantity > 0 &&
    typeof line.sauce === 'string' &&
    Array.isArray(line.toppings) &&
    line.toppings.every((item) =>
      item && toppings.some((topping) => topping.name === item.name && topping.price === item.price))
}

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem('crave-cart') || '[]')
    if (Array.isArray(saved)) {
      return saved.filter(validCartLine).map((line, index) => ({
        ...line,
        lineId: `restored-${index}`,
      }))
    }

    // Older versions stored one quantity per dish; migrate those entries to cart lines.
    if (saved && typeof saved === 'object') {
      return Object.entries(saved)
        .filter(([id, quantity]) => dishes.some((dish) => dish.id === id) &&
          Number.isInteger(quantity) && quantity > 0)
        .map(([dishId, quantity]) => ({
          lineId: `legacy-${dishId}`,
          dishId,
          quantity,
          sauce: 'No extra sauce',
          toppings: [],
        }))
    }
    return []
  } catch (error) {
    console.warn('Could not restore the saved cart.', error)
    return []
  }
}

function loadOrders() {
  try {
    const saved = JSON.parse(localStorage.getItem('crave-orders') || '[]')
    if (!Array.isArray(saved)) return []
    return saved.filter((order) =>
      order && typeof order.id === 'string' && Array.isArray(order.items) &&
      order.items.every((item) => item && typeof item.name === 'string' &&
        Number.isInteger(item.quantity) && Array.isArray(item.options) &&
        item.options.every((option) => typeof option === 'string')) &&
      typeof order.total === 'number' && Number.isFinite(order.total) &&
      typeof order.createdAt === 'string' && Number.isFinite(Date.parse(order.createdAt)))
  } catch (error) {
    console.warn('Could not restore your order history.', error)
    return []
  }
}

function persist(key, value, message) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch (error) {
    console.warn(message, error)
    showToast(message)
    return false
  }
}

function showToast(message) {
  window.clearTimeout(toastTimeout)
  toast.textContent = message
  toast.classList.add('is-visible')
  toastTimeout = window.setTimeout(() => toast.classList.remove('is-visible'), 2800)
}

function showView(name, { scrollToTop = true } = {}) {
  if (name === 'cart') {
    if (!cartDialog.open) cartDialog.showModal()
    headerCartButton.setAttribute('aria-expanded', 'true')
    return
  }
  if (cartDialog.open) cartDialog.close()
  headerCartButton.setAttribute('aria-expanded', 'false')
  if (!views.some((view) => view.id === `view-${name}`)) return
  activeView = name
  views.forEach((view) => { view.hidden = view.id !== `view-${name}` })
  navButtons.forEach((button) => {
    if (button.dataset.view === name) button.setAttribute('aria-current', 'page')
    else button.removeAttribute('aria-current')
  })
  if (name !== 'menu') {
    headerSearch.hidden = true
    searchToggle.setAttribute('aria-expanded', 'false')
  }
  if (scrollToTop) window.scrollTo({ top: 0, behavior: 'smooth' })
}

function openHeaderSearch() {
  showView('menu')
  headerSearch.hidden = false
  searchToggle.setAttribute('aria-expanded', 'true')
  searchInput.focus()
}

function addressLines(savedAddress = address) {
  if (!savedAddress.address || !savedAddress.area) return []
  return [
    savedAddress.address,
    [savedAddress.block, savedAddress.unit].filter(Boolean).join(', '),
    savedAddress.area,
    savedAddress.instructions ? `Note: ${savedAddress.instructions}` : '',
  ].filter(Boolean)
}

function renderAddress() {
  const lines = addressLines()
  document.querySelector('#saved-address-card').innerHTML = lines.length
    ? `<p class="eyebrow">SAVED DELIVERY ADDRESS</p><div class="address-lines">${lines.map((line) => `<span>${escapeHtml(line)}</span>`).join('')}</div>`
    : '<p class="address-empty">Your address will appear here after you save it.</p>'
  document.querySelector('#checkout-address-summary').innerHTML = lines.length
    ? `<strong>Delivery address</strong><div class="address-lines">${lines.map((line) => `<span>${escapeHtml(line)}</span>`).join('')}</div>`
    : '<p class="address-empty">Add a delivery address to continue.</p>'
}

function setCheckoutStep(step) {
  checkoutStep = step
  checkoutDetailsStep.hidden = step !== 'details'
  checkoutPaymentStep.hidden = step !== 'payment'
  checkoutTrackingStep.hidden = step !== 'tracking' && step !== 'placed'
  document.querySelector('#checkout-title').textContent = ({
    details: 'Checkout',
    payment: 'Payment',
    tracking: 'Track your order',
    placed: 'Order placed',
  })[step]

  const currentIndex = ['details', 'payment', 'tracking', 'placed'].indexOf(step)
  document.querySelectorAll('[data-checkout-progress]').forEach((item, index) => {
    item.classList.toggle('is-complete', index < currentIndex)
    if (index === currentIndex) item.setAttribute('aria-current', 'step')
    else item.removeAttribute('aria-current')
  })
}

function renderOrderTracking(order) {
  trackingContent.innerHTML = `
    <p class="eyebrow">ORDER PLACED</p>
    <h3 id="tracking-title">Your order is confirmed!</h3>
    <p class="checkout-intro">Order <strong>${escapeHtml(order.id)}</strong> · ${money(order.total)}</p>
    <ol class="tracking-timeline">
      <li class="is-complete"><span>✓</span><div><strong>Order placed</strong><p>Your demo order has been saved.</p></div></li>
      <li><span>2</span><div><strong>Preparing</strong><p>Next in this sample tracking flow.</p></div></li>
      <li><span>3</span><div><strong>On the way</strong><p>Delivery updates are not live in this demo.</p></div></li>
      <li><span>4</span><div><strong>Delivered</strong><p>We hope you enjoy your meal!</p></div></li>
    </ol>
    <p class="demo-disclaimer">Demo tracking only — no restaurant or courier updates are connected.</p>
  `
}

function fillForms() {
  for (const [name, value] of Object.entries(address)) {
    const input = locationForm.elements.namedItem(name)
    if (input) input.value = value
  }
  for (const [name, value] of Object.entries(profile)) {
    const input = profileForm.elements.namedItem(name)
    if (input) input.value = value
  }
}

function renderCategories() {
  categoryList.innerHTML = categories.map(({ name, icon }) => `
    <button class="category-chip ${activeCategory === name ? 'is-active' : ''}"
      type="button" data-category="${name}" aria-pressed="${activeCategory === name}">
      <span class="category-icon" aria-hidden="true">${icon}</span>${name}
    </button>
  `).join('')
  favoritesButton.setAttribute('aria-pressed', String(activeCategory === 'Favorites'))
}

function renderRestaurantOptions() {
  const restaurants = [...new Set(dishes.map((dish) => dish.restaurant))]
  restaurantSelect.innerHTML = [
    `<option value="">All restaurants (${dishes.length} dishes)</option>`,
    ...restaurants.map((name) => {
      const count = dishes.filter((dish) => dish.restaurant === name).length
      return `<option value="${escapeHtml(name)}">${escapeHtml(name)} (${count})</option>`
    }),
  ].join('')
  restaurantSelect.value = activeRestaurant
}

function renderHomeCategories() {
  homeCategoryList.innerHTML = homeCategories.map(({ name, icon }) => `
    <button class="home-category" type="button" data-home-category="${name}">
      <span class="home-category-icon" aria-hidden="true">${icon}</span>
      <span>${name}</span>
      <span class="home-category-cta">Shop now <span aria-hidden="true">→</span></span>
    </button>
  `).join('')
}

function getVisibleDishes() {
  const search = searchTerm.trim().toLowerCase()
  const filtered = dishes.filter((dish) => {
    const matchesCategory = activeCategory === 'All' ||
      (activeCategory === 'Favorites' ? favorites.has(dish.id) : dish.category === activeCategory)
    const matchesRestaurant = !activeRestaurant || dish.restaurant === activeRestaurant
    const matchesSearch = !search ||
      `${dish.name} ${dish.restaurant} ${dish.description} ${dish.category}`.toLowerCase().includes(search)
    return matchesCategory && matchesRestaurant && matchesSearch
  })
  const sortBy = sortSelect.value
  if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating)
  if (sortBy === 'price-low') filtered.sort((a, b) => priceFor(a) - priceFor(b))
  if (sortBy === 'price-high') filtered.sort((a, b) => priceFor(b) - priceFor(a))
  return filtered
}

function renderDishCards(dishList) {
  return dishList.map((dish) => `
    <article class="food-card" data-dish-card="${dish.id}" tabindex="0" aria-label="Customize ${dish.name}">
      <div class="food-photo">
        <img src="https://images.unsplash.com/${dish.image}?auto=format&fit=crop&w=720&q=82"
          alt="${dish.name}" loading="lazy" data-fallback="${dish.emoji}">
        <button class="favorite-button ${favorites.has(dish.id) ? 'is-favorite' : ''}" type="button"
          data-favorite="${dish.id}" aria-pressed="${favorites.has(dish.id)}"
          aria-label="${favorites.has(dish.id) ? 'Remove' : 'Save'} ${dish.name} ${favorites.has(dish.id) ? 'from' : 'to'} favorites">
          <span aria-hidden="true">${favorites.has(dish.id) ? '♥' : '♡'}</span>
        </button>
        ${dish.badge ? `<span class="food-badge">${dish.badge}</span>` : ''}
        ${dish.discount ? `<span class="discount-badge">${dish.discount}% OFF</span>` : ''}
        <span class="food-time">${dish.time}</span>
      </div>
      <div class="food-info">
        <div class="food-title-row"><h3>${dish.name}</h3><span class="food-rating">★ ${dish.rating}</span></div>
        <p class="food-restaurant">${dish.restaurant}</p>
        <p class="food-description">${dish.description}</p>
        <div class="food-bottom"><strong class="food-price">${dish.discount ? `<s>${money(dish.price)}</s> ` : ''}${money(priceFor(dish))}</strong>
          <button class="add-button" type="button" data-customize="${dish.id}" aria-label="Customize ${dish.name} and add to cart">
            <span aria-hidden="true">+</span> Add
          </button>
        </div>
      </div>
    </article>
  `).join('')
}

function watchDishImages(grid) {
  grid.querySelectorAll('img').forEach((image) => {
    image.addEventListener('error', () => {
      const fallback = document.createElement('span')
      fallback.className = 'food-image-fallback'
      fallback.textContent = image.dataset.fallback
      image.replaceWith(fallback)
    }, { once: true })
  })
}

function renderDishes() {
  const visibleDishes = getVisibleDishes()
  document.querySelector('#menu-heading').textContent = activeRestaurant
    ? `${activeRestaurant} menu`
    : 'All the good eats'
  document.querySelector('#results-note').textContent = searchTerm || activeCategory !== 'All' || activeRestaurant
    ? `${visibleDishes.length} ${visibleDishes.length === 1 ? 'dish' : 'dishes'} to order`
    : `${visibleDishes.length} dishes from ${new Set(dishes.map((dish) => dish.restaurant)).size} restaurants`

  if (!visibleDishes.length) {
    const emptyTitle = activeCategory === 'Favorites' ? 'No saved dishes yet' : 'No restaurant dishes found'
    const emptyMessage = activeCategory === 'Favorites'
      ? 'Tap the heart on a dish to save it here for later.'
      : 'Try another restaurant or category to find something to order.'
    foodGrid.innerHTML = `
      <div class="no-results">
        <span aria-hidden="true">🍽️</span><h3>${emptyTitle}</h3><p>${emptyMessage}</p>
        <button class="reset-button" type="button" data-reset>Show all dishes</button>
      </div>
    `
    return
  }
  foodGrid.innerHTML = renderDishCards(visibleDishes)
  watchDishImages(foodGrid)
}

function renderPopularRestaurants() {
  popularRestaurantsGrid.innerHTML = popularRestaurants.map(({ name, cuisine, icon, logo, wideLogo }) => `
    <article class="popular-restaurant-card">
      <span class="popular-restaurant-icon" aria-hidden="true">
        ${logo
          ? `<img class="popular-restaurant-logo${wideLogo ? ' popular-restaurant-logo--wide' : ''}" src="${logo}" alt="" loading="lazy" data-fallback="${icon}">`
          : icon}
      </span>
      <div class="popular-restaurant-info">
        <h3>${escapeHtml(name)}</h3>
        <p>${escapeHtml(cuisine)}</p>
      </div>
      <button class="popular-restaurant-link" type="button" data-restaurant="${escapeHtml(name)}"
        aria-label="View ${escapeHtml(name)} menu">View menu <span aria-hidden="true">→</span></button>
    </article>
  `).join('')

  popularRestaurantsGrid.querySelectorAll('.popular-restaurant-logo').forEach((logo) => {
    logo.addEventListener('error', () => {
        logo.parentElement.textContent = logo.dataset.fallback
    }, { once: true })
  })
}

function renderSpecialForYou() {
  const favoriteCategories = [...favorites]
    .map((id) => dishes.find((dish) => dish.id === id)?.category)
    .filter(Boolean)
  const counts = favoriteCategories.reduce((result, category) => {
    result[category] = (result[category] || 0) + 1
    return result
  }, {})
  const candidates = dishes.filter((dish) => !favorites.has(dish.id))
  const recommendations = (candidates.length ? candidates : [...dishes])
    .sort((a, b) => (counts[b.category] || 0) - (counts[a.category] || 0) ||
      b.rating - a.rating || Number(favorites.has(b.id)) - Number(favorites.has(a.id)))
    .slice(0, 3)

  document.querySelector('#special-description').textContent = favoriteCategories.length
    ? candidates.length
      ? 'Picked to match the kinds of restaurant dishes you’ve saved.'
      : 'You’ve saved the whole menu! Here are a few favorites again.'
    : 'Top-rated Malaysian restaurant dishes to get your cravings started.'
  specialGrid.innerHTML = renderDishCards(recommendations)
  watchDishImages(specialGrid)
}

function lineUnitPrice(line) {
  const dish = dishes.find((item) => item.id === line.dishId)
  return dish ? priceFor(dish) + line.toppings.reduce((sum, item) => sum + item.price, 0) : 0
}

function renderCart() {
  const entries = cart.map((line) => ({
    line,
    dish: dishes.find((item) => item.id === line.dishId),
  })).filter((entry) => entry.dish)
  const count = entries.reduce((sum, { line }) => sum + line.quantity, 0)
  const subtotal = entries.reduce((sum, { line }) => sum + lineUnitPrice(line) * line.quantity, 0)
  const fee = subtotal === 0 || subtotal >= freeDeliveryThreshold ? 0 : deliveryFee

  const navCartCount = document.querySelector('#nav-cart-count')
  navCartCount.textContent = count
  navCartCount.hidden = count === 0
  document.querySelector('#cart-title-count').textContent = `(${count})`
  cartEmpty.hidden = count > 0
  cartSummary.hidden = count === 0
  cartItems.innerHTML = entries.map(({ line, dish }) => {
    const unitPrice = lineUnitPrice(line)
    const options = [line.sauce !== 'No extra sauce' ? line.sauce : '', ...line.toppings.map((item) => item.name)]
      .filter(Boolean)
    return `
      <div class="cart-item">
        <span class="cart-item-emoji" aria-hidden="true">${dish.emoji}</span>
        <div class="cart-item-main">
          <strong>${dish.name}</strong><span>${money(unitPrice)} each</span>
          ${options.length ? `<small class="cart-item-options">${options.map(escapeHtml).join(' · ')}</small>` : ''}
          <div class="quantity-control" aria-label="${dish.name} quantity">
            <button type="button" data-quantity="${line.lineId}" data-change="-1" aria-label="Remove one ${dish.name}">−</button>
            <span>${line.quantity}</span>
            <button type="button" data-quantity="${line.lineId}" data-change="1" aria-label="Add one ${dish.name}">+</button>
          </div>
        </div>
        <strong class="cart-item-total">${money(unitPrice * line.quantity)}</strong>
      </div>
    `
  }).join('')

  document.querySelector('#cart-subtotal').textContent = money(subtotal)
  document.querySelector('#cart-delivery').textContent = fee === 0 && subtotal > 0 ? 'FREE' : money(fee)
  document.querySelector('#cart-total').textContent = money(subtotal + fee)
  document.querySelector('#delivery-note').textContent = subtotal >= freeDeliveryThreshold
    ? 'Nice! You unlocked free delivery.'
    : `You’re ${money(freeDeliveryThreshold - subtotal)} away from free campus delivery`
  document.querySelector('#checkout-total').textContent = money(subtotal + fee)
  document.querySelector('#checkout-item-count').textContent = `${count} ${count === 1 ? 'item' : 'items'}`
  renderAddress()
  renderOrderHistory()
}

function renderOrderHistory() {
  const history = document.querySelector('#order-history')
  if (!orders.length) {
    history.innerHTML = '<p class="address-empty">Your placed demo orders will appear here.</p>'
    return
  }
  history.innerHTML = [...orders].reverse().map((order) => `
    <article class="order-history-card">
      <div><strong>Order ${escapeHtml(order.id)}</strong><span>${escapeHtml(new Date(order.createdAt).toLocaleString())}</span></div>
      <p>${order.items.map((item) =>
    `${escapeHtml(item.quantity)} × ${escapeHtml(item.name)}${item.options.length ? ` (${item.options.map(escapeHtml).join(', ')})` : ''}`,
  ).join(' · ')}</p>
      <strong>${money(order.total)}</strong>
      <button class="text-button order-track-button" type="button" data-track-order="${escapeHtml(order.id)}">Track order</button>
    </article>
  `).join('')
}

function renderOptionChoices() {
  document.querySelector('#sauce-options').innerHTML = sauces.map((sauce, index) => `
    <label class="option-choice">
      <input type="radio" name="sauce" value="${sauce}" ${index === 0 ? 'checked' : ''}>
      <span>${sauce}</span>
    </label>
  `).join('')
  document.querySelector('#topping-options').innerHTML = toppings.map((topping) => `
    <label class="option-choice">
      <input type="checkbox" name="topping" value="${topping.name}">
      <span>${topping.name}</span><strong>+${money(topping.price)}</strong>
    </label>
  `).join('')
}

function updateCustomPrice() {
  if (!currentDish) return
  const quantity = Number(itemForm.elements.namedItem('quantity').value)
  const toppingTotal = [...itemForm.querySelectorAll('[name="topping"]:checked')]
    .reduce((sum, input) => sum + toppings.find((item) => item.name === input.value).price, 0)
  document.querySelector('#custom-quantity').textContent = quantity
  document.querySelector('#custom-total').textContent = money((priceFor(currentDish) + toppingTotal) * quantity)
}

function openCustomization(dishId) {
  currentDish = dishes.find((dish) => dish.id === dishId)
  if (!currentDish) return
  itemForm.reset()
  itemForm.elements.namedItem('quantity').value = '1'
  document.querySelector('#custom-dish-emoji').textContent = currentDish.emoji
  document.querySelector('#custom-dish-name').textContent = currentDish.name
  document.querySelector('#custom-dish-description').textContent =
    `${currentDish.description} · ${money(priceFor(currentDish))}${currentDish.discount ? ` (${currentDish.discount}% off)` : ''}`
  renderOptionChoices()
  updateCustomPrice()
  itemDialog.showModal()
  document.querySelector('#close-item').focus()
}

function handleDishGridClick(event) {
  const favoriteButton = event.target.closest('[data-favorite]')
  if (favoriteButton) {
    const dish = dishes.find((item) => item.id === favoriteButton.dataset.favorite)
    if (!dish) return
    const nextFavorites = new Set(favorites)
    if (nextFavorites.has(dish.id)) {
      nextFavorites.delete(dish.id)
      showToast(`${dish.name} removed from favorites`)
    } else {
      nextFavorites.add(dish.id)
      showToast(`${dish.name} saved to favorites`)
    }
    if (persist('crave-favorites', [...nextFavorites], 'Could not save your favorite dishes.')) {
      favorites = nextFavorites
      renderDishes()
      renderSpecialForYou()
    }
    return
  }
  if (event.target.closest('[data-reset]')) {
    activeCategory = 'All'
    activeRestaurant = ''
    searchTerm = ''
    searchInput.value = ''
    restaurantSelect.value = ''
    renderCategories()
    renderDishes()
    return
  }
  const card = event.target.closest('[data-dish-card]')
  if (card && !event.target.closest('button')) openCustomization(card.dataset.dishCard)
}

categoryList.addEventListener('click', (event) => {
  const button = event.target.closest('[data-category]')
  if (!button) return
  activeCategory = button.dataset.category
  renderCategories()
  renderDishes()
})

homeCategoryList.addEventListener('click', (event) => {
  const button = event.target.closest('[data-home-category]')
  if (!button) return
  activeCategory = button.dataset.homeCategory
  activeRestaurant = ''
  searchTerm = ''
  searchInput.value = ''
  restaurantSelect.value = ''
  renderCategories()
  renderDishes()
  showView('menu', { scrollToTop: false })
  document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' })
})

foodGrid.addEventListener('click', handleDishGridClick)
specialGrid.addEventListener('click', handleDishGridClick)
for (const grid of [foodGrid, specialGrid]) {
  grid.addEventListener('keydown', (event) => {
    if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('[data-dish-card]')) {
      event.preventDefault()
      openCustomization(event.target.dataset.dishCard)
    }
  })
}

document.addEventListener('click', (event) => {
  const trackOrderButton = event.target.closest('[data-track-order]')
  if (trackOrderButton) {
    const order = orders.find((item) => item.id === trackOrderButton.dataset.trackOrder)
    if (!order) return
    renderOrderTracking(order)
    setCheckoutStep('placed')
    checkoutDialog.showModal()
    return
  }
  const footerCategory = event.target.closest('[data-footer-category]')
  if (footerCategory) {
    activeCategory = footerCategory.dataset.footerCategory
    activeRestaurant = ''
    searchTerm = ''
    searchInput.value = ''
    restaurantSelect.value = ''
    renderCategories()
    renderDishes()
    showView('menu', { scrollToTop: false })
    document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' })
    return
  }
  const healthyFeatureButton = event.target.closest('[data-healthy-category]')
  if (healthyFeatureButton) {
    activeCategory = healthyFeatureButton.dataset.healthyCategory
    activeRestaurant = ''
    searchTerm = ''
    searchInput.value = ''
    restaurantSelect.value = ''
    renderCategories()
    renderDishes()
    showView('menu', { scrollToTop: false })
    document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' })
    return
  }
  const restaurantButton = event.target.closest('[data-restaurant]')
  if (restaurantButton) {
    activeCategory = 'All'
    activeRestaurant = restaurantButton.dataset.restaurant
    searchTerm = ''
    searchInput.value = ''
    restaurantSelect.value = activeRestaurant
    renderCategories()
    renderDishes()
    showView('menu', { scrollToTop: false })
    document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' })
    return
  }
  const customizeButton = event.target.closest('[data-customize]')
  if (customizeButton) {
    openCustomization(customizeButton.dataset.customize)
    return
  }
  const searchButton = event.target.closest('#header-search-toggle')
  if (searchButton) {
    if (headerSearch.hidden) openHeaderSearch()
    else {
      headerSearch.hidden = true
      searchToggle.setAttribute('aria-expanded', 'false')
    }
    return
  }
  const favorites = event.target.closest('#favorites-button')
  if (favorites) {
    activeCategory = 'Favorites'
    activeRestaurant = ''
    restaurantSelect.value = ''
    searchTerm = ''
    searchInput.value = ''
    renderCategories()
    renderDishes()
    showView('menu', { scrollToTop: false })
    document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' })
    return
  }
  const categoryNavigation = event.target.closest('[data-category-nav]')
  if (categoryNavigation) {
    showView('menu', { scrollToTop: false })
    document.querySelector('#category-section').scrollIntoView({ behavior: 'smooth' })
    return
  }
  const placeholder = event.target.closest('[data-nav-placeholder]')
  if (placeholder) {
    showToast(`${placeholder.textContent.trim()} page is not available yet.`)
    return
  }
  const viewButton = event.target.closest('[data-view]')
  if (viewButton) {
    if (viewButton.matches('[data-restaurants-nav]')) {
      activeCategory = 'All'
      activeRestaurant = ''
      restaurantSelect.value = ''
      searchTerm = ''
      searchInput.value = ''
      renderCategories()
      renderDishes()
    }
    showView(viewButton.dataset.view)
    return
  }
  if (event.target.closest('.brand')) {
    event.preventDefault()
    showView('home')
  }
})

newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault()
  if (!newsletterForm.reportValidity()) return
  showToast('Newsletter signup is not connected yet. Your email was not sent or stored.')
})

searchInput.addEventListener('input', () => {
  searchTerm = searchInput.value
  if (searchTerm && activeView !== 'menu') showView('menu')
  renderDishes()
})

restaurantSelect.addEventListener('change', () => {
  activeRestaurant = restaurantSelect.value
  activeCategory = 'All'
  searchTerm = ''
  searchInput.value = ''
  renderCategories()
  renderDishes()
})

sortSelect.addEventListener('change', renderDishes)

cartItems.addEventListener('click', (event) => {
  const button = event.target.closest('[data-quantity]')
  if (!button) return
  const lineId = button.dataset.quantity
  const change = Number(button.dataset.change)
  const nextCart = cart.map((line) => line.lineId === lineId
    ? { ...line, quantity: line.quantity + change }
    : line).filter((line) => line.quantity > 0)
  if (!persist('crave-cart', nextCart, 'Could not update the cart on this device.')) return
  cart = nextCart
  renderCart()
})

document.querySelector('#quantity-decrease').addEventListener('click', () => {
  const quantity = itemForm.elements.namedItem('quantity')
  quantity.value = String(Math.max(1, Number(quantity.value) - 1))
  updateCustomPrice()
})
document.querySelector('#quantity-increase').addEventListener('click', () => {
  const quantity = itemForm.elements.namedItem('quantity')
  quantity.value = String(Math.min(99, Number(quantity.value) + 1))
  updateCustomPrice()
})
itemForm.addEventListener('change', updateCustomPrice)
document.querySelector('#close-item').addEventListener('click', () => itemDialog.close())
itemDialog.addEventListener('click', (event) => {
  if (event.target === itemDialog) itemDialog.close()
})

itemForm.addEventListener('submit', (event) => {
  event.preventDefault()
  if (!currentDish) return
  const quantity = Number(itemForm.elements.namedItem('quantity').value)
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) return
  const selectedToppings = [...itemForm.querySelectorAll('[name="topping"]:checked')]
    .map((input) => toppings.find((item) => item.name === input.value))
    .filter(Boolean)
  const line = {
    lineId: globalThis.crypto?.randomUUID?.() || `line-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    dishId: currentDish.id,
    quantity,
    sauce: itemForm.elements.namedItem('sauce').value,
    toppings: selectedToppings,
  }
  const nextCart = [...cart, line]
  if (!persist('crave-cart', nextCart, 'Could not save your cart on this device.')) return
  cart = nextCart
  renderCart()
  itemDialog.close()
  showToast(`${currentDish.name} added to your cart`)
})

locationForm.addEventListener('submit', (event) => {
  event.preventDefault()
  if (!locationForm.reportValidity()) return
  const formData = new FormData(locationForm)
  const nextAddress = Object.fromEntries(
    ['area', 'address', 'block', 'unit', 'instructions']
      .map((name) => [name, String(formData.get(name) || '').trim()]),
  )
  if (!persist('crave-delivery-address', nextAddress, 'Could not save your delivery address.')) return
  address = nextAddress
  heroAddressInput.value = nextAddress.address
  renderAddress()
  if (checkoutNeedsAddress) {
    checkoutNeedsAddress = false
    showView('cart')
  }
  showToast('Your delivery address is saved.')
})

heroAddressForm.addEventListener('submit', (event) => {
  event.preventDefault()
  if (!heroAddressForm.reportValidity()) return
  const enteredAddress = heroAddressInput.value.trim()
  if (!enteredAddress) {
    heroAddressInput.value = ''
    heroAddressInput.reportValidity()
    return
  }
  locationForm.elements.namedItem('address').value = enteredAddress
  showView('location')
  document.querySelector('#address-area').focus()
})

profileForm.addEventListener('submit', (event) => {
  event.preventDefault()
  if (!profileForm.reportValidity()) return
  const formData = new FormData(profileForm)
  const nextProfile = Object.fromEntries(['name', 'email', 'phone']
    .map((name) => [name, String(formData.get(name) || '').trim()]))
  if (!persist('crave-profile', nextProfile, 'Could not save your profile on this device.')) return
  profile = nextProfile
  showToast('Your profile is saved.')
})

document.querySelector('#checkout-button').addEventListener('click', () => {
  if (!cart.length) {
    showToast('Add something delicious to your cart first.')
    return
  }
  if (!addressLines().length) {
    checkoutNeedsAddress = true
    showView('location')
    showToast('Add your delivery address to continue checkout.')
    return
  }
  checkoutForm.elements.namedItem('name').value = profile.name
  checkoutForm.elements.namedItem('phone').value = profile.phone
  checkoutForm.querySelectorAll('[name="paymentMethod"]').forEach((input) => { input.checked = false })
  renderAddress()
  setCheckoutStep('details')
  checkoutDialog.showModal()
})

document.querySelector('#close-cart').addEventListener('click', () => cartDialog.close())
cartDialog.addEventListener('close', () => headerCartButton.setAttribute('aria-expanded', 'false'))
cartDialog.addEventListener('click', (event) => {
  if (event.target === cartDialog) cartDialog.close()
})

document.querySelector('#continue-to-payment').addEventListener('click', () => {
  const nameInput = checkoutForm.elements.namedItem('name')
  const phoneInput = checkoutForm.elements.namedItem('phone')
  if (!nameInput.reportValidity() || !phoneInput.reportValidity()) return
  if (!addressLines().length) {
    checkoutDialog.close()
    checkoutNeedsAddress = true
    showView('location')
    showToast('Add your delivery address to continue checkout.')
    return
  }
  document.querySelector('#payment-total').textContent = document.querySelector('#checkout-total').textContent
  setCheckoutStep('payment')
})

document.querySelector('#back-to-checkout').addEventListener('click', () => setCheckoutStep('details'))
document.querySelector('#checkout-edit-address').addEventListener('click', () => {
  checkoutDialog.close()
  checkoutNeedsAddress = true
  showView('location')
})
document.querySelector('#close-checkout').addEventListener('click', () => {
  checkoutDialog.close()
  setCheckoutStep('details')
})
document.querySelector('#close-tracking').addEventListener('click', () => {
  checkoutDialog.close()
  setCheckoutStep('details')
  showToast('Your demo order is in your order history.')
})
checkoutDialog.addEventListener('click', (event) => {
  if (event.target === checkoutDialog) {
    checkoutDialog.close()
    setCheckoutStep('details')
  }
})

checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault()
  if (checkoutStep === 'details') {
    const nameInput = checkoutForm.elements.namedItem('name')
    const phoneInput = checkoutForm.elements.namedItem('phone')
    if (!nameInput.reportValidity() || !phoneInput.reportValidity()) return
    if (!cart.length || !addressLines().length) return
    document.querySelector('#payment-total').textContent = document.querySelector('#checkout-total').textContent
    setCheckoutStep('payment')
    return
  }
  if (checkoutStep !== 'payment' || !checkoutForm.reportValidity() || !cart.length || !addressLines().length) return
  const formData = new FormData(checkoutForm)
  const name = String(formData.get('name')).trim()
  const phone = String(formData.get('phone')).trim()
  const paymentMethod = String(formData.get('paymentMethod'))
  const subtotal = cart.reduce((sum, line) => sum + lineUnitPrice(line) * line.quantity, 0)
  const fee = subtotal >= freeDeliveryThreshold ? 0 : deliveryFee
  const order = {
    id: `UPM-${Date.now().toString().slice(-6)}`,
    createdAt: new Date().toISOString(),
    name,
    phone,
    address: { ...address },
    items: cart.map((line) => {
      const dish = dishes.find((item) => item.id === line.dishId)
      return {
        name: dish.name,
        quantity: line.quantity,
        options: [
          line.sauce !== 'No extra sauce' ? line.sauce : '',
          ...line.toppings.map((item) => item.name),
        ].filter(Boolean),
        unitPrice: lineUnitPrice(line),
      }
    }),
    total: subtotal + fee,
    paymentMethod,
  }
  const previousOrders = localStorage.getItem('crave-orders')
  try {
    localStorage.setItem('crave-orders', JSON.stringify([...orders, order]))
    localStorage.setItem('crave-cart', JSON.stringify([]))
  } catch (error) {
    try {
      if (previousOrders === null) localStorage.removeItem('crave-orders')
      else localStorage.setItem('crave-orders', previousOrders)
    } catch (rollbackError) {
      console.warn('Could not restore order history after a failed order save.', rollbackError)
    }
    console.warn('Could not place your demo order on this device.', error)
    showToast('Could not place the order. Your cart has been kept.')
    return
  }

  profile = { ...profile, name, phone }
  let profileSaveFailed = false
  try {
    localStorage.setItem('crave-profile', JSON.stringify(profile))
  } catch (error) {
    profileSaveFailed = true
    console.warn('Order placed, but your profile details could not be saved.', error)
  }
  orders = [...orders, order]
  cart = []
  renderCart()
  renderOrderTracking(order)
  setCheckoutStep('placed')
  if (profileSaveFailed) showToast('Order placed, but profile details could not be saved.')
})

document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault()
    openHeaderSearch()
  }
})

fillForms()
heroAddressInput.value = address.address
document.querySelector('#copyright-year').textContent = String(new Date().getFullYear())
renderCategories()
renderHomeCategories()
renderRestaurantOptions()
renderDishes()
renderPopularRestaurants()
renderSpecialForYou()
renderCart()
showView(activeView)
