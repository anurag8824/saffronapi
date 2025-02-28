const express = require('express'); // Importing express
const app = express(); // Creating an express app
const axios = require('axios'); // Importing axios for making

// Create a route that sends a response when visiting the homepage
app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js</h1>');
});

app.get("/tablelist", async (req, res) => {
    try {
        const response = await axios.get("http://45.198.14.150:8085/casino/tableid", {
            headers: {
                'x-igtechdiamondsports-key': '67976dfa6c0d3c07d8b3b1ff',

            }
        });
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching table list:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });
    }
});


app.get("/iframe/:id", async (req, res) => {
    const casinoid = req.params.id
    try {
        const response = await axios.get(`http://45.198.14.150:8085/casino/tv_url?id=${casinoid}`, {
            headers: {
                'x-igtechdiamondsports-key': '67976dfa6c0d3c07d8b3b1ff',

            }
        });
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching frame url:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch frame url" });
    }
});




app.get("/tabledata/:id", async (req, res) => {
    const casinoid = req.params.id
    try {
        const response = await axios.get(`http://45.198.14.150:8085/casino/data?type=${casinoid}`, {
            headers: {
                'x-igtechdiamondsports-key': '67976dfa6c0d3c07d8b3b1ff',

            }
        });
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching casino data:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch casino data" });
    }
});


app.get("/casinoresult/:id", async (req, res) => {
    const casinoid = req.params.id
    try {
        const response = await axios.get(`http://45.198.14.150:8085/casino/result?type=${casinoid}`, {
            headers: {
                'x-igtechdiamondsports-key': '67976dfa6c0d3c07d8b3b1ff',

            }
        });
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching casino result:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch casino result" });
    }
});


app.get("/detailresult/:id/:mid", async (req, res) => {
    const casinoid = req.params.id
    const mid = req.params.mid
    try {
        const response = await axios.get(`http://45.198.14.150:8085/casino/detail_result?type=${casinoid}&mid=${mid}`, {
            headers: {
                'x-igtechdiamondsports-key': '67976dfa6c0d3c07d8b3b1ff',

            }
        });
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching casino detail result:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch casino detail result" });
    }
});





app.get("/getGameList", async (req, res) => {
    try {
        const response = await axios.get("https://dream.bagpackkar.com/d110923/shyamp/getGames", {
            headers: {
                // 'x-igtechdiamondsports-key': '67976dfa6c0d3c07d8b3b1ff',

            }
        });
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching table list:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });
    }
});


app.get("/allseries/:id", async (req, res) => {
    const sportId = req.params.id
    try {
        const response = await axios.get(`https://dream.bagpackkar.com/d110923/shyamp/getSeries?sport_id=${sportId}`, {
            headers: {
//                'x-igtechdiamondsports-key': '67976dfa6c0d3c07d8b3b1ff',

            }
        });
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching frame url:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch frame url" });
    }
});



app.get("/getmatches/:id/:sid", async (req, res) => {
    const sportId = req.params.id
    const seriesId = req.params.sid

    try {
        const response = await axios.get(`https://dream.bagpackkar.com/d110923/shyamp/getMatches?series_id=${seriesId}&game_id=${sportId}
`, {
            headers: {
                // 'x-igtechdiamondsports-key': '67976dfa6c0d3c07d8b3b1ff',

            }
        });
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching casino data:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch casino data" });
    }
});


app.get("/matchinfo/:id", async (req, res) => {
    const matchId = req.params.id
    try {
        const response = await axios.get(`https://dream.bagpackkar.com/d110923/shyamp/getMarket?match_id=${matchId}`, {
            headers: {
                // 'x-igtechdiamondsports-key': '67976dfa6c0d3c07d8b3b1ff',

            }
        });
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching casino result:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch casino result" });
    }
});



app.get("/getfancy/:id", async (req, res) => {
    const matchId = req.params.id
    try {
        const response = await axios.get(`https://dream.bagpackkar.com/api/switch/getFancy?matchId=${matchId}`, {
            headers: {
                // 'x-igtechdiamondsports-key': '67976dfa6c0d3c07d8b3b1ff',

            }
        });
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching casino detail result:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch casino detail result" });
    }
});


app.get("/getbm/:id", async (req, res) => {
    const matchId = req.params.id
    try {
        const response = await axios.get(`https://dream.bagpackkar.com/api/switch/getBM?matchId=${matchId}`, {
            headers: {
                // 'x-igtechdiamondsports-key': '67976dfa6c0d3c07d8b3b1ff',

            }
        });
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching casino detail result:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch casino detail result" });
    }
});



app.get("/getoddslist", async (req, res) => {
    // const matchId = req.params.id
    try {
        const response = await axios.get(`https://dream.bagpackkar.com/d110923/shyamp/getOddsList?marketid=1.224125101,1.224125101,1.224125101,1.224125101,1.224125101,1.224125101,1.224125101
`, {
            headers: {
                // 'x-igtechdiamondsports-key': '67976dfa6c0d3c07d8b3b1ff',

            }
        });
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching casino detail result:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch casino detail result" });
    }
});


// Set up the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});






