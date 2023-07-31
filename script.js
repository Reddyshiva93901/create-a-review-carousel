const reviews = document.querySelectorAll(".review");
let currentIndex = 0;

function showReview(index) {
  reviews.forEach(review => review.classList.remove("active"));
  reviews[index].classList.add("active");
}

function nextReview() {
  currentIndex = (currentIndex + 1) % reviews.length;
  showReview(currentIndex);
}

// Auto change review every 5 seconds
setInterval(nextReview, 5000);

// Show the first review initially
showReview(currentIndex);
