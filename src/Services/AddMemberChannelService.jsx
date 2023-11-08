import { API_URL } from '../constants/Constants';
import axios from 'axios';

//Havent created a connector to js to work
const AddMemberChannelService = {
    // Object method for getting users
    addMemberChannel: async function(user) {
        try{
            const memberDetails={
                //need to set up where to get channel name value
                id: user.id,
                member_id: user.memberId
            }
            const response = await axios.post(`${API_URL}/channel/add_member`,memberDetails,
            
            {
                headers:{
                    "access-token": user.accessToken,
                    client: user.client,
                    expiry: user.expiry,
                    uid: user.uid
                }
            })
            
            const newMember = response.data.data;
            
        } catch(error){
            if(error.response.data.errors){
                return alert("Invalid credentials");
            }
        }
    }

}

export default AddMemberChannelService;