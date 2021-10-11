// ex 1
console.log('Exercise 1');

const movieList = [
	{
	  title: "Batman",
	  year: 1989,
	  director: "Tim Burton",
	  imdbRating: 7.6
	},
	{
	  title: "Batman Returns",
	  year: 1992,
	  director: "Tim Burton",
	  imdbRating: 7.0
	},
	{
	  title: "Batman Forever",
	  year: 1995,
	  director: "Joel Schumacher",
	  imdbRating: 5.4
	},
	{
	  title: "Batman & Robin",
	  year: 1997,
	  director: "Joel Schumacher",
	  imdbRating: 3.7
	},
	{
	  title: "Batman Begins",
	  year: 2005,
	  director: "Christopher Nolan",
	  imdbRating: 8.3
	},
	{
	  title: "The Dark Knight",
	  year: 2008,
	  director: "Christopher Nolan",
	  imdbRating: 9.0
	},
	{
	  title: "The Dark Knight Rises",
	  year: 2012,
	  director: "Christopher Nolan",
	  imdbRating: 8.5
	}
  ];

const before2000Filter = movie => movie.year < 2000;
const titleMap = movie => movie.title;
const moviesBefore2000 = movieList.filter(before2000Filter).map(titleMap);
  
console.log(moviesBefore2000);

// ex 2
console.log('Exercise 2');
const governmentForms = [
	{
	  name: "Plutocracy",
	  definition: "Rule by the wealthy"
	},
	{
	  name: "Oligarchy",
	  definition: "Rule by a small number of people"
	},
	{
	  name: "Kleptocracy",
	  definition: "Rule by the thieves"
	},
	{
	  name: "Theocracy",
	  definition: "Rule by a religious elite"
	},
	{
	  name: "Democracy",
	  definition: "Rule by the people"
	},
	{
	  name: "Autocracy",
	  definition: "Rule by a single person"
	}
  ];
  
// TODO: compute the formsEndingWithCy array
// Should show ["Plutocracy", "Kleptocracy", "Theocracy", "Democracy", "Autocracy"]
const filterByCY = form => form.slice(form.length -2, form.length) === 'cy';
const mapByName = form => form.name;
const formsEndingWithCy = governmentForms.map(mapByName).filter(filterByCY);

console.log(formsEndingWithCy);

// ex 3
console.log('Exercise 3');
const arrays = [[1, 4], [11], [3, 5, 7]];

// TODO: compute the value of the arraysSum variable
const arraysSum = arrays.flat().reduce((acc, value) => acc + value, 0);

console.log(arraysSum); // Should show 31

// ex 4
console.log('Exercise 4');
const students = [
	{
	  name: "Anna",
	  sex: "f",
	  grades: [4.5, 3.5, 4]
	},
	{
	  name: "Dennis",
	  sex: "m",
	  country: "Germany",
	  grades: [5, 1.5, 4]
	},
	{
	  name: "Martha",
	  sex: "f",
	  grades: [5, 4, 2.5, 3]
	},
	{
	  name: "Brock",
	  sex: "m",
	  grades: [4, 3, 2]
	}
  ];
  
  // Compute female student results
const femaleStudentsResults = [];
for (const student of students) {
  if (student.sex === "f") {
    let gradesSum = 0;
    for (const grade of student.grades) {
      gradesSum += grade;
    }
    const averageGrade = gradesSum / student.grades.length;
    femaleStudentsResults.push({
      name: student.name,
      avgGrade: averageGrade
    });
  }
}


// functional
const functionalFemaleStudentsResults = [];

const femaleStudents = students => {
	return students.filter(student => student.sex === 'f');
}

const femaleStudentNames = students => {
	return students.filter(student => student.sex === 'f').map(student => student.name)
}

const femaleStudentGrades = students => {
	// return students.map(student => student.grades);
	return students.filter(student => student.sex === 'f').map(student => student.grades);
}

const averageGrade = grades => {
	// return grades.reduce((acc, grade) => acc + grade, 0)
	return grades.map(g => g).flat().reduce((a, v) => a + v, 0)
}

console.log(femaleStudents(students));
console.log(femaleStudentNames(students));
// console.log(studentGrades(femaleStudents(students)));
console.log(averageGrade([1, 2, 3]));
console.log(femaleStudentGrades(students));
console.log(averageGrade(femaleStudentGrades(students)));
// console.log(... femaleStudentsResults);
// console.log(... functionalFemaleStudentsResults);
// console.log(femaleStudentsResults === functionalFemaleStudentsResults);