import React, { useState } from 'react';
import './add.css';
import { sendNums, sendNames, sendID } from '../actions';

import { useDispatch } from 'react-redux';
import axios from 'axios';

const Add = () => {
    const [phone, setPhone] = useState('')
    const [audience, setAudience] = useState('')
    const dispatch = useDispatch()

    const savePhone = (e) => {
        let phoneNum = e.target.value
        setPhone(phoneNum)
    }
    const saveName = (e) => {
        let name = e.target.value
        setAudience(name)
    }
    const sendToRedux = () => {
        axios.post(`https://react-telephone-book-default-rtdb.asia-southeast1.firebasedatabase.app/telephone.json`, [phone, audience])
            .then(response => {
                dispatch(sendID(response.data.name))
            })
            .catch(e => {
                console.log(e)
            })

        dispatch(sendNums(phone))
        dispatch(sendNames(audience))
    }
    return (
        <div className='div bg-blue-300 rounded-lg'>
            <p className='p text-white text-center'>please add info</p>
            <input type='text' placeholder='phone' className='phoneInput border-2 border-blue-300 rounded-lg 
            bg-purple-200 inline-block placeholder-white hover:bg-purple-300'

                onChange={savePhone} />
            <input type='text' placeholder='name' className='nameInput bg-purple-200 
            border-2 border-blue-300 rounded-lg placeholder-white hover:bg-purple-300'
                onChange={saveName} />
            <button className='btn bg-green-300 p-2 rounded-lg
            hover:bg-green-400 text-white'
                onClick={sendToRedux}>send</button>
        </div>
    );
}

export default Add;