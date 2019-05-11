import Axios from 'axios';

const KEY='AIzaSyBakyUTu61y0r6313NMRItE1Y34acdm9SE';


export default Axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        masResults:5,
        key:KEY
    }

})