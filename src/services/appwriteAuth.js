import { account } from "./appwriteConfig";
import { ID } from "appwrite";

export const signup = async (email, password, name) => {
    try {
        const user = await account.create(ID.unique(), email, password);
        await account.createEmailPasswordSession(email, password);
        await account.updateName(name);
        return user;
    } catch (error) {
        console.error("Signup Error:", error);
        throw error;
    }
}

export const login = async (email, password) => {
    try {
        return await account.createEmailPasswordSession(email, password);
    } catch (error) {
        console.error("Login Error:", error);
        throw error;
    }
};

export const getCurrentUser = async () => {
    try {
        return await account.get(); 
    } catch{
        return null;
    }
};

export const logout = async () => {
    try {
        await account.deleteSession('current');
    } catch (error) {
        console.error("Logout Error:", error);
    }
};

export const sendVerificationEmail = async () => {
    try {
        await account.createVerification("http://localhost:5173/email-verify");
        console.log("verification mail sent");
    }
    catch (error) {
        console.error("Error occured while sending verification mail", error);
    }
}

export const resetPassword = async (email) => {
    try {
        await account.createRecovery(email, "http://localhost:5173/reset-password");
        console.log("Reset mail sent to your inbox");
    }
    catch (error) {
        console.log("Error in resetting password", error);
    }
}

export const updatePassword = async (userId, secret, newPassword) => {
    try{
        await account.updateRecovery(userId, secret, newPassword, newPassword);
        console.log('Pass changed successfully');
    }
    catch(error){
        console.error(error);
    }
}

export { account };