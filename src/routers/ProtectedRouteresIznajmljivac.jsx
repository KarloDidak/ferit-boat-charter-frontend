
import { Outlet } from "react-router-dom";
import LogRegSelect from "../pages/LogRegSelect";

const ProtectedRoutersIznajmljivac = () => {

    if (localStorage.getItem('statusUser') == 1) {
        return <Outlet/>;
    }else{
        return <LogRegSelect/>;
    }

}

export default ProtectedRoutersIznajmljivac;