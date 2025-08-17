// function openGemModal(gemId) {
//   const modal = document.getElementById('gemModal');
//   const content = document.getElementById('gemModalContent');
  
//   // Fetch gem data (in a real app, this would be an API call)
//   const gemData = {
//     ruby1: {
//       name: 'Premium Ruby',
//       price: '$15,500',
//       image: 'ruby.jpg'
//     }
//     // More gems...
//   };

//   const gem = gemData[gemId];
//   content.innerHTML = `
//     <div class="modal-gem">
//       <img src="${gem.image}" alt="${gem.name}">
//       <h3>${gem.name}</h3>
//       <p>${gem.price}</p>
//     </div>
//   `;
//   modal.style.display = 'block';
// }

// function closeModal(modalId) {
//   document.getElementById(modalId).style.display = 'none';
// }