import { useEffect, useState } from 'react';
import './App.css';
import { Trainings } from './Trainings';
import { getAllTrainings, saveProjects , editProject, deleteProject} from './FetchTrainings';

function Main() {
  const [myTraining, setTraining] = useState([]);
  const [title, setTitle] = useState('');
  const [editing , setEditing] = useState(false);
  const [trainingId, setTrainingID] = useState('')

  useEffect(() => {
    getAllTrainings(setTraining)
  },[]);


  const updatingIdInput = (_id, title) =>{
    setEditing(true)
    setTitle(title)
    setTrainingID(_id)
  }

  return (
    <div className='main'>
      <h1>Твой план тренировки на день</h1>
      <input
        type='text'
        placeholder='  Добавь упражнение'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

       <button disabled={!title} 
       onClick=
        {editing ? () => editProject(trainingId, title , setTraining , setTitle , setEditing) : () => saveProjects (title, setTitle , setTraining)} >
        {editing ? 'Edit' : 'Добавь'} 
      </button>

{myTraining.map((training)  => <Trainings text={training.title} key={training._id}
updatingIdInput={() => updatingIdInput (training._id, training.title)}
deleteProject={() => deleteProject(training._id, setTraining)}

/>
)}

    </div>
  );
}

export default Main;
