import React from 'react'
import propTypes from 'prop-types';

export const Profile = ({name, st, children, hello}) => {
    return (
        <div>
            <h1>{st.fullname}</h1>
            {children}
            <h1>{st.profession}</h1>
            <p>{st.bio}</p>
            
           
            {hello(st.fullname)}
            <br></br>
            <h6>Created by {name}</h6>

        </div>
    )
}
Profile.propTypes={
    name:propTypes.string
}

Profile.defaultProps={
    st: {fullname:"Yassine",bio:"Informatique",profession:"Etudiant"}

}
