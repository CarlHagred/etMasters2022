import Competition from '../../models/competition.js';
import Course from '../../models/course.js';

export const getCompetitions = async (req, res) => {
  let competition = await Competition.findById('6267cc1557687630f07262ed');
  console.log(competition);
};

export const postRounds = async (req, res) => {};

export const getCourses = async (req, res) => {
  const course = await Course.find();
  console.log(course);
};
