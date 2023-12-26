import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RatingForm from './components/RatingForm';
import Card from './components/Card';
import Header from './components/Header';
import ThanksPage from './components/ThanksPage';
import { v4 as uuidv4 } from 'uuid';
import { iterate } from 'localforage';
import Feedbacks from './components/Feedbacks';
import FeedbackStats from './components/FeedbackStats';

function App() {
  const [rating, setRating] = useState(10);
  const [submit, setSubmit] = useState(false);
  const [input, setInput] = useState('');

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'It was simple and good',
      rating: 10,
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      rating: 9,
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita doloribus asperiores error, quibusdam aliquid aperiam optio neque ullam odit sed.',
      rating: 8,
    },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.length) {
      alert('Please make an entry for comment!');
      return null;
    }
    const newId = uuidv4();
    const newFeedback = {
      id: newId,
      text: input,
      rating: rating,
    };
    setTasks([newFeedback, ...tasks]);
    setInput('');
    setSubmit(true);
  };
  const handleDelete = (id) => {
    const filtered = tasks.filter((item) => id !== item.id);
    setTasks([...filtered]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Initial timeout');
    }, 1000);
  }, []);

  return (
    <div className="container d-flex justify-content-center vh-100 mt-4">
      <Card>
        <Header />
        <RatingForm
          onSubmit={handleSubmit}
          select={(rating) => setRating(rating)}
          input={input}
          setInput={setInput}
        />
        <FeedbackStats tasks={tasks} />
        {tasks.length > 0 ? (
          <Feedbacks
            handleDelete={handleDelete}
            rating={rating}
            tasks={tasks}
          />
        ) : (
          <p className="text-white fs-4">There is no Comment to Show</p>
        )}
      </Card>
      {submit &&
        setTimeout(() => {
          <ThanksPage rating={rating} />;
        }, 1000)}
    </div>
  );
}

export default App;
