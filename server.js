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

//sports api endpoints 
// 
// 
// //get all sportslist 
app.get("/allSportsList", async (req, res) => {
    try {
        const response = await axios.get("http://45.198.14.150:8085/sports/allSportid", {
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

//get game detail 
app.get("/gameDetails/:sid/:gmid", async (req, res) => {
    const sportId = req.params.sid
    const gameId = req.params.gmid


    try {
        const response = await axios.get(`http://45.198.14.150:8085/sports/getDetailsData?sid=${sportId}&gmid=${gameId}`, {
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

//get all match data
app.get("/allMatchData/:sid/:gmid", async (req, res) => {
    const sportId = req.params.sid
    const gameId = req.params.gmid


    try {
        const response = await axios.get(`http://45.198.14.150:8085/sports/getPriveteData?sid=${sportId}&gmid=${gameId}`, {
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

// get all match using sport id
app.get("/allMatchUsingSports/:sid", async (req, res) => {
    const sportId = req.params.sid


    try {
        const response = await axios.get(`http://45.198.14.150:8085/sports/esid?sid=${sportId}`, {
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

//get live tv

app.get("/liveTv/:gmid", async (req, res) => {
    const gameId = req.params.gmid

    try {
        const response = await axios.get(`http://45.198.14.150:8085/sports/tv?gmid=${gameId}`, {
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


//get all game details 
app.get("/allGameDetails", async (req, res) => {



    try {
        const response = await axios.get(`http://45.198.14.150:8085/sports/tree`, {
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


// get sports score 
app.get("/sportsScore/:sid/:gtv", async (req, res) => {

    const sportId = req.params.sid
    const gtv = req.params.gtv

    try {
        const response = await axios.get(`http://45.198.14.150:8085/sports/score?sportid=${sportId}&gtv=${gtv}`, {
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


// get  one result

app.post("/resultone", async (req, res) => {
    const { team_one, team_two, sport_id } = req.body
    try {
        const response = await axios.post(`http://45.198.14.150:8085/sports/result`, {
            headers: {
                'x-igtechdiamondsports-key': '67976dfa6c0d3c07d8b3b1ff',
                },
            body: {
                team_one: team_one,
                team_two: team_two,
                sport_id: sport_id,
            }
        });
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching table list:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });
    }
});


// get result two 


app.post("/resulttwo", async (req, res) => {
    const { team_one, team_two, sport_id } = req.body
    try {
        const response = await axios.post(`http://45.198.14.150:8085/sports/result-correct`, {
            headers: {
                'x-igtechdiamondsports-key': '67976dfa6c0d3c07d8b3b1ff',
                },
            body: {
                team_one: team_one,
                team_two: team_two,
                sport_id: sport_id,
            }
        });
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching table list:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });
    }
});






// Set up the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});






