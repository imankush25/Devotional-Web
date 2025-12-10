const form = document.getElementById('checkoutForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;
    
      const mobile   = document.getElementById('mobile');
      const fullName = document.getElementById('fullName');
      const address  = document.getElementById('address');
      const city     = document.getElementById('city');
      const state    = document.getElementById('state');
      const pincode  = document.getElementById('pincode');

      function setError(input, errorId, message) {
        const errorEl = document.getElementById(errorId);
        errorEl.textContent = message;
        input.classList.add('input-error');
        isValid = false;
      }

      function clearError(input, errorId) {
        const errorEl = document.getElementById(errorId);
        errorEl.textContent = '';
        input.classList.remove('input-error');
      }

      isValid = true;

      clearError(mobile, 'error-mobile');
      if (!/^[6-9]\d{9}$/.test(mobile.value.trim())) {
        setError(mobile, 'error-mobile', 'Enter a valid 10 digit mobile number');
      }

      clearError(fullName, 'error-fullName');
      if (fullName.value.trim().length < 3) {
        setError(fullName, 'error-fullName', 'Please enter your full name');
      }

      clearError(address, 'error-address');
      if (address.value.trim() && address.value.trim().length < 5) {
        setError(address, 'error-address', 'Please enter a valid address');
      }

      clearError(city, 'error-city');
      if (!/^[a-zA-Z\s]{2,}$/.test(city.value.trim())) {
        setError(city, 'error-city', 'Enter a valid city name');
      }

      clearError(state, 'error-state');
      if (!/^[a-zA-Z\s]{2,}$/.test(state.value.trim())) {
        setError(state, 'error-state', 'Enter a valid state name');
      }

      clearError(pincode, 'error-pincode');
      if (!/^\d{6}$/.test(pincode.value.trim())) {
        setError(pincode, 'error-pincode', 'Enter a valid 6 digit pincode');
      }

      if (isValid) {
        alert('Address saved successfully!');
      }
});