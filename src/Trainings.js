import{ AiFillEdit,AiOutlineDelete } from 'react-icons/ai'

export const Trainings = ({text, updatingIdInput, deleteProject}) => {
    return(
        <div>
            <p>{text}</p>
            <AiFillEdit onClick={updatingIdInput}></AiFillEdit>
            <AiOutlineDelete onClick={deleteProject}></AiOutlineDelete>
        </div>
    )
}

export default Trainings;
