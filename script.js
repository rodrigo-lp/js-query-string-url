<script>
	const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
	if(urlParams.has('newsletter')){
	  console.log('Tem newsletter');
    document.querySelector('.newslettertopbar_title').click();
  } else {
  	console.log('Não tem newsletter');
  }
</script>
