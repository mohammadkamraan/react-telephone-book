import React, { useState } from 'react';

import { sendNums, sendNames } from './../../actions';
import { useDispatch } from 'react-redux';

import './add.css';

import axios from 'axios';


const Add = () => {
    const [phone, setPhone] = useState('')
    const [name, setname] = useState('')
    const dispatch = useDispatch()

    const enterPhone = (e) => {
        let phoneNum = e.target.value.replace(/\D/g, '')
        setPhone(phoneNum)
    }
    const enterName = (e) => {
        let contactName = e.target.value
        setname(contactName)
    }

    const sendContacts = () => {
        axios.post(`https://react-telephone-book-default-rtdb.asia-southeast1.firebasedatabase.app/telephone.json`, { phoneNum: phone, contact: name })
            .catch(e => {
                console.log(e)
            })
        dispatch(sendNums(phone))
        dispatch(sendNames(name))
        setPhone('')
        setname('')
    }
    return (
        <div className='div container mt-2 mb-5 bg-blue-300 rounded-lg '>
            <p className='p text-white text-center'>please add info</p>
            <input type='text'
                placeholder='phone'
                className='
                    phoneInput 
                    border-2 
                    border-blue-300 
                    rounded-lg 
                    bg-purple-200 
                    block 
                    placeholder-white 
                    hover:bg-purple-300 
                    mx-auto mb-3'
                onChange={enterPhone}
                value={phone} />
            <input type='text'
                placeholder='name'
                className='
                    nameInput 
                    bg-purple-200 mb-3
                    border-2 
                    border-blue-300 
                    rounded-lg 
                    placeholder-white 
                    hover:bg-purple-300 
                    block
                    mx-auto'
                onChange={enterName}
                value={name} />
            {
                phone.length === 0 || name.length === 0
                    ? <p className='validationP  text-center'>please Enter name and phone number</p>
                    : <button className='
                    button 
                    bg-green-300 p-2 
                    rounded-lg 
                    hover:bg-green-400 
                    block
                    mx-auto'
                        onClick={sendContacts}>save</button>
            }
        </div >
    );
}

export default Add;