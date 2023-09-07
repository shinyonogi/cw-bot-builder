import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    return (
        <div className='sidebar-container'>
            <FontAwesomeIcon icon={faRobot}/>
        </div>
    )
}

export default Sidebar;
