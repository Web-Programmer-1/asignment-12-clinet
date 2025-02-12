import axios from "axios";


export const axiosPublic = axios.create({
    baseURL: "https://asignment-12-server-nine.vercel.app"
})

const useAxiosPublic = () => {
    return axiosPublic
}

export default useAxiosPublic;
