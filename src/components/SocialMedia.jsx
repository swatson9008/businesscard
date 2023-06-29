import gitDarkImage from '../assets/gitdark.png'

export default function SocialMedia(){
    return(
        <div className="socialMediaBox">
            <div className='smIcons'>
                <a href='https://github.com/swatson9008'><img src={gitDarkImage} alt="github" /></a>
            </div>
        </div>
    )
}