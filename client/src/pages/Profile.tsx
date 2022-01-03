import { Link,  } from 'react-router-dom';
import IPageProps from "../interfaces/page";
import AuthContainer from '../components/AuthContainer';
import { Button } from 'reactstrap';

import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import styled from 'styled-components';


const ProfilePage : React.FunctionComponent<IPageProps> = () => {
   

    return (
    <AuthContainer header="Profile">
<ButtomContex>

<Link to ="/change"> 
<Button
    block
    color="success"
>
Change password <ManageAccountsIcon/> 
</Button>
</Link>
   </ButtomContex>
    <ButtomContex>
   <Link to ="/logout"> 
    <Button
    color="success"
    block
> 
Logout <LogoutIcon/> 
</Button>
    </Link>
    </ButtomContex>
<hr className="bg-info m-3" />
<Link to= "/">
<Button
    block
    style={{ backgroundColor:'#ea4335', borderColor: '#ea4335'}} 
>
Back <ManageAccountsIcon/> 
</Button>
    </Link>
</AuthContainer>
    );
}

export default ProfilePage; 



const ButtomContex = styled.div`
padding: 3px;
`