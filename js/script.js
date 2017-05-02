// When the page loads, give focus to the first text field

window.addEventListener('load', function () {
    var input = document.getElementById('name');
    input.focus();
});

// A text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.

// Give the field an id of “other-title,” and add the placeholder text of "Your Job Role" to the field.

function displayJobRole() {

    // Input element
    var input = document.createElement('input');
    input.type = 'text';
    input.id = 'other-title';
    input.placeholder = "Your Job Role";

    // Locate parent node & create a second node with value for select element
    var parent = document.getElementById('title');

    // Function logic to hide and show based off a select value of 'other'
    parent.addEventListener('change', function () {
        if (parent.value === 'other') {
            parent.parentNode.insertBefore(input, parent.nextSibling).style.display = 'block';
        } else {
            parent.parentNode.insertBefore(input, parent.nextSibling).style.display = 'none';
        }
    });
}

displayJobRole();



// For the T-Shirt color menu, only display the color options that match the design selected in the "Design" menu.

// If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."

// If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."


function displayThemes() {
    // Identifying variables first
    var design = document.getElementById('design');
    var color = document.getElementById('color');
    // color.value = 'Please Select Your Color';

    // Items within the select inputs

    design.addEventListener('change', function () {
        for (var i = 0; i < color.length - 3; i++) {
            var colors = color[i];
            if (design.value === 'js puns') {
                color[i].style.display = 'block';
            } else if (design.value === 'heart js') {
                color[i].style.display = 'none';
            } else {
                color[i].style.display = 'block';
            }
        }
    })

    design.addEventListener('change', function () {
        for (var i = 3; i < color.length; i++) {
            var colors = color[i];
            if (design.value === 'heart js') {
                color[i].style.display = 'block';
            } else if (design.value === 'js puns') {
                color[i].style.display = 'none';
            } else {
                color[i].style.display = 'block';
            }
        }
    })
}

displayThemes();


/* Some events are at the same time as others. If the user selects a workshop, don't allow selection of a workshop at the same date and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available.
When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
As a user selects activities, a running total should display below the list of checkboxes. For example, if the user selects "Main Conference", then Total: $200 should appear. If they add 1 workshop, the total should change to Total: $300.
*/

function disableCheckbox() {

    // Checkbox approach
    var checkbox = document.querySelector('.activities');


    // Document Name approach
    var all = document.querySelector('input[name="all"]');
    var jsFramework = document.querySelector('input[name="js-frameworks"]');
    var jsLibs = document.querySelector('input[name="js-libs"]');
    var express = document.querySelector('input[name="express"]');
    var node = document.querySelector('input[name="node"]');
    var buildTools = document.querySelector('input[name="build-tools"]');
    var npm = document.querySelector('input[name="npm"]');
    var totalAmount = document.createElement('h2');
    checkbox.parentNode.insertBefore(totalAmount, checkbox.nextElementSibling);
    var value = 0;

    checkbox.addEventListener('change', function () {

        if (jsFramework.checked) {
            express.disabled = true;
            express.parentNode.className = 'line-through-checkbox';

        } else if (jsFramework.checked === false) {
            express.disabled = false;
            express.parentNode.className = '';
        }

        if (express.checked === true) {
            jsFramework.disabled = true;
            jsFramework.parentNode.className = 'line-through-checkbox';

        } else if (express.checked === false) {
            jsFramework.disabled = false;
            jsFramework.parentNode.className = '';
        }

        if (jsLibs.checked === true) {
            node.disabled = true;
            node.parentNode.className = 'line-through-checkbox';

        } else if (jsLibs.checked === false) {
            node.disabled = false;
            node.parentNode.className = '';
        }

        if (node.checked === true) {
            jsLibs.disabled = true;
            jsLibs.parentNode.className = 'line-through-checkbox';

        } else if (node.checked === false) {
            jsLibs.disabled = false;
            jsLibs.parentNode.className = '';
        }

    });

    checkbox.addEventListener('change', function (e) {

        var isChecked = e.target.checked

        for (var i = 0; i < checkbox.children.length; i++) {
            if (isChecked[i]) {
                console.log(isChecked);
                value += 100;
                break;
            } else {
                value = 0;
            }
        }
        if (jsFramework.checked) {
            express.disabled = true;
            express.parentNode.className = 'line-through-checkbox';
            value += 100;

        } else if (jsFramework.checked === false) {
            express.disabled = false;
            express.parentNode.className = '';
            value = 0;
        }
        if (express.checked === true) {
            jsFramework.disabled = true;
            jsFramework.parentNode.className = 'line-through-checkbox';
            value += 100;

        } else if (express.checked === false) {
            jsFramework.disabled = false;
            jsFramework.parentNode.className = '';
        }

        if (jsLibs.checked === true) {
            node.disabled = true;
            node.parentNode.className = 'line-through-checkbox';
            value += 100;

        } else if (jsLibs.checked === false) {
            node.disabled = false;
            node.parentNode.className = '';
        }

        if (node.checked === true) {
            jsLibs.disabled = true;
            jsLibs.parentNode.className = 'line-through-checkbox';
            value += 100;

        } else if (node.checked === false) {
            jsLibs.disabled = false;
            jsLibs.parentNode.className = '';
        }

        if (npm.checked === true) {
            value += 100;
        }

        if (buildTools.checked === true) {
            value += 100;
        }

        totalAmount.innerHTML = 'Total: $' + value + '.00';

    });

}

disableCheckbox();
