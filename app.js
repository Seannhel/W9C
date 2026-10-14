
 // Create three arrays
let item_names = ["Laptop", "tablet", "Cellphone"];
let item_prices = [1000, 25, 75];
let in_stock = [true, false, true];

// Get the first item and price
let first_item_name = item_names[0];
let first_item_price = item_prices[0];

// Add one value to each array
item_names.push("laptop");
item_prices.push(200);
in_stock.push(true);

// Remove and save the last values
let last_item_name = item_names.pop();
let last_item_price = item_prices.pop();
let last_item_stock = in_stock.pop();
