const apiKey = ''; 

// 1. Basic Request
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

    // 2. Extract Body (ReadableStream -> JSON)
    .then( resp => resp.json() )

    // 3. Process Data
    .then( body => {
        
        const imageUrl = body.data.images.original.url;
        console.log(imageUrl);

        // 4. Render to DOM
        const img = document.createElement('img');
        img.src = imageUrl;
        
        document.body.append(img);
    })
    
    // 5. Error Handling
    .catch( err => console.log('Error:', err) );