const button = document.getElementById("fetch-button");
button.addEventListener('click', async () => {
    const data={key:"value"}
        fetch('http://localhost:3000/',        {
            method: "POST", 
            body: JSON.stringify(data),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',  
            }
        })
            .then(res=>res.json())
            .then(json=>console.log(json));
});

