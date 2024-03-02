var currentDate = Date.now();

var form = document.getElementById('userForm');

var hiddenInput = document.createElement('input');

hiddenInput.type = 'hidden';
hiddenInput.name = 'submissionDate';
hiddenInput.id = 'submissionDate';
hiddenInput.value = currentDate;

form.appendChild(hiddenInput);