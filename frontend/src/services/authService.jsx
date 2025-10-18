import api from '../api/Axios'

export const registerUser = async (formData) => {
    try{
        const response = await api.post("auth/users/", {
            username: formData.username,
            email: formData.email,
            password: formData.password,
            re_password: formData.confirmPassword,
        })

        return response.data
    }
    catch(error){
        if (error.response) {
        console.error("Registration failed:", error.response.data);
        throw error.response.data;
        } else if (error.request) {
        
        console.error("No response from server:", error.request);
        throw { error: "No response from server. Please try again later." };
        } else {
        
        console.error("Unexpected error:", error.message);
        throw { error: "Something went wrong. Please try again." };
        } 
    }
}