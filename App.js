import React, { useState } from 'react';
import { View,ScrollView, Text, Image, Button, StyleSheet } from 'react-native';

const courses = [
  {
    id: 1,
    image: require('./graphic.jpeg'), // Replace with actual image path
    name: 'Degree in Graphic Design',
    description: 'Master the art of visual communication and create stunning graphics.',
    rating: 0,
  },
  {
    id: 2,
    image: require('./tourism.jpeg'), // Replace with actual image path
    name: 'Diploma in Tourism Manegement',
    description: 'welcoming experience is a key component in sustaining any tourism destination.',
    rating: 0,
  },
  {
    id: 3,
    image: require('./software.jpg'), // Replace with actual image path
    name: 'Degree in Software Engineering With Multimedia',
    description: 'Learn the strategies to reach your target audience online.',
    rating: 0,
  },
  {
    id: 4,
    image: require('./BIT.jpg'), // Replace with actual image path
    name: 'Degree in Business Information Technology',
    description: ' information technology has revolutionized the way businesses operate.',
    rating: 0,
  },
  {
    id: 5,
    image: require('./fashion.jpeg'), // Replace with actual image path
    name: 'Deploma in Fashion Design',
    description: 'Express your creativity and design clothing that inspires.',
    rating: 0,
  },
];

const Course = ({ course }) => {
  const [rating, setRating] = useState(course.rating);

  const handleRate = () => {
    if (rating < 6) {
      setRating(rating + 1);
    }
  };

  return (
    
    <View style={styles.course}>
      <Image source={course.image} style={styles.courseImage} />
      <Text style={styles.courseName}>{course.name}</Text>
      <Text style={styles.courseDescription}>{course.description}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>Rating: {rating}</Text>
        <Button title="Rate" onPress={handleRate} />
      </View>
    </View>
    
  );
};

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
      <Text style={styles.header}>Limkokwing University Prospectus</Text>
      <Image
      source={require('./logo.jpg')}
      style={styles.profilepicture}/>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
       
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  course: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  courseImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  courseDescription: {
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
  },
});

export default App;
