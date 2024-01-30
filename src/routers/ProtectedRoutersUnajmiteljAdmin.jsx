
import { Outlet } from "react-router-dom";
import LogRegSelect from "../pages/LogRegSelect";

const ProtectedRoutersUnajmiteljAdmin = () => {

    if (localStorage.getItem('statusUser') == 2) {
        return <Outlet/>;
    }else if (localStorage.getItem('statusUser') == 0) {
        return <Outlet/>;   
    }else{
        return <LogRegSelect/>;
    }

}

export default ProtectedRoutersUnajmiteljAdmin;