const about = document.querySelector('.about');


const carrierListItemTitle = document.querySelectorAll('.carrier_list-item-title');

carrierListItemTitle.forEach(item => {
  item.addEventListener('click', showDescription);
})



function showDescription(event) {
  const marker = event.target.closest('.carrier_list-item');
  if(marker) {
    marker.classList.toggle('active_point');
  } 
  const text = event.target.nextElementSibling;
  if (text) {
    text.classList.toggle('active_description');
  }
  
}
