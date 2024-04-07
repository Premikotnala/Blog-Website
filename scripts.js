document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const author = document.getElementById('author').value;

    fetch('/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            content: content,
            author: author
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Post created:', data);
        // Optionally, you can update the UI to display the newly created post
    })
    .catch(error => console.error('Error:', error));
});

// Fetch and display existing posts
fetch('/posts')
    .then(response => response.json())
    .then(posts => {
        console.log('Posts:', posts);
        // Optionally, you can update the UI to display existing posts
    })
    .catch(error => console.error('Error:', error));
