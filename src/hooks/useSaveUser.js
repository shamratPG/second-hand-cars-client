//Sending User data to DATABASE
// const saveUserDb = (name, email, role) => {

import { useEffect, useState } from "react"

//     const newUser = { name, email, role };
//     fetch('http://localhost:5000/users', {
//         method: 'POST',
//         headers: { "content-type": 'application/json' },
//         body: JSON.stringify(newUser)
//     })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             toast.success(`New ${role} Created`)
//         })
// }


const useSaveUser = (name, email, role) => {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/users/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUser(data)
            })
    }, [email])
    return user
}
export default useSaveUser;