/**
 * This function return the total price of a new order
 * @param {Array} products cartProducts: Array of Objects
 * @returns {number} Total price 
 */

const getTotal = (products) => {
  if (products.length != 0) {
    return (
      products
      .map(product => product.price)
      .reduce((total, price) => total + price)
    )
  } else {
    return (
      0
    )
  }
}

export { getTotal }