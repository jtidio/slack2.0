import { API_URL } from '../constants/Constants';
import axios from 'axios';

//Havent created a connector to js to work
const RetrieveMessageService = {
    // Object method for getting users
    getMessages: async function(user) {
        try{
            
            const response = await axios.get(`${API_URL}/messages?receiver_id=${user.id}&receiver_class=User`,
            
            {
                headers:{
                    "access-token": user.access,
                    client: user.client,
                    expiry: user.expiry,
                    uid: user.uid
                }
            })
            
            const chatHistory = response.data.data;
            return chatHistory;
            
        } catch(error){
            if(user.errors){
                return alert("No info acquired");
            }
        }
    }

}

export default RetrieveMessageService;