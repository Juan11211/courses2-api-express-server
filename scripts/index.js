"use strict"

window.onload = () => {
    fetchCoursesApi(); 
}

window.onload = () => {
    fetchCoursesApi(); 
}

// function fetchCoursesApi(){
//     fetch('http://localhost:8081/api/courses', { 
//         method: "GET"
//     })
//     .then(res => res.json())
//     .then(allCourses => {
//         console.log(allCourses)
//         displayCourseHandler(allCourses)
//     })
//     .catch(err => {
//       `this is not fetching all courses`, err  
//     })
// }
function fetchCoursesApi() {
    fetch('http://localhost:8081/api/courses', { 
        method: "GET"
    })
    .then(res => res.json())
    .then(allCourses => {
        console.log(allCourses);
        displayCourseHandler(allCourses);
    })
    .catch(err => {
        console.error('Error fetching all courses', err);
    });
}


function displayCourseHandler(allCourses){
    let displayCourses = document.getElementById('displayCourses');

    allCourses.forEach(course => {
        displayCourses.innerHTML += `
        <div class="card m-3">
        <div class="card-body">
        <p>Dept: ${course.dept}</p>
        <p>Course Number: ${course.courseNum}</p>
        <p>Course Name: ${course.courseName}</p>
        <p>Course Instructor: ${course.instructor}</p>
        <p>Start Date: ${course.startDate}</p>
        <p>Number of days: ${course.numDays}</p>

        <div>
           <button class='btn btn-light'><a target="_blank" href="confirm-delete.html?courseid=${course.id}">Delete Course</a></button>
        </div>
        </div>
        </div>
        `
    })
}
