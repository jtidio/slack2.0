import { API_URL } from '../constants/Constants';
import axios from 'axios';

const CreateChannelService = {
    // Object method for getting users
    createChannel: async function(user) {
        try{
            const channelDetails={
                //need to set up where to get channel name value
                name: user.name,
                user_id: user.id
            }
            const response = await axios.post(`${API_URL}/channels`,channelDetails,
            
            {
                headers:{
                    "access-token": user.access,
                    client: user.client,
                    expiry: user.expiry,
                    uid: user.uid
                }
            })
            
            // const newchannel = response.data.data;
            // console.log("this service is working")
            
        } catch(error){
            if(user.errors){
                return alert("Invalid credentials");
            }
        }
    }

}

export default CreateChannelService;