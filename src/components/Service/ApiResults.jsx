import axios from "axios";

// Función para obtener el JWT
const fetchJWT = async () => {
    try {
        const response = await axios.post('https://play.nextcaddy.com/api/login_check', {
            username: '666666666',
            password: 'admin'
        }, {
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'insomnia/8.6.1'
            }
        });
        console.log('JWT Response:', response.data);
        return response.data.token;
    } catch (error) {
        console.error('Error fetching JWT:', error);
        throw error;
    }
};

// Función para obtener resultados
const fetchResults = async (page, token) => {
    try {
        const response = await axios.get(`https://play.nextcaddy.com/api/results?page=${page}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('Results Response:', response.data);
        return response.data['hydra:member'];
    } catch (error) {
        console.error('Error fetching results:', error);
        throw error;
    }
};

export { fetchJWT, fetchResults };