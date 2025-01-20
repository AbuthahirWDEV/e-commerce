# E-Commerce List Page

This is an interactive e-commerce list page with animations that enhance the user experience. The project implements features such as product listing, smooth animations, pagination, loading skeletons, and more.

## Features

- **Product Listing Grid**: Displays products in a responsive grid layout. Each product card includes an image, name, price, and an "Add to Cart" button.
  
- **Animations**:
  - **Hover Effect**: Product cards animate on hover with a slight scale-up and shadow effect.
  - **Loading Animation**: A skeleton loader is shown when the page is loading or fetching products.
  - **Add to Cart Button**: The "Add to Cart" button has a click ripple effect, and a subtle cart icon animation appears when clicked.
  - **Filter/Sort Animation**: Smooth transition when filters or sorting options are applied.

- **Pagination**: Product listings are paginated, and users can navigate between pages. Pagination is implemented to manage the loading of products and create a smooth user experience.

- **Toast Notification**: Displays a notification when a product is added to the cart.

- **Filters and Sorting**:
  - Create a filter bar with options such as category and price range.
  - Add sorting options such as "Price: Low to High."

## Technical Requirements

- **Technologies**:
  - HTML, CSS, and JavaScript
  - React.js (for the dynamic rendering of product cards and managing state)
  - Material-UI for Pagination and Skeleton Loading
  - React Icons for the shopping cart icon
  - React-Toastify for displaying notifications
  
- **Animations**: 
  - Implemented using CSS transitions, keyframes, and Material-UI Skeleton for loading effects.

- **Responsive Design**: The layout is responsive for mobile, tablet, and desktop views.

## Explanation of Animation Choices
1. Hover Effect on Product Cards:
The hover effect scales up the product cards slightly and adds a shadow to give a subtle interactive feel when users hover over a product.

2. Skeleton Loader:
A skeleton loader is shown when the page is fetching the product data to improve user experience during loading times. It simulates the shape of the content to let users know that data is being loaded.

3. Add to Cart Button:
The button has a ripple effect when clicked, followed by a cart icon animation to provide a visually engaging interaction. This animation draws attention to the user's action of adding an item to the cart.

4. Pagination for Lazy Loading of Products:
Pagination is implemented to load products in pages, which improves performance and user experience by avoiding long lists of products. Users can smoothly navigate between pages to see different products.


