document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form.sign_up");

    forms.forEach(form => {
        const inputs = form.querySelectorAll("input");

        inputs.forEach(input => {
            input.addEventListener("input", function () {
                input.setCustomValidity("");

                if (input.checkValidity()) {
                    input.classList.remove("show-error");
                }
            });

            input.addEventListener("blur", function () {
                if (!input.checkValidity()) {
                    input.classList.add("show-error");
                }
            });
        });

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let isValid = true;

            inputs.forEach(input => {
                input.setCustomValidity("");
            });

            inputs.forEach(input => {
                if (input.hasAttribute("required") && !input.checkValidity()) {
                    input.classList.add("show-error");
                    isValid = false;
                }
            });

            const mobileInput = form.querySelector('input[name="mobile"]');
            if (mobileInput) {
                const mobileValue = mobileInput.value.trim();
                const mobilePattern = /^\d{10}$/;

                mobileInput.setCustomValidity("");

                if (!mobilePattern.test(mobileValue)) {
                    mobileInput.setCustomValidity("Please enter a 10-digit mobile number");
                    mobileInput.classList.add("show-error");
                    isValid = false;
                } else {
                    if (mobileInput.checkValidity()) {
                        mobileInput.classList.remove("show-error");
                    }
                }
            }

            const password = form.querySelector('input[name="password"], input[name="newPassword"]');
            const confirm = form.querySelector('input[name="confirmPassword"], input[name="confirmNewPassword"]');

            if (password && confirm) {
                confirm.setCustomValidity("");

                if (password.value !== confirm.value) {
                    confirm.setCustomValidity("Passwords do not match");
                    confirm.classList.add("show-error");
                    isValid = false;
                } else {
                    if (confirm.checkValidity()) {
                        confirm.classList.remove("show-error");
                    }
                }
            }

            if (isValid) {
                form.submit();
            }
        });
    });
});
