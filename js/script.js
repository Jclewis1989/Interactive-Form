// When the page loads, give focus to the first text field

window.addEventListener('load', function () {
    var input = document.getElementById('name');
    input.focus();
})

// A text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.

// Give the field an id of “other-title,” and add the placeholder text of "Your Job Role" to the field.

function displayJobRole() {

    // Input element
    var input = document.createElement('input');
    input.type = 'text';
    input.id = 'other-title';
    input.value = "Your Job Role"

    // Locate parent node & create a second node with value for select element
    var parent = document.getElementById('title');

    // Function logic to hide and show based off a select value of 'other'
    parent.addEventListener('change', function () {
        if (parent.value === 'other') {
            parent.parentNode.insertBefore(input, parent.nextSibling).style.display = 'block';
        } else {
            parent.parentNode.insertBefore(input, parent.nextSibling).style.display = 'none';
        }
    })
}

displayJobRole();



// For the T-Shirt color menu, only display the color options that match the design selected in the "Design" menu.

// If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."

// If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."


function displayThemes() {
    // Identifying variables first
    var design = document.getElementById('design');
    var color = document.getElementById('color');

    // Items within the select inputs

    // Two event listeners depending on the designs

    design.addEventListener('change', function () {
        if (design.value === 'heart js') {
            for (var i = 0; i < color.length - 3; i++) {
                if (color.length) {
                    color[i].style.display = 'none';
                } else if (color.length) {
                    color[i].style.display !== 'none';
                }
            }
        }
    });
}

displayThemes();
