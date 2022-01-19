let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
menuToggle.onclick = () => {
  menuToggle.classList.toggle('active')
  navigation.classList.toggle('active')
}