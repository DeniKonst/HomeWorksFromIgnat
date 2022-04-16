import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

export type initUsersStateType = UserType[]


// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<initUsersStateType>([]) // need to fix any

    const addUserCallback = (name: string) => {

        const addedUser: UserType = {_id: v1(), name: name}// need to fix any
        setUsers([addedUser, ...users]) // need to fix
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            <div>{users.map(item => <li key={v1()}>{item.name}</li>)}</div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
