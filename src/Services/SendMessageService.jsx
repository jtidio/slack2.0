import { API_URL } from '../constants/Constants';
import axios from 'axios';

//Havent created a connector to js to work
const SendMessageService = {
    // Object method for getting users
    sendMessage: async function(user) {
        try{
            const messageDetails={
                //need to set up where to get channel name value
                receiver_id: user.id,
                receiver_class: "User",
                body: user.body
            }
            const response = await axios.post(`${API_URL}/messages`,messageDetails,
            
            {
                headers:{
                    "access-token": user.access,
                    client: user.client,
                    expiry: user.expiry,
                    uid: user.uid
                }
            })
            
            const newMessage = response.data.data;
            
        } catch(error){
            if(user.errors){
                return alert("No info acquired");
            }
        }
    }

}

export default SendMessageService;