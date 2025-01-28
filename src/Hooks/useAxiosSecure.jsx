import axios from "axios";


export const axiosSecure = axios.create({
    baseURL: "http://localhost:7000"
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
