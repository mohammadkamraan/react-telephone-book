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
        axios.post(`https://react-telephone-book-default-rtdb.asia-southeast1.firebasedatabase.app/telephone.json`, { phoneNum: phone, contact: audience })
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
        <div className='div container mt-2 bg-blue-300 rounded-lg block'>
            <p className='p text-white text-center'>please add info</p>
            <input type='text' placeholder='phone' className='phoneInput border-2 border-blue-300 rounded-lg 
            bg-purple-200 block placeholder-white hover:bg-purple-300 mx-auto'

                onChange={savePhone} />
            <input type='text' placeholder='name' className='nameInput bg-purple-200 
            border-2 border-blue-300 rounded-lg placeholder-white hover:bg-purple-300 block
            mx-auto'
                onChange={saveName} />
            <button className='btn btn-success button block p-6 text-white containar x-auto'
                onClick={sendToRedux}>send</button>
        </div>
    );
}

export default Add;