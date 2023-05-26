// Get modal element
const modal = document.getElementById('modal');

// Get modal close button
const modalCloseBtn = document.getElementById('modal-close-btn');

// Get consent form
const consentForm = document.getElementById('consent-form');

// Get modal text element
const modalText = document.getElementById('modal-text');

// Get decline button
const declineBtn = document.getElementById('decline-btn');

// Get modal choice buttons container
const modalChoiceBtns = document.getElementById('modal-choice-btns');

// Display modal after 1.5 seconds
setTimeout(function(){
    modal.style.display = 'inline';
}, 1500);

// Close modal when close button is clicked
modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none';
});

// Add class to reverse modal choice buttons on mouseenter
declineBtn.addEventListener('mouseenter', function(){
    modalChoiceBtns.classList.toggle('modal-btns-reverse');
});

// Handle form submission
consentForm.addEventListener('submit', function(e){
    e.preventDefault();
    
    // Get form data
    const consentFormData = new FormData(consentForm);
    const fullName = consentFormData.get('fullName');
    
    // Display loading animation in modal text
    modalText.innerHTML = `
        <div class="svg-loader">
            <svg class="svg-container" height="100" width="100" viewBox="0 0 100 100">
                <circle class="loader-svg bg" cx="50" cy="50" r="45"></circle>
                <circle class="loader-svg animate" cx="50" cy="50" r="45"></circle>
            </svg>
            
        </div>
        <p class ="cookie-loader">I smell....</p>
        
    `;
    
    // Update text after 1.5 seconds
    setTimeout(function(){
        document.getElementById('upload-text').innerText = `
            Making the sale...
        `;
    }, 1500);
    
    // Update modal content after 3 seconds
    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = `
            <h2>Thanks <span class="modal-display-name">${fullName}</span>, COOKIE COOKIE!</h2>
            <p>Nom Nom Nom Nom</p>
            <div class="cookie-gif">
                <img src="./assets/images/cookie.gif">
            </div>
        `;
        modalCloseBtn.disabled = false;
    }, 3000);
});
