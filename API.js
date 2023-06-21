async function fetchData() {
    const response = await fetch('/api/clearance');
    const data = await response.json();
    return data;
  }
  
 
  fetchData()
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  