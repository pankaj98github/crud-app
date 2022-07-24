import axios from "axios";

const API_URL = "http://localhost:3002/users";

//for post request
export const addUser = async (data) => {
    try{
        return await axios.post(API_URL, data);
    } catch (error) {
        console.log("error while calling adduser api", error.message);
    }
}

//for get request
export const getUser = async () => {
    try{
        return await axios.get(API_URL);
    } catch (error) {
        console.log("error while calling getuser api", error.message);
    }
}

export const getUsers = async (data) => {
    try{
        return await axios.get(`${API_URL}/${data}`);
    } catch (error) {
        console.log("error while calling getusers api", error.message);
    }
}

//for put request
export const editUser = async (data, id) => {
    try{
        return await axios.put(`${API_URL}/${id}`, data);
    } catch (error) {
        console.log("error while calling edituser api", error.message);
    }
}

//for delete request
export const deleteUser = async (id) => {
    try{
        return await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.log("error while calling deleteuser api", error.message);
    }
}