useEffect(() => {
let ignore = false; // Hint provided
fetch(`/search?q=${query}`)
.then(res => res.json())
.then(data => {

// TODO: Add check here
if(!ignore){
setResults(data);
}
});
// TODO: Add cleanup function here
return(()=>{ignore==true?false:true})}, [query]);
//done