const amButton = document.getElementById('am');
const pmButton = document.getElementById('pm');

// Get reference to the heading by its ID
const greetingHeading = document.getElementById('greeting');

// Add click event listeners to the buttons
amButton.addEventListener('click', () => {
    // Update the heading content for 'Good morning'
    greetingHeading.textContent = 'Good morning!';
});

pmButton.addEventListener('click', () => {
    // Update the heading content for 'Good night'
    greetingHeading.textContent = 'Good night!';
});


const redButton = document.getElementById('red');
const yellowButton = document.getElementById('yellow');
const greenButton = document.getElementById('green');
const blueButton = document.getElementById('blue');

// Get reference to the div_color by its ID
const divColor = document.getElementById('div_color');

// Add click event listeners to the buttons
redButton.addEventListener('click', () => {
    divColor.setAttribute('class', 'bg_red');
});

yellowButton.addEventListener('click', () => {
    divColor.setAttribute('class', 'bg_yellow');
});

greenButton.addEventListener('click', () => {
    divColor.setAttribute('class', 'bg_green');
});

blueButton.addEventListener('click', () => {
    divColor.setAttribute('class', 'bg_blue');
});


// Get references to the input box, button, and list by their IDs
const usrInput = document.querySelector('#usrInput');
const addBtn = document.querySelector('#addBtn');
const myUL = document.querySelector('#myUL');

// Add click event listener to the button
addBtn.addEventListener('click', () => {
    // Get the user input from the input box
    const userInput = usrInput.value;

    // Check if the input is not empty
    if (userInput.trim() !== '') {
        // Create a new list item node
        const listItem = document.createElement('li');
        listItem.textContent = userInput;

        // Create a delete button element
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        // Add click event listener to the delete button to remove the list item
        deleteButton.addEventListener('click', () => {
            myUL.removeChild(listItem);
        });

        // Append the delete button to the list item
        listItem.appendChild(deleteButton);

        // Append the new list item to the unordered list
        myUL.appendChild(listItem);

        // Clear the input box
        usrInput.value = '';
    }
});
