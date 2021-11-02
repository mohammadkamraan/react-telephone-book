import React, { useEffect, useState } from 'react';

import './show.css';

import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { sendID } from '../actions';

const Show = () => {
    const [allDtails, setDtails] = useState(
        []
    )
    const name = useSelector(state => state.Audience)
    const phone = useSelector(state => state.telephone)
    const id = useSelector(state => state.Id)

    const dispatch = useDispatch()

    const deleteAudience = (dt, db) => {
        axios.delete(`https://react-telephone-book-default-rtdb.asia-southeast1.firebasedatabase.app/telephone/${db}.json`)
            .catch(err => console.log(err))
        console.log(dt, db)
        let newDtails = allDtails.filter(item => item.contact !== dt)
        setDtails(newDtails)
    }

    let jsonHandler = (data) => {
        let contacts = Object
            .entries(data)
            .map(([key, value]) => {
                return {
                    ...value,
                    key
                }
            })

        setDtails(contacts)
    }


    useEffect(() => {
        // let names = allDtails
        // names.push(name)
        // setDtails(names)
        // let phones = allDtails
        // phones.push(phone)
        // setDtails(phones)

        // allDtails.map((number, index) => {
        //     console.log(number, index)
        // })
        setTimeout(() => {
            axios.get(`https://react-telephone-book-default-rtdb.asia-southeast1.firebasedatabase.app/telephone.json`)
                .then(response => jsonHandler(response.data))
                .catch(e => {
                    console.log(e)
                })
        }, 1000);

    }, [phone, name])

    // let showContacts = allDtails.map((number, index) => {
    //     console.log(number, index)
    // })

    return (
        <div className='showDiv container  mt-5 bg-gray-400 rounded-lg  p-auto  mh-100'>
            <h1 className='header lead container inline-block col-xl-12  col-md-12 text-left text-white p-2 mx-auto my-4
            rounded'>contacts</h1>
            {allDtails.map((number, index) => <div key={index}>
                <p className='paragraph mb-2 inline-block ml-4 text-pink-400 rounded p-2'>{number.contact}:{number.phoneNum}</p>
                <button className='deleteBtn rounded-lg bg-red-400 hover:bg-red-500 p-2
                float-right 
                text-gray-300
                ' onClick={() => deleteAudience(number.contact, number.key)}>delete</button></div>)}
            {/* {allDtails.map((number, index, id) => {
                console.log(number.key)
            })} */}
        </div>
    );
}

export default Show;