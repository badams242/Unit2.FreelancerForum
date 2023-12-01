// Define arrays for possible names and occupations
const names = ["Alice", "Bob", "Carol", /* Add more names if needed */];
const occupations = ["Writer", "Teacher", "Programmer", /* Add more occupations if needed */];

// Define an initial array of freelancers
let freelancers = [
  { name: "Alice", occupation: "Writer", startingPrice: 30 },
  { name: "Bob", occupation: "Teacher", startingPrice: 50 },
];

// Function to render the initial freelancer data
function renderFreelancers() {
  const freelancersList = document.getElementById("freelancers-list");
  freelancersList.innerHTML = "";

  freelancers.forEach(freelancer => {
    const listItem = document.createElement("li");
    listItem.textContent = `${freelancer.name}, ${freelancer.occupation}, Starting Price: $${freelancer.startingPrice}`;
    freelancersList.appendChild(listItem);
  });
}

// Function to generate a new random freelancer
function generateRandomFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation = occupations[Math.floor(Math.random() * occupations.length)];
  const startingPrice = Math.floor(Math.random() * 100) + 1; // Random price between 1 and 100

  const newFreelancer = { name, occupation, startingPrice };
  freelancers.push(newFreelancer);

  renderFreelancers();
  updateAveragePrice();
}

// Function to calculate the average starting price of freelancers
function updateAveragePrice() {
  const averagePriceMessage = document.getElementById("average-price-message");
  const totalStartingPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
  const averagePrice = totalStartingPrice / freelancers.length || 0; // Prevent division by zero

  averagePriceMessage.textContent = `Average Starting Price: $${averagePrice.toFixed(2)}`;
}

// Call the initial render
renderFreelancers();
updateAveragePrice();

// Call the function to generate a new random freelancer every few seconds
setInterval(generateRandomFreelancer, 5000); // Adjust the interval as needed