let yesBtn = document.getElementById('yesBtn');
let courseId; 

window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    courseId = urlParams.get('id');

    // Add this line to check if the button is correctly identified
    console.log(yesBtn);

    yesBtn.onclick = deleteCourseHandler;
};

function deleteCourseHandler() {
    console.log('Delete button clicked');

    fetch(`http://localhost:8081/api/courses/${courseId}`, { 
        method: "DELETE",
        headers: { "Content-type": "application/json" },
    })
    .then(res => res.json())
    .then(deletedCourse => {
        console.log('Course deleted successfully:', deletedCourse);
        
    })
    .catch(err => {
        console.error('Error deleting course:', err);
    });
}
