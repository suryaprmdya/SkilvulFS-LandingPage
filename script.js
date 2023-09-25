// Tambahkan kode JavaScript kalian di file ini

function handleGetFormData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const zipCode = document.getElementById('zip-code').value;
    const status = document.getElementById('status').checked;
  
    return {
      name: name,
      email: email,
      city: city,
      zipCode: zipCode,
      status: status
    };
}

function isNumber(input) {
    for (let i = 0; i < input.length; i++) {
      if (isNaN(input[i])) {
        return false;
      }
    }
    return true;
}
  
  // Contoh penggunaan
//   console.log(isNumber('12345'));   // Output: true
//   console.log(isNumber('12a45'));   // Output: false

function checkboxIsChecked() {
    const checkbox = document.getElementById('status');
    if (checkbox) {
      return checkbox.checked;
    } else {
      return false;
    }
  }
  
  // Contoh penggunaan
//   const isCheckboxChecked = checkboxIsChecked();
//   console.log('Checkbox checked:', isCheckboxChecked);
  
function validateFormData() {
    const zipCodeInput = document.getElementById('zip-code').value;
    const isZipCodeValid = isNumber(zipCodeInput);
    const isCheckboxCheckedValue = checkboxIsChecked();
  
    if (!isZipCodeValid) {
      const warningDiv = document.getElementById('warning');
      warningDiv.textContent = 'Masukkan zip code yang valid.';
    } else if (!isCheckboxCheckedValue) {
      const warningDiv = document.getElementById('warning');
      warningDiv.textContent = 'Centang checkbox sebelum submit.';
    } else {
      const warningDiv = document.getElementById('warning');
      warningDiv.textContent = '';
    }
  
    return isZipCodeValid && isCheckboxCheckedValue;
}
  
function submit(event) {
    event.preventDefault();  // Mencegah refresh halaman saat submit
  
    const isFormValid = validateFormData();
  
    if (!isFormValid) {
      // Form tidak valid, tidak lakukan submit
      console.log('Form tidak valid. Periksa form anda sekali lagi.');
    } else {
      // Form valid, lakukan submit
      console.log('Form valid. Melakukan submit...');
      // Lakukan tindakan submit form di sini
      console.log(handleGetFormData())
    }
}
  
  // Menghubungkan fungsi submit dengan form
const form = document.getElementById('form'); // Ganti dengan ID form Anda
form.addEventListener('submit', submit);
  