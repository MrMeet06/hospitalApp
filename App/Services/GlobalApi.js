import axios from "axios"
const Base_Url="http://192.168.29.163:1337/api"

const Api_key="7cab125efe58541877c1202f6148282bf80c3e049cb75a3a71c419c3b03f208503ad6edca5fc1cd8ae238ee619717ccec504b45649992ffb8714b734de5f05ea8edc6d006bdaebea6e435bfaefc4aeff070365446070da920b741f716a586f8378cb97d7294864aef39312f82483a492d23d41d83bc3be65ce0e053f1c547b48"

const AxioInstance=axios.create({
    baseURL:Base_Url,
    headers:{
        'Authorization':"Bearer"+Api_key
    }
})

const getslider=()=>AxioInstance.get("/sliders?populate=*");

const getCategories=()=>AxioInstance.get("/categories?populate=*");

const getpremiumHospitals=()=>AxioInstance.get("Hospitals?filters[premium][$eq]=true&populate=*");

const getHospitalsByCategory=(category)=>AxioInstance.get("Hospitals?filters[categories][Name][$in]="+category+"&populate=*");

export default{
    getslider,
    getCategories,
    getpremiumHospitals,
    getHospitalsByCategory
}