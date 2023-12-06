"use strict"

window.onload = () => {
    let addBtn = document.getElementById('addBtn')

    let addForm = document.getElementById('addForm');

    addForm.onsubmit = function(event) {
        event.preventDefault(); // Prevents the default form submission

        // Call your fetchPostApi function here or directly place its logic here
        fetchPostApi();
    };
}

function fetchPostApi(){

    let deptInput = document.getElementById('deptInput').value;
    let courseNumInput = Number(document.getElementById('courseNumInput').value);
    let courseNameInput = document.getElementById('courseNameInput').value;
    let instructorInput = document.getElementById('instructorInput').value;
    let startDateInput = document.getElementById('startDateInput').value;
    let numDaysInput  = Number(document.getElementById('numDaysInput').value);                                                                                                                         

    const bodyData = { 
        dept: deptInput,
        courseNum: courseNumInput,
        courseName: courseNameInput,
        instructor: instructorInput,
        startDate: startDateInput,
        numDays: numDaysInput
    }

    fetch('http://localhost:8081/api/courses', {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => res.json()).then(newCourse => {
        console.log(newCourse)
       // displayNewCourse(newCourse)
       window.location.href = 'index.html' 
    }).catch(err => {
        `THIS ISN'T WORKING`
    })
}

// function displayNewCourse(newCourse){

// }
