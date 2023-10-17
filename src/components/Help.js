import {useNavigate} from "react-router-dom";



const Help = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h3>Help Component</h3>
            <button onClick={()=>navigate(-1)}>Back To Home</button>
        </div>
    )

}

export default Help;