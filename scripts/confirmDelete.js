"use strict";

window.onload = () => {
    const urlParams = new URLSearchParams(location.search);
    let courseId = urlParams.get('id');

    let yesBtn = document.getElementById('yesBtn');

    yesBtn.onclick = () => fetchDeleteReq(courseId);
}

function fetchDeleteReq(courseId) {
    fetch(`http://localhost:8081/api/courses/${courseId}`, { 
        method: "DELETE"
    })
    .then(res => res.json())
    .then(deletedCourse => {
        console.log(deletedCourse);
        // Assuming successful deletion, redirect to index.html
        location.href = 'index.html';
    })
    .catch(err => {
        console.error('Error deleting the course', err);
        // Handle error and provide user feedback if needed
    });
}
