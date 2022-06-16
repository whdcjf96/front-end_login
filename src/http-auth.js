import axios from "axios";

export default axios.create({
//    springboot 접속할 주소(ip와 port)를 정의
    baseURL:"http://localhost:8000/api/auth"
})