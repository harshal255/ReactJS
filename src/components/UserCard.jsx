import ModalBox from './Modalbox';
import { Edit } from './Icons/Edit';
import { Trash2 } from './Icons/Trash2';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ type, user, deleteUser }) => {
    const { id, name, username, password, email } = { ...user };
    const navigate = useNavigate();

    return (
        <div key={id || i} className='relative bg-zinc-900 min-w-[400px] rounded-lg p-12 border border-orange-500 text-lg'>
            <div className="flex absolute top-3 left-0 items-center justify-between w-full px-3">
                <span className='z-0 text-lg p-3 flex items-center justify-center h-10 w-10 rounded-full bg-black text-yellow-400 font-bold'>{id}</span>
                <span className="flex items-center gap-3">
                    {
                        type === "localStorage" ?
                            <div className='cursor-pointer z-0 text-lg p-3 flex items-center justify-center h-10 w-10 rounded-full bg-black text-yellow-400 font-bold'>
                                <ModalBox {...user}><Edit /></ModalBox>
                            </div> :
                            <button onClick={() => navigate(`/api-integration/edit-user/${id}`)} className='cursor-pointer z-0 text-lg p-3 flex items-center justify-center h-10 w-10 rounded-full bg-black text-yellow-400 font-bold'>
                                <Edit />
                            </button>
                    }

                    <button onClick={() => { deleteUser(id) }} className='cursor-pointer z-0 text-lg p-3 flex items-center justify-center h-10 w-10 rounded-full bg-black text-yellow-400 font-bold'><Trash2 /></button>
                </span>
            </div>
            <div className='flex flex-col gap-2 relative z-10 '>
                <span>Name: {name}</span>
                <span>Email: {email}</span>
                <span>Username: {username}</span>
                <span>Password: {password}</span>
            </div>
        </div>
    )
}

export default UserCard