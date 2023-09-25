const inputBox = document.getElementById('note');
const listContainer = document.getElementById('list');

function addTask() {
    const note = inputBox.value.trim(); // Get the trimmed input value

    if (note === "") {
        console.log('Please write something');
    } else {
        const li = document.createElement('li');
        li.textContent = note; // Use textContent to set the task text
        listContainer.appendChild(li);
        inputBox.value = ''; // Clear the input field
    }
}

