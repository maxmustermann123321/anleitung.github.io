$(document).ready(function() {
 $("#search").keyup(function() {
 ...
 });
});
var albums = $(".album");
$(albums).show();
albums.each(function(){
 if($(this).text().toLocaleLowerCase().search(searchTerm) == -1) {
 $(this).hide();
 }
});
…
<body>
 <div class="pagecontent">
 <h1>Albums <input id="search" type="text" placeholder="Search"/></h1>
 <div class="line"></div>
 <div class="album">
…
 </div>
 <div class="album">
…
 </div>
 …
 </div>
</body>
