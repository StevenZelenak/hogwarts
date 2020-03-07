import './studentCard.scss';

const createdStudentCard = (student) => {
  let domString = '<div class = "student-card>';
  domString += '<div class = "img-holder>';
  domString += `<img src=${student.picture}" alt=""/>`;
  domString += '</div>';
  domString += `<h2>${student.name}</h2>`;
  domString += '</li>';

  return domString;
};

export default {
  createdStudentCard,
};
