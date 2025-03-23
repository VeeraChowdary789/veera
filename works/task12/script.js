let student = {};
function insert_details() {
const studentId = document.getElementById('ID_student').value;
const studentName = document.getElementById('name').value;
const studentMajor = document.getElementById('major').value;
student.id = studentId;
student.name = studentName;
student.major = studentMajor;
document.getElementById('ID_student').value = '';
document.getElementById('name').value = '';
document.getElementById('major').value = '';
}
function student_details() {
const div = document.getElementById('div_demo');
if (student.id && student.name && student.major) {
div.innerHTML = `
<p>Student ID: ${student.id}</p>
<p>Student Name: ${student.name}</p>
<p>Student Major: ${student.major}</p>
`;
} else {
div.innerHTML = "<p>No data available</p>";
}
}
