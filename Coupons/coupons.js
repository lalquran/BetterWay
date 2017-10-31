		function bananaCode() {
			var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
			var string_length = 8;
			var randomstring = '';
			for (var i=0; i<string_length; i++) {
				var rnum = Math.floor(Math.random() * chars.length);
				randomstring += chars.substring(rnum,rnum+1);
			}
			document.bananaform.innerHTML = 'banana' + randomstring;
		}
		function blueberryCode() {
			var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
			var string_length = 8;
			var randomstring = '';
			for (var i=0; i<string_length; i++) {
				var rnum = Math.floor(Math.random() * chars.length);
				randomstring += chars.substring(rnum,rnum+1);
			}
			document.blueberryform.innerHTML = 'blueberry' + randomstring;
		}

		function raspberryCode() {
			var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
			var string_length = 8;
			var randomstring = '';
			for (var i=0; i<string_length; i++) {
				var rnum = Math.floor(Math.random() * chars.length);
				randomstring += chars.substring(rnum,rnum+1);
			}
			document.raspberryform.innerHTML = 'raspberry' + randomstring;
		}

		function bananaCoupon() {	
			var price = 7;
			var coupon = 0.1
			newPrice = price - (price * coupon);
			document.bananaPriceForm.bananaPrice.value = '$' + newPrice + 0;
		}

		function blueberryCoupon() {	
			var price = 5;
			var coupon = 0.05;	
			newPrice = price - (price * coupon);
			document.blueberryPriceForm.blueberryPrice.value = '$' + newPrice;
		}

		function raspberryCoupon() {	
			var price = 3;
			var coupon = 0.1;	
			newPrice = price - (price * coupon);
			document.raspberryPriceForm.raspberryPrice.value = '$' + newPrice + 0;
		}