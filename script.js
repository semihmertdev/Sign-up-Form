document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('form');
    var passwordField = document.getElementById('password');
    var confirmPasswordField = document.getElementById('confirm-password');
    var errorDiv = document.querySelector('.error');
    var submitButton = document.querySelector('button[type="submit"]');

    function validatePasswordFields() {
        var passwordsMatch = passwordField.value === confirmPasswordField.value && passwordField.value !== '';

        errorDiv.style.display = passwordsMatch ? 'none' : 'block';
        submitButton.disabled = !passwordsMatch;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validatePasswordFields();
        if (!submitButton.disabled) form.submit();
    });

    [passwordField, confirmPasswordField].forEach(function(field) {
        field.addEventListener('input', validatePasswordFields);
    });
});
