
<script src="https://www.google.com/jsapi"></script>
    <script type="text/javascript">

      google.load('search', '1');

      var imageSearch;
	  var searchTerm = "Georgia";

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
			var holderDiv = document.createElement('div');
			newImg.style.float = "left"
			newImg.style.marginTop= "50px";
			newImg.style.marginLeft="15%";
			//holderDiv.style.width = "600px";
			//holderDiv.style.height = "350px";
			//holderDiv.style.marginLeft="15%";
			//holderDiv.style.float = "left";
			
			var imgW = result.width;
			var imgH = result.height;
			
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
			newImg.style.paddingLeft = ((600 - Math.floor(imgW*ratio))/2) + "px";
			newImg.style.paddingRight = ((600- Math.floor(imgW*ratio))/2) + "px";
			newImg.style.paddingTop = ((350 - Math.floor(imgH*ratio))/2) + "px";
			//alert(((600 - newImg.style.width)/2));
			
			// There is also a result.url property which has the escaped version
			newImg.src=result.url;
			holderDiv.appendChild(newImg);
			contentDiv.appendChild(holderDiv);
        }else{
			alert("No images found :(");
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