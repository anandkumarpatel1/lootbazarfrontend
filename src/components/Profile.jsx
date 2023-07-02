import React from 'react'
import "../styles/ProfileSetting.css";
import MyUserImg from "../assests/myuser.png";

const Profile = () => {

    const UserData = localStorage.getItem('user')
  return (
    <>
      <div className="my-profile-main bg-gradient-to-r from-red-500 via-pink-600 to-orange-400">
        <div className="my-user-img">
          <img src={MyUserImg} alt="" />
        </div>
        <div className="my-user-info">
          <div>
            <p>Name</p>
            <p>Email</p>
            <p>ID</p>
            <p>Role</p>
          </div>
          <div className="user-dynamic">
            <p>: {JSON.parse(UserData).name}</p>
            <p>: {JSON.parse(UserData).email}</p>
            <p>: {JSON.parse(UserData)._id}</p>
            <p>: {JSON.parse(UserData).role}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
