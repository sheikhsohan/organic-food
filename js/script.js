function countdown(duration) {
	var timer = setInterval(function() {
	  var daysSpan = document.getElementById('days');
	  var hoursSpan = document.getElementById('hours');
	  var minutesSpan = document.getElementById('minutes');
	  var secondsSpan = document.getElementById('seconds');
  
	  var days, hours, minutes, seconds;
  
	  if (duration >= 0) {
		days = Math.floor(duration / (24 * 60 * 60));
		hours = Math.floor((duration % (24 * 60 * 60)) / (60 * 60));
		minutes = Math.floor((duration % (60 * 60)) / 60);
		seconds = Math.floor(duration % 60);
  
		daysSpan.textContent = days;
		hoursSpan.textContent = hours;
		minutesSpan.textContent = minutes;
		secondsSpan.textContent = seconds;
  
		duration--;
	  } else {
		clearInterval(timer);
	  }
	}, 1000);
  }
  
  // Set the duration in seconds
  var duration = 8640000; // Example: 100 days = 86,400,000 seconds
  
  countdown(duration);
  
  AOS.init();


  fetch('data.json')
            .then(response => response.json())
            .then(data => {
                // Get the product list container element
                const productList = document.getElementById('product-list');

                // Iterate through the products data
                data.products.forEach(product => {
                    // Create the necessary HTML elements
                    const colDiv = document.createElement('div');
                    colDiv.className = 'col-lg-3 col-md-3 col-sm-6';

                    const imgBoxDiv = document.createElement('div');
                    imgBoxDiv.className = 'img-box';

                    const productImage = document.createElement('img');
                    productImage.src = product.imageSrc;
                    productImage.alt = 'Product Image';
                    productImage.className = 'image';

                    const productName = document.createElement('h4');
                    productName.textContent = product.productName;

                    const productPrice = document.createElement('p');
                    productPrice.textContent = product.price;

                    // Append the elements to the product list container
                    imgBoxDiv.appendChild(productImage);
                    imgBoxDiv.appendChild(productName);
                    imgBoxDiv.appendChild(productPrice);
                    colDiv.appendChild(imgBoxDiv);
                    productList.appendChild(colDiv);
                });
            });