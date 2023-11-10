import { API_URL } from '../constants/Constants';
import axios from 'axios';
import { useData } from '../Context/StoredData';

const ChannelService = {
    // Object method for getting users
    getChannels: async function(user) {
        try{
            const response = await axios.get(`${API_URL}/channels`,{

                headers:{
                    "access-token": user["access-token"],
                    client: user.client,
                    expiry: user.expiry,
                    uid: user.uid
                }
            })
            
            console.log(user.uid)
            const channels = response.data.data;
            return channels.filter((channel) => channel.id >= 5000);
            
        } catch(error){
            if(error.response.data.errors){
                return alert("Cannot get channels");
            }
        }
    }

}

export default ChannelService;