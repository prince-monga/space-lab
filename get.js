function showSubTechnologies() {
    var technologySelect = document.getElementById('technologySelect');
    var subTechnologies = document.getElementById('subTechnologies');
  
    if (technologySelect.value !== '') {
      subTechnologies.style.display = 'block';
    } else {
      subTechnologies.style.display = 'none';
    }
  
    var subTechnologySelect = document.getElementById('subTechnologySelect');
    subTechnologySelect.innerHTML = ''; // Clear previous options
  
    if (technologySelect.value === 'Web') {
      subTechnologySelect.innerHTML = '<option value="HTML">HTML</option><option value="CSS">CSS</option><option value="JavaScript">JavaScript</option>';
    } else if (technologySelect.value === 'Mobile') {
      subTechnologySelect.innerHTML = '<option value="Android">Android</option><option value="iOS">iOS</option>';
    } else if (technologySelect.value === 'AI') {
      subTechnologySelect.innerHTML = '<option value="Machine Learning">Machine Learning</option><option value="Natural Language Processing">Natural Language Processing</option>';
    }
  }
  
  function validateForm() {
    var emailInput = document.getElementById('emailInput');
    var phoneInput = document.getElementById('phoneInput');
  
    // Basic email format validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert('Please enter a valid email address');
      return false;
    }
  
    // Basic phone number format validation
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneInput.value)) {
      alert('Please enter a valid phone number (10 digits)');
      return false;
    }
  
    return true;
  }
  document.getElementById('fileInput').addEventListener('change', function() {
    var files = this.files;
    if (files.length > 10) {
        alert('You can only upload a maximum of 10 files.');
        this.value = ''; // Clear selected files
    }
});