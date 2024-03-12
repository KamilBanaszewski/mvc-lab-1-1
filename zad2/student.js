const FULLNAME = "Kamil Banaszewski";
const STUDENT_ID = 42876;

const student = {
  getStudentFullName: function() {
    return FULLNAME;
  },
  getStudentId: function() {
    return STUDENT_ID;
  }
};

console.log(`My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentId()}`);
