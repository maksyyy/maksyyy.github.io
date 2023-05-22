function goHome() {
    window.location.href = 'profil.html';
  }
  function toggleSidebar() {
	var sidebar = document.getElementById("sidebar");
	sidebar.classList.toggle("show");
	
	var toggleButton = document.querySelector(".toggle-button");
	toggleButton.classList.toggle("open");
}



  