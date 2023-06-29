import cat from '../assets/cat.JPEG'
import mail from '../assets/mail.png'
import linkedin from '../assets/linkedin.png'

export default function Info(){
    return (
        <div className="InfoBox">
            <div className="Photo">
                <img src={cat} alt="profile"/>
            </div>
            <div className='infoCenter'>
            <div className="Name">
                <h2>Summer Watson</h2>
            </div>
            <div className="Title">Frontend Web Developer</div>
            <div className='buttonSpace'>
                <button className="Email"><img src={mail} alt=""/>Email</button><button className="LinkedIn"><img src={linkedin} alt=""/>LinkedIn</button>
            </div>
            </div>
        </div>
    )
}