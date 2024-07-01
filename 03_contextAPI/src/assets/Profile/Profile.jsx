import React, { useContext} from 'react'
import UserContext from '../Contexts/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)
    if (!user) return <div>Please Login</div>

    return (
        <>
        <div>Welcome {user.username}</div>      
        {/* <div>password {user.password}</div>       */}
        </>
        
    )
}

export default Profile