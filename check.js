 async function fetchurl(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(' response error');
      }
      var jsonres=JSON.parse(response);
      return jsonres;
    } catch (error) {
      console.error('Unable to fetch ', error);
    }
  }
  
  function fetchnames() {
    var furl=fetchurl("https://www.verywellfamily.com/top-1000-baby-boy-names");
    return furl[Math.floor(Math.random() * furl.length)];
  }
  
    
  function RandomNames() {
    const [firstNames, lastNames] = response;
  
      const firstName = fetchnames(firstNames.data);
      const lastName = fetchnames(lastNames.data);
  
      return `${firstName} ${lastName}`;
     
  }
  
  document.getElementById("add").addEventListener("click",RandomNames);  