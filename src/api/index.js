import axios from 'axios';


export const getPlacesData = async(type, sw, ne)=>{
    try {
        const {data:{data},}=await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': '8a9d057549msh5494ca7f671b052p115a82jsn95f71c1adcd2',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });

        return data;
    } catch (error) {
        console.log(error);
    }
}
