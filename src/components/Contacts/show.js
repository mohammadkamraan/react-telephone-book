import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import './show.css';

import axios from 'axios';


const Show = () => {
    const [contacts, setContacts] = useState(
        []
    )

    const name = useSelector(state => state.contacts)
    const phone = useSelector(state => state.telephone)

    const deleteContacts = (contact, key) => {
        axios.delete(`https://react-telephone-book-default-rtdb.asia-southeast1.firebasedatabase.app/telephone/${key}.json`)
            .catch(err => console.log(err))
        let newContacts = contacts.filter(item => item.contact !== contact)
        setContacts(newContacts)
    }

    const jsonHandler = (data) => {
        let contacts = Object
            .entries(data)
            .map(([key, value]) => {
                return {
                    ...value,
                    key
                }
            })
        setContacts(contacts)
    }

    useEffect(() => {
        setTimeout(() => {
            axios.get(`https://react-telephone-book-default-rtdb.asia-southeast1.firebasedatabase.app/telephone.json`)
                .then(response => jsonHandler(response.data))
                .catch(e => {
                    console.log(e)
                })
        }, 1000);

    }, [phone, name])

    return (
        <div className='showDiv container  mt-5 bg-gray-400 rounded-lg  p-auto  mh-100'>
            <h1 className='
            header lead 
            container 
            inline-block 
            col-xl-12  
            col-md-12 
            text-left 
            text-white 
            p-2 mx-auto my-4
            rounded
            '>contacts</h1>
            {contacts.length === 0
                ? <h2 className=' 
                text-center lead 
                container 
                inline-block 
                col-xl-12 col-md-12  
                text-white p-2 '>no contacts yet</h2>
                : <> {contacts.map((number, index) => <div key={index}>
                    <p className='
                    paragraph mb-2 
                    inline-block ml-4 
                    text-pink-400 rounded p-2'>{number.contact}:{number.phoneNum}</p>
                    <button className='
                    deleteBtn
                    rounded-lg bg-red-400
                    hover:bg-red-500 p-2
                    float-right 
                    text-gray-300'
                        onClick={() => deleteContacts(number.contact, number.key)}>delete</button>
                </div>)}</>}

        </div>
    );
}

export default Show;