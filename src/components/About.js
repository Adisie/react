
import { useNavigate } from "react-router-dom"

const About = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h3>About Me</h3>
            <button onClick={()=>navigate(-1)}> Back </button>
        </div>
    )
}


export default About