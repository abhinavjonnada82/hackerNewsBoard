import axios from "axios";

export const fectchData = async => {
    try {
        const data = await axios.get("/api/hackernewboards")
        return data
    }
    catch(e) {
        console.log(e)
    }
};
