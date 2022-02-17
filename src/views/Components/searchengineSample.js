<!DOCTYPE html>
<html>

<body>
The content of the body element is displayed in your browser.
<input type="text" id="searchbox">
<div id="output"></div>
</body>
<script>
/* this function handles the data */
function myAmazingFunction(data){
	document.getElementById('output').innerHTML = data;
    console.log(data)
}

/* this variable will hold the script tag with your desired data */
var myScript = '';

/* this section handles what happens after a key is pressed inside your input text box */
document.getElementById('searchbox').onkeyup = function(){

	/* this variable stores whatever is in the input text box */
	var stuff_in_text_box = document.getElementById('searchbox').value;

	/* this is the script that will hold the data we're trying to get */
	myScript = document.createElement('script');
	
	/* this sets the src of the script equal to the url of the data */
	//myScript.src = 'https://en.wikipedia.org/w/api.php?action=opensearch&limit=10&format=json&callback=myAmazingFunction&search='+stuff_in_text_box; 
    //myScript.src = `https://www.google.com/complete/search?client=hp&hl=en&sugexp=msedr&gs_rn=62&gs_ri=hp&cp=1&gs_id=9c&q=`+stuff_in_text_box + `&xhr=t`
    //myScript.src = 'https://duckduckgo.com/ac/?callback=myAmazingFunction&q=' + stuff_in_text_box + '&kl=wt-wt'
    myScript.src = 'https://api.duckduckgo.com/?q=' + stuff_in_text_box + '&format=json&callback=myAmazingFunction'
    
    //myScript.src = 'https://www.bing.com/AS/Suggestions?pt=page.home&mkt=en-in&qry=' + stuff_in_text_box + '&asv=1&cp=1&msbqf=false&cvid=9FFE1FE048F44B4BAD6AA1DAC8669BCA&callback=myAmazingFunction'
    //myScript.src = `https://suggestqueries-clients6.youtube.com/complete/search?client=youtube&hl=en&gl=in&gs_rn=64&gs_ri=youtube&ds=yt&cp=1&gs_id=z&q=${stuff_in_text_box}&xhr=t&xssi=t`
    
    //myScript.onload = myAmazingFunction;

	/* this attaches the script to the body of the page */
	document.body.appendChild(myScript);
};
</script>
</html>


{/* https://duckduckgo.com/i/0ee59262.png */}