import React, { useEffect, useState } from 'react';

import './show.css';

import { useSelector } from 'react-redux';
import axios from 'axios';

const Show = () => {
    const [allDtails, setDtails] = useState(
        []
    )
    const name = useSelector(state => state.Audience)
    const phone = useSelector(state => state.telephone)
    const id = useSelector(state => state.Id)

    console.log(id)

    const deleteAudience = (dt) => {
        let newDtails = allDtails.filter(item => item !== dt)
        setDtails(newDtails)
    }

    const getRequest = () => {
        axios.get(`https://react-telephone-book-default-rtdb.asia-southeast1.firebasedatabase.app/telephone.json`)
            .then(response => {
                Object.entries(response.data).map(([key, value]) => {
                    let names = allDtails.push(value)
                    setDtails(names)
                    console.log(allDtails)
                })
            })
            .catch(e => {
                console.log(e)
            })
    }

    useEffect(() => {
        // let names = allDtails
        // names.push(name)
        // setDtails(names)
        // let phones = allDtails
        // phones.push(phone)
        // setDtails(phones)
        getRequest()
    }, [name, phone])

    return (
        <div className='showDiv bg-yellow-300 rounded-lg'>
            <p className='paragraphShow text-pink-400 text-center'>youre Audience</p>
            {allDtails.map((number, index) => <div key={index}>
                <p className='paragraph mb-2 inline mr-2'>{number.contact}:{number.phoneNum}</p>
                <button className='deleteBtn rounded-lg bg-red-400 hover:bg-red-500 p-1 
                text-gray-300
                ' onClick={() => deleteAudience(number)}>delete</button></div>)}
            {/* {allDtails.map((number, index) => {
                console.log(number.contact, number.phoneNum, index)
            })} */}
        </div>
    );
}

export default Show;