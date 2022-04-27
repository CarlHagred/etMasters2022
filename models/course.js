import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
  name: String,
  place: String,
});

const Course = mongoose.model('Course', courseSchema);

export default Course;
