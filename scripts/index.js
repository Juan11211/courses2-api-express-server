"use strict"

window.onload = () => {
    fetchCoursesApi(); 
}

function fetchCoursesApi(){
    fetch('http://localhost:8081/api/courses', { 
        method: "GET"
    })
    .then(res => res.json())
    .then(allCourses => {
        console.log(allCourses)
        displayCourseHandler(allCourses)
    })
    .catch(err => `this is not fetching all courses`, err)
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
        // Fetch and display updated courses after deletion
        fetchCoursesApi();
    })
    .catch(err => {
        console.error('Error deleting course:', err);
    });
}
