// Get the form element - const because it won't change
const form = document.getElementById('form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  // Prevent the form from refreshing the page
  event.preventDefault();
  
  // Get the input values
  const nounInput = document.getElementById('noun').value;
  const verbInput = document.getElementById('verb').value;
  const adjectiveInput = document.getElementById('adjective').value;
  
  // Capitalize the first letter of the verb and add 'ing'
  const verbIng = verbInput.charAt(0).toUpperCase() + verbInput.slice(1) + 'ing';
  // Create the new sentence using a template literal
  const sentence = `${verbIng} ${adjectiveInput} ${nounInput} is the real test of character. #LifeRules`;
  
  // Display the result
  const resultElement = document.getElementById('result');
  resultElement.textContent = sentence;

  // Clear the input fields after submission
  document.getElementById('noun').value = '';
  document.getElementById('verb').value = '';
  document.getElementById('adjective').value = '';
});