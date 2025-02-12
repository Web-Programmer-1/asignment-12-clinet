import axios from "axios";


export const axiosSecure = axios.create({
    baseURL: "https://asignment-12-server-nine.vercel.app"
})

const useAxiosSecure = () => {
    axiosSecure.interceptors.request.use((config) => {

        const token = localStorage.getItem("Access_Token")
        config.headers.Authorization = token
        return config
    },
        (error) => {
            console.log("err from- interceptor--->", error)
        })


    return axiosSecure
}

export default useAxiosSecure;
