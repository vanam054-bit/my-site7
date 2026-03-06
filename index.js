function showImage(id) {
      const images = document.querySelectorAll('.myImage');
      images.forEach(img => img.style.display = 'none');
      document.getElementById(id).style.display = 'block';
}
	  
	  
