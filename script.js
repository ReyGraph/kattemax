// scripts.js

async function likeSong(songId) {
    const response = await fetch(`/like?songId=${songId}`, {
        method: 'POST',
    });
    const result = await response.json();

    if (result.success) {
        const likeCountElement = document.getElementById(`like-count-${songId}`);
        likeCountElement.textContent = result.likes;
    } else {
        alert(result.message);
    }
}

