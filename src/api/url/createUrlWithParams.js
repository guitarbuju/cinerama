
export const createUrlWithParams = (urlParams, endpoint)=>{

const urlSearch = new URL(urlParams.desiredPathname, endpoint );
   
    
Object.entries(urlParams.params).forEach(([key, value]) => {
  urlSearch.searchParams.append(key, value);
});
console.log("Complete URL:", urlSearch.toString()); 

return urlSearch;

};