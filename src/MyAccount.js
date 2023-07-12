import { useAuth0 } from "@auth0/auth0-react";
import Secret from "./Secret";

const MyAccount = () =>{
    const { user, isAuthenticated } = useAuth0();

    return (
    isAuthenticated &&
    (<div>
        <Secret/>
        <p className="nickname">{user.nickname}</p>
    </div>))
}

export default MyAccount;