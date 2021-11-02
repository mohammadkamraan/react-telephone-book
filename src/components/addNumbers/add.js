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
        let phoneNum = e.target.value.replace(/\D/g, '')
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
        setPhone('')
        setAudience('')
    }
    return (
        <div className='div container mt-2 mb-5 bg-blue-300 rounded-lg '>
            <p className='p text-white text-center'>please add info</p>
            <input type='text' placeholder='phone' className='phoneInput border-2 border-blue-300 rounded-lg 
            bg-purple-200 block placeholder-white hover:bg-purple-300 mx-auto mb-3'
                onChange={savePhone}
                value={phone} />
            <input type='text' placeholder='name' className='nameInput bg-purple-200 mb-3
            border-2 border-blue-300 rounded-lg placeholder-white hover:bg-purple-300 block
            mx-auto'
                onChange={saveName}
                value={audience} />
            {
                phone.length == 0 || audience.length == 0
                    ? <p className='validationP  text-center'>please inter name and phone number</p>
                    : <button className='button bg-green-300 p-2 rounded-lg hover:bg-green-400 block
                    mx-auto'
                        onClick={sendToRedux}>save</button>
            }
        </div >
    );
}
// btn btn-success button p-2 mb-3 mx-auto  text-white containar mx-auto inline-block

export default Add;