"use strict";

let yesBtn = document.getElementById('yesBtn');
let courseId; 

window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    courseId = urlParams.get('id');

    fetchCoursesApi(courseId);

    // Add this line to check if the button is correctly identified
    console.log(yesBtn);

    yesBtn.onclick = deleteCourseHandler;
};


function fetchCoursesApi(courseId) {
    fetch(`http://localhost:8081/api/courses/${courseId}`, { 
        method: "GET"
    })
    .then(res => res.json())
    .then(courseData => {
        displayCourseDataHandler(courseData);
    })
    .catch(err => {
        console.error('Error fetching course data:', err);
    });
}

function displayCourseDataHandler(courseData) {
    let displayDeletedMessage = document.getElementById('displayDeletedMessage');

    displayDeletedMessage.innerHTML += `
        <div>${courseData.courseName}</div>
        <div>${courseData.instructor}</div>
    `;
}

function deleteCourseHandler() {
    console.log('Delete button clicked');

    fetch(`http://localhost:8081/api/courses/${courseId}`, { 
        method: "DELETE",
        headers: { "Content-type": "application/json" },
    })
    .then(res => res.json())
    .then(deletedCourse => {
        console.log('Course deleted successfully:', deletedCourse);
        window.location.href = "index.html";
    })
    .catch(err => {
        console.error('Error deleting course:', err);
    });
}

