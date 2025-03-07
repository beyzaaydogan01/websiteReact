import profilePic from './assets/imagesBlogo.png'

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>Beta Software</h2>
            <p className='card-text'>I learning</p>
        </div>
    );
}

export default Card