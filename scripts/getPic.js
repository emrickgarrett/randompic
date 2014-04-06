<script src="https://www.google.com/jsapi"></script>
    <script type="text/javascript">

      google.load('search', '1');

      var imageSearch;
	  var searchTerm = "Computer";

      function searchComplete() {

        // Check that we got results
        if (imageSearch.results && imageSearch.results.length > 0) {

          // Grab our content div, clear it.
          var contentDiv = document.getElementById('Picture');

          // Loop through our results, printing them to the page.
          var results = imageSearch.results;
			// For each result write it's title and image to the screen
			var result = results[0];
			
			// We use titleNoFormatting so that no HTML tags are left in the 
			// title
			var newImg = document.createElement('img');
			newImg.style.float = "left"
			newImg.style.marginTop= "50px";
			newImg.style.marginLeft="15%";
			
			var imgW = result.height;
			var imgH = result.width;
			
			alert("" + imgW + " : " + imgH);
			
			var ratio = 1.0;
			if(imgW > imgH){
				if(imgW > 600){
					ratio = (600/imgW);
				}
				
			}else{
				if(imgH > 350){
					ratio = (350/imgH);
				}
			}

			newImg.style.width = imgW*ratio + "px";
			newImg.style.height = imgH*ratio + "px";
			
			// There is also a result.url property which has the escaped version
			newImg.src=result.url;
			contentDiv.appendChild(newImg);
        }
      }

      function OnLoad() {
      
        // Create an Image Search instance.
        imageSearch = new google.search.ImageSearch();

        // Set searchComplete as the callback function when a search is 
        // complete.  The imageSearch object will have results in it.
        imageSearch.setSearchCompleteCallback(this, searchComplete, null);

        // Find me a beautiful car.
        imageSearch.execute(searchTerm);
        
        // Include the required Google branding
        google.search.Search.getBranding('branding');
      }
      google.setOnLoadCallback(OnLoad);
    </script>