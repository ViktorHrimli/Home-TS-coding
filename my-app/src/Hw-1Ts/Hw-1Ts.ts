function Hw() {}

function calculateTotalPrice() {
  const orderedQuantity: number = 6;
  const pricePerDroid: number = 800;
  const deliveryFee: number = 50;
  let message: string = `You ordered droids worth ${
    orderedQuantity * pricePerDroid + deliveryFee
  } credits. Delivery (${deliveryFee} credits) is included in total price."`;
  console.log(message);
}

calculateTotalPrice();
export default Hw;
