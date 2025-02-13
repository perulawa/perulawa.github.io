function sendData() {
    const songName = document.getElementById('songName');
    const albumName = document.getElementById('albumName');
    const artistName = document.getElementById('artistName');
    const duration = document.getElementById('duration');
    const genre = document.getElementById('genre');

    if (songName && albumName && artistName && duration && genre) {
        const data = {
            string1: songName,
            string2: albumName,
            string3: artistName,
            string4: duration,
            string5: genre
        };

        fetch('http://localhost:8000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            alert('Data sent successfully!');
        })
        .catch(error => {
            console.error('Error sending data:', error);
            alert('Error submitting data.');
        });
    } else {
        alert('Please fill in all fields!');
    }
}
