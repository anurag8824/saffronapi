const express = require('express'); // Importing express
const app = express(); // Creating an express app
const axios = require('axios'); // Importing axios for making
const cors = require('cors')
// Create a route that sends a response when visiting the homepage



app.use(cors({
    origin: "*",
}));


app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Added today 1039 </h1>');
});



//new casino api latest 7 may


app.get("/tablelist2", async (req, res) => {
    try {
        const response = await axios.get("https://api.cricketid.xyz/casino/tableid?key=reddyapikey1234");
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching table list 22:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });
    }
});





app.get("/tabledata2/:id", async (req, res) => {
    const casinoid = req.params.id
    try {
        const response = await axios.get(`https://api.cricketid.xyz/casino/data?type=${casinoid}&key=reddyapikey1234`);
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching casino data:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch casino data" });
    }
});


app.get("/casinoresult2/:id", async (req, res) => {
    const casinoid = req.params.id
    try {
        const response = await axios.get(`https://api.cricketid.xyz/casino/result?type=${casinoid}&key=reddyapikey1234`);
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching casino result:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch casino result" });
    }
});



app.get("/detailresult2/:id/:mid", async (req, res) => {
    const casinoid = req.params.id
    const mid = req.params.mid
    try {
        const response = await axios.get(`https://api.cricketid.xyz/casino/detail_result?type=${casinoid}&mid=${mid}&key=reddyapikey1234`);
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching casino detail result:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch casino detail result" });
    }
});



app.get("/iframe2/:id", async (req, res) => {
    const casinoid = req.params.id
    try {
        const response = await axios.get(`https://api.cricketid.xyz/casino/tv_url?type=${casinoid}&key=reddyapikey1234`);


        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching frame url:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch frame url" });
    }
});





///old casino apij  ayeshhh



app.get("/tablelist/infa", async (req, res) => {
    try {
        const response = await axios.get("https://diamondcasinoapi.turnkeyxgaming.com/casino/tableid", {
            headers: {
                'x-turnkeyxgaming-key': '68c3e9924c8e609e14e54fa4',

            }
        });
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching table list:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });
    }
});


app.get("/iframe/infa/:id", async (req, res) => {
    const casinoid = req.params.id
    try {
        const response = await axios.get(`https://diamondcasinoapi.turnkeyxgaming.com/casino/tv_url?id=${casinoid}`, {
            headers: {
                'x-turnkeyxgaming-key': '68c3e9924c8e609e14e54fa4',

            }
        });

        // Remove X-Frame-Options restriction
        res.setHeader("X-Frame-Options", "");  // This removes the X-Frame-Options header
        res.setHeader("Content-Security-Policy", "frame-ancestors *"); // Allow embedding in all origins

        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching frame url:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch frame url" });
    }
});



app.get("/tabledata/infa/:id", async (req, res) => {
    const casinoid = req.params.id
    try {
        const response = await axios.get(`https://diamondcasinoapi.turnkeyxgaming.com/casino/data1?type=${casinoid}`, {
            headers: {
                'x-turnkeyxgaming-key': '68c3e9924c8e609e14e54fa4',

            }
        });
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching casino data:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch casino data" });
    }
});


app.get("/casinoresult/infa/:id", async (req, res) => {
    const casinoid = req.params.id
    try {
        const response = await axios.get(`https://diamondcasinoapi.turnkeyxgaming.com/casino/result?type=${casinoid}`, {
            headers: {
                'x-turnkeyxgaming-key': '68c3e9924c8e609e14e54fa4',

            }
        });
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching casino result:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch casino result" });
    }
});


app.get("/detailresult/infa/:id/:mid", async (req, res) => {
    const casinoid = req.params.id
    const mid = req.params.mid
    try {
        const response = await axios.get(`https://diamondcasinoapi.turnkeyxgaming.com/casino/detail_result?type=${casinoid}&mid=${mid}`, {
            headers: {
                'x-turnkeyxgaming-key': '68c3e9924c8e609e14e54fa4',

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

// new sports endpoint 7 may 


app.get("/allSportsList", async (req, res) => {
    try {
        const response = await axios.get("https://api.cricketid.xyz/allSportid?key=newdiamond36iuyIug9898");
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching table list:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });
    }
});






//get game detail 
app.get("/gameDetails/:sid/:gmid", async (req, res) => {
    const sportId = req.params.sid;
    const gameId = req.params.gmid;
    try {
        const response = await axios.get(`https://api.cricketid.xyz/getDetailsData?sid=${sportId}&gmid=${gameId}&key=newdiamond36iuyIug9898`);
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
        const response = await axios.get(`https://api.cricketid.xyz/getPriveteData?sid=${sportId}&gmid=${gameId}&key=newdiamond36iuyIug9898`);
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching table list:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });
    }
});

app.post("/new/bets", async (req, res) => {
    const { event_id, event_name, market_id, market_name, market_type } = req.body;
    try {
        const response = await axios.post(`https://api.cricketid.xyz/placed_bets?key=newdiamond36iuyIug9898`, { event_id, event_name, market_id, market_name, market_type })
        res.json(response.data);
        console.log("Fetched Data", response.data)
    } catch (err) {
        console.log("error in sending bets ", error.response?.data || error.message)
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to sending Bets" })
    }
})

app.post("/new/result", async (req, res) => {
    const { event_id, event_name, market_id, market_name } = req.body;
    try {
        const response = await axios.post(`https://api.cricketid.xyz/get-result?key=newdiamond36iuyIug9898`, { event_id, event_name, market_id, market_name })
        res.json(response.data);
        console.log("Fetched Data", response.data)
    } catch (err) {
        console.log("error in sending bets ", error.response?.data || error.message)
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to sending Bets" })
    }
})
// get all match using sport id
app.get("/allMatchUsingSports/:sid", async (req, res) => {
    const sportId = req.params.sid


    try {
        const response = await axios.get(`https://api.cricketid.xyz/esid?sid=${sportId}&key=newdiamond36iuyIug9898`);
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching table list:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });
    }
});



app.get("/liveTv2/:gmid/:sid", async (req, res) => {
    const gameId = req.params.gmid
    const sid = req.params.sid

    try {
        const response = await axios.get(`https://api.cricketid.xyz/tv_url?gmid=${gameId}&sid=${sid}&key=newdiamond36iuyIug9898`);
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching table list:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });
    }
});


app.get("/score/:gtid/:sid", async (req, res) => {
    const gtId = req.params.gtid
    const sid = req.params.sid

    try {
        const response = await axios.get(`https://api.cricketid.xyz/score?gtv=${gtId}&sid=${sid}&key=newdiamond36iuyIug9898`);
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching table list:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });
    }
});

app.get("/result/:gmid/:sid", async (req, res) => {
    const gameId = req.params.gmid
    const sid = req.params.sid

    try {
        const response = await axios.get(`https://api.cricketid.xyz/v2/result?gmid=${gameId}&sid=${sid}&key=newdiamond36iuyIug9898`);
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching table list:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });
    }
});



//get live tv

//get live tv

app.get("/liveTv/:gmid", async (req, res) => {
    const gameId = req.params.gmid

    try {
        const response = await axios.get(`https://diamondcasinoapi.turnkeyxgaming.com/sports/tv?gmid=${gameId}`, {
            headers: {
                'x-turnkeyxgaming-key': '68c3e9924c8e609e14e54fa4',
            }
        });
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching table list:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });
    }
});

/// new tv url 10 March
app.get("/streamTV/:gmid", async (req, res) => {
    const gameId = req.params.gmid

    try {
        const response = await axios.get(`https://sfront.starrexch.me/d?eventid=${gameId}`);
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching TV:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });
    }
});












//get all game details 
app.get("/allGameDetails", async (req, res) => {

    try {
        const response = await axios.get(`https://api.cricketid.xyz/tree?key=newdiamond36iuyIug9898`)
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
        const response = await axios.get(`https://diamondcasinoapi.turnkeyxgaming.com/sports/score?sportid=${sportId}&gtv=${gtv}`, {
            headers: {
                'x-turnkeyxgaming-key': '68c3e9924c8e609e14e54fa4',
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
        const response = await axios.post(`https://diamondcasinoapi.turnkeyxgaming.com/sports/result`, {
            headers: {
                'x-turnkeyxgaming-key': '68c3e9924c8e609e14e54fa4',
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
        const response = await axios.post(`https://diamondcasinoapi.turnkeyxgaming.com/sports/result-correct`, {
            headers: {
                'x-turnkeyxgaming-key': '68c3e9924c8e609e14e54fa4',
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


//bet fair odds and manish ji 

app.get("/oddsmanish/:eid", async (req, res) => {
    const eventid = req.params.eid

    try {
        const response = await axios.get(`http://141.136.35.251:3000/api/market/marketDetails?sport_id=4&event_id=${eventid}`);
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching table list:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });
    }
});




app.get("/bxpro/v1/allmatch", async (req, res) => {
    try {
        const response = await axios.get(`https://betfairapi.turnkeyxgaming.com/api/v3/front?id=4`, {
            headers: {
                'x-turnkeyxgaming-key': '68c56ccbed10db48a50adc82',
            },
        })
        res.json(response.data)
    } catch (error) {
        console.log(error)
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });

    }
})

app.get("/bxpro/v1/session/:eid", async (req, res) => {
    const eventid = req.params.eid
    try {
        const response = await axios.get(`https://betfairapi.turnkeyxgaming.com/api/GetSession?eventid=${eventid}`, {
            headers: {
                'x-turnkeyxgaming-key': '68c56ccbed10db48a50adc82',
            },
        })
        res.json(response.data)
    } catch (error) {
        console.log(error)

        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });

    }
})


app.get("/bxpro/v1/result/:eid", async (req, res) => {
    const eventid = req.params.eid
    try {
        const response = await axios.get(`https://betfairapi.turnkeyxgaming.com/api/result/event-result?eventid=${eventid}`, {
            headers: {
                'x-turnkeyxgaming-key': '68c56ccbed10db48a50adc82',
            },
        })
        res.json(response.data)
    } catch (error) {
        console.log(error)

        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });

    }
})


app.get("/bxpro/v1/result/:eid", async (req, res) => {
    const eventid = req.params.eid
    try {
        const response = await axios.get(`https://betfairapi.turnkeyxgaming.com/api/api/GetMarketOdds?eventid=${eventid}`, {
            headers: {
                'x-turnkeyxgaming-key': '68c56ccbed10db48a50adc82',
            },
        })
        res.json(response.data)
    } catch (error) {
        console.log(error)

        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });

    }
})


app.post("/bxpro/v1/bettodia", async (req, res) => {
    const eventid = req.body.matchname
    try {
        const response = await axios.post(
            "https://betfairapi.turnkeyxgaming.com/api/v3/betfairtodiamond",
            {
                sportid: 4,
                matchname: eventid
            },
            {
                headers: {
                    "x-turnkeyxgaming-key": "68c56ccbed10db48a50adc82",
                    "Content-Type": "application/json"
                }
            }
        );

    } catch (error) {
        console.log(error)

        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });

    }
})





// Set up the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

});

