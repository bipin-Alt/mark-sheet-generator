const generateBtn = document.querySelector('.generate-btn');
const calculateMarks = () => {
    // Fetch input values every time the button is clicked
    // if it wasn't done then  the marksheet will not update the details everytime the generate btn is pressed//
    const studentInputName = document.getElementById('student-name-input').value;
    const studentInputClass = document.getElementById('class-input').value;
    const englishMarksInput = parseInt(document.getElementById('english-marks-input').value);
    const mathMarksInput = parseInt(document.getElementById('maths-marks-input').value);
    const nepaliMarksInput = parseInt(document.getElementById('nepali-marks-input').value);
    const chemistryMarksInput = parseInt(document.getElementById('chemistry-marks-input').value);
    const physicsMarksInput = parseInt(document.getElementById('physics-marks-input').value);
  
    // selection of elements to display particular results//
    const studentNameDisplay = document.getElementById('student-name-display');
    const studentClassDisplay = document.getElementById('class-display');
    const englishMarksDisplay = document.getElementById('english-result-display');
    const mathMarksDisplay = document.getElementById('maths-result-display');
    const nepaliMarksDisplay = document.getElementById('nepali-result-display');
    const chemistryMarksDisplay = document.getElementById('chemistry-result-display');
    const physicsMarksDisplay = document.getElementById('physics-result-display');
    const totalMarksDisplay = document.getElementById('total-marks');
    const percentageDisplay = document.getElementById('percentage');
    const gradeDisplay = document.getElementById('Grade');
    const highestMarksDisplay = document.getElementById('highest');
    const remarks = document.querySelector('.desc');
  
    studentClassDisplay.textContent = studentInputClass;
    studentNameDisplay.textContent = studentInputName;
  
    // Define passing marks//
    const passingMarks = 35;
  
    // Update marks display like (*) and check for failed subjects//
    let failedSubjects = [];
    const updateSubjectDisplay = (marks, displayElement, subjectName) => {
      if (marks < passingMarks) {
        displayElement.textContent = `${subjectName}*`;
        failedSubjects.push(subjectName);
      } else {
        displayElement.textContent = marks;
      }
    };
  
    updateSubjectDisplay(englishMarksInput, englishMarksDisplay, 'English');
    updateSubjectDisplay(mathMarksInput, mathMarksDisplay, 'Math');
    updateSubjectDisplay(nepaliMarksInput, nepaliMarksDisplay, 'Nepali');
    updateSubjectDisplay(chemistryMarksInput, chemistryMarksDisplay, 'Chemistry');
    updateSubjectDisplay(physicsMarksInput, physicsMarksDisplay, 'Physics');
  
    // Check if the student failed any subject//
    const hasFailed = failedSubjects.length > 0;
  
    if (hasFailed) {
      // Handle failure
      gradeDisplay.textContent = 'Fail';
      percentageDisplay.textContent = '';
      highestMarksDisplay.textContent = '';
      remarks.textContent = `Failed in ${failedSubjects.join(', ')}. Work harder next time!`;
      remarks.style.color = 'red';
  
      setTimeout(() => {
        remarks.textContent = '';
      }, 10000);
      return; // Exit function as the student has failed//
    }
  
    // If passed, calculate total marks and percentage//
    const totalObtainedMarks = englishMarksInput + mathMarksInput + nepaliMarksInput + chemistryMarksInput + physicsMarksInput;
    const totalMarks = 500;
    const percentage = (totalObtainedMarks / totalMarks) * 100;
  
    totalMarksDisplay.textContent = totalObtainedMarks;
    percentageDisplay.textContent = `${percentage.toFixed(2)}%`;
    highestMarksDisplay.textContent = Math.max(englishMarksInput, mathMarksInput, nepaliMarksInput, chemistryMarksInput, physicsMarksInput);
  
    // Determine grade based on percentage
    if (percentage >= 90) {
      gradeDisplay.textContent = 'A+';
      remarks.textContent = 'Excellent!You are doing great.';
      remarks.style.color = 'green';
    } else if (percentage >= 80) {
      gradeDisplay.textContent = 'A';
      remarks.textContent = 'Good results! Keep it up!';
      remarks.style.color = 'green';
    } else if (percentage >= 70) {
      gradeDisplay.textContent = 'B+';
      remarks.textContent = 'Average. Keep improving!';
      remarks.style.color = 'green';
    } else if (percentage >= 60) {
      gradeDisplay.textContent = 'B';
      remarks.textContent = 'You passed. Work harder!';
      remarks.style.color = 'black';
    } else if (percentage >= 50) {
      gradeDisplay.textContent = 'C+';
      remarks.textContent = 'You passed. Keep working!';
      remarks.style.color = 'black';
    } else if (percentage >= 35) {
      gradeDisplay.textContent = 'C';
      remarks.textContent = 'Just passed. Aim higher!';
      remarks.style.color = 'black';
    }else if(percentage < 35){
      gradeDisplay.textContent = 'Fail';
      remarks.textContent = 'You failed. Work harder next time!';
      remarks.style.color = 'red';
    }
    //remove the remarks after 7 seconds
    setTimeout(() => {
      remarks.textContent = '';
    }, 10000);
  };
  
  // Add event listener to the generate button //
  generateBtn.addEventListener('click', calculateMarks);
  