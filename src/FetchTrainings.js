import axios from 'axios';


const getAllTrainings = (setTraining) => {
    axios.get("https://final-node-isba.onrender.com")
    .then(({data}) => {console.log(data)
    setTraining(data);
})
}

const saveProjects = (title, setTitle, setTraining) =>{
    axios.post('https://final-node-isba.onrender.com/saveProjects',{title})
    .then((data) => {
        console.log(data);
        setTitle("")
        getAllTrainings(setTraining)
    })
}

const editProject = (trainingId, title , setTraining , setTitle , setEditing) =>{
    axios.post('https://final-node-isba.onrender.comeditProject',{_id:trainingId, title})
    .then((data) => {
        console.log(data);
        setTitle("")
        setEditing(false)
        getAllTrainings(setTraining)
    })
}

const deleteProject = (_id,setTraining) => {
    axios.delete('https://final-node-isba.onrender.com/deleteProject', {data: {_id}})
    .then((data) => {
        console.log(data)
        getAllTrainings(setTraining)
    })
}


export {getAllTrainings , saveProjects , editProject, deleteProject};