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
        const response = await axios.get("https://api.cricketid.xyz/casino/tableid?key=newdiamond36iuyIug9898");
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
        const response = await axios.get(`https://api.cricketid.xyz/casino/data?type=${casinoid}&key=newdiamond36iuyIug9898`);
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
        const response = await axios.get(`https://api.cricketid.xyz/casino/result?type=${casinoid}&key=newdiamond36iuyIug9898`);
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
        const response = await axios.get(`https://api.cricketid.xyz/casino/detail_result?type=${casinoid}&mid=${mid}&key=newdiamond36iuyIug9898`);
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
        const response = await axios.get(`https://api.cricketid.xyz/casino/tv_url?type=${casinoid}&key=newdiamond36iuyIug9898`);

      
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching frame url:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch frame url" });
    }
});





///old casino apij  ayeshhh



app.get("/tablelist", async (req, res) => {
    try {
        const response = await axios.get("http://103.189.172.148:8085/casino/tableid", {
            headers: {
                'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',

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
        const response = await axios.get(`http://103.189.172.148:8085/casino/tv_url?id=${casinoid}`, {
            headers: {
                'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',

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



app.get("/tabledata/:id", async (req, res) => {
    const casinoid = req.params.id
    try {
        const response = await axios.get(`http://103.189.172.148:8085/casino/data?type=${casinoid}`, {
            headers: {
                'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',

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
        const response = await axios.get(`http://103.189.172.148:8085/casino/result?type=${casinoid}`, {
            headers: {
                'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',

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
        const response = await axios.get(`http://103.189.172.148:8085/casino/detail_result?type=${casinoid}&mid=${mid}`, {
            headers: {
                'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',

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


app.get("/allSportsList2", async (req, res) => {
    try {
        const response = await axios.get("https://api.cricketid.xyz/allSportid", {
            headers: {
                'key': 'newdiamond36iuyIug9898',
            }
        });
        res.json(response.data);
        console.log("Fetched Data:", response);
    } catch (error) {
        console.error("Error fetching table list:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });
    }
});





// //get all sportslist 
app.get("/allSportsList", async (req, res) => {
    try {
        const response = await axios.get("http://103.189.172.148:8085/sports/allSportid", {
                headers: {
                'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',
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
        const response = await axios.get(`http://103.189.172.148:8085/sports/getDetailsData?sid=${sportId}&gmid=${gameId}`, {
            headers: {
                'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',
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
        const response = await axios.get(`http://103.189.172.148:8085/sports/getPriveteData?sid=${sportId}&gmid=${gameId}`, {
            headers: {
                'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',
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
        const response = await axios.get(`http://103.189.172.148:8085/sports/esid?sid=${sportId}`, {
            headers: {
                'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',
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

//get live tv

app.get("/liveTv/:gmid", async (req, res) => {
    const gameId = req.params.gmid

    try {
        const response = await axios.get(`http://103.189.172.148:8085/sports/tv?gmid=${gameId}`, {
            headers: {
                'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',
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
        const response = await axios.get(`http://103.189.172.148:8085/sports/tree`, {
            headers: {
                'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',
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
        const response = await axios.get(`http://103.189.172.148:8085/sports/score?sportid=${sportId}&gtv=${gtv}`, {
            headers: {
                'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',
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
        const response = await axios.post(`http://103.189.172.148:8085/sports/result`, {
            headers: {
                'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',
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
        const response = await axios.post(`http://103.189.172.148:8085/sports/result-correct`, {
            headers: {
                'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',
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




// const express = require('express'); // Importing express
// const app = express(); // Creating an express app
// const axios = require('axios'); // Importing axios for making
// const cors = require('cors')
// // Create a route that sends a response when visiting the homepage



// app.use(cors({
//     origin: "*",
// }));


// app.get('/', (req, res) => {
//     res.send('<h1>Hello, Express.js Added today 1039 </h1>');
// });

// const slug = [];

// const tabledata = async  ()=>{
//     try {
//         const response = await axios.get("http://103.189.172.148:8085/casino/tableid", {
//             headers: {
//                 'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',

//             }
//         });
//         res.json(response.data);
//         response.data.data.t1.map((item)=>{
//           slug.push(item.gmid)
//         })
//         console.log("Fetched Data:", response);
//     } catch (error) {
//         console.error("Error fetching table list:", error.response?.data || error.message);
//         // res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });
//     }

// }
// tabledata()
  
//   const data = {};
  
//   const getCasinoDataByCron = async () => {
//     const results = await Promise.allSettled(slug.map(async (type) => {
//       try {
           
//         const [tableDataResponse, iframeResponse, casinoResultResponse] = await Promise.all([
//           axios.get(`http://103.189.172.148:8085/casino/data?type=${type}`, { headers: { 'x-malyaempire-key': 'your-api-key' } }),
//           axios.get(`http://103.189.172.148:8085/casino/tv_url?id=${type}`, { headers: { 'x-malyaempire-key': 'your-api-key' } }),
//           axios.get(`http://103.189.172.148:8085/casino/result?type=${type}`, { headers: { 'x-malyaempire-key': 'your-api-key' } })
//         ]);
        
//         return {
//           type,
//           status: "fulfilled",
//           value: {
//             tableData: tableDataResponse.data,
//             iframeData: iframeResponse.data,
//             casinoResult: casinoResultResponse.data
//           }
//         };
//       } catch (error) {
//         return {
//           type,
//           status: "rejected",
//           reason: error.message
//         };
//       }
//     }));
  
//     // Process results
//     results.forEach(result => {
//       if (result.status === "fulfilled") {
//         data[result.type] = result.value;
//         console.log(`Data fetched for ${result.type}`);
//       } else {
//         console.error(`Failed to fetch data for ${result.type}: ${result.reason}`);
//         data[result.type] = { error: result.reason }; // Store error message
//       }
//     });
//   };
  
  
//   const fetchData = () => {
//     getCasinoDataByCron();
//   };
  
//   // Call the fetchData function every 1000ms (1 second)
//   setInterval(fetchData, 1000);
  

// app.get("/tablelist", async (req, res) => {
//     try {
//         const response = await axios.get("http://103.189.172.148:8085/casino/tableid", {
//             headers: {
//                 'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',

//             }
//         });
//         res.json(response.data);
//         console.log("Fetched Data:", response);
//     } catch (error) {
//         console.error("Error fetching table list:", error.response?.data || error.message);
//         res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });
//     }
// });

// app.get("/tabledata/:id",async(req,res)=>{
//     const slug = req.params.id
//      const Cdata = data[slug]
//     res.json(Cdata)

// })

// app.get("/iframe/:id", async (req, res) => {
//     const casinoid = req.params.id
//     try {
//         const response = await axios.get(`http://103.189.172.148:8085/casino/tv_url?id=${casinoid}`, {
//             headers: {
//                 'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',

//             }
//         });
//         res.json(response.data);
//         console.log("Fetched Data:", response);
//     } catch (error) {
//         console.error("Error fetching frame url:", error.response?.data || error.message);
//         res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch frame url" });
//     }
// });




// app.get("/tabledata/:id", async (req, res) => {
//     const casinoid = req.params.id
//     try {
//         const response = await axios.get(`http://103.189.172.148:8085/casino/data?type=${casinoid}`, {
//             headers: {
//                 'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',

//             }
//         });
//         res.json(response.data);
//         console.log("Fetched Data:", response);
//     } catch (error) {
//         console.error("Error fetching casino data:", error.response?.data || error.message);
//         res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch casino data" });
//     }
// });


// app.get("/casinoresult/:id", async (req, res) => {
//     const casinoid = req.params.id
//     try {
//         const response = await axios.get(`http://103.189.172.148:8085/casino/result?type=${casinoid}`, {
//             headers: {
//                 'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',

//             }
//         });
//         res.json(response.data);
//         console.log("Fetched Data:", response);
//     } catch (error) {
//         console.error("Error fetching casino result:", error.response?.data || error.message);
//         res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch casino result" });
//     }
// });


// app.get("/detailresult/:id/:mid", async (req, res) => {
//     const casinoid = req.params.id
//     const mid = req.params.mid
//     try {
//         const response = await axios.get(`http://103.189.172.148:8085/casino/detail_result?type=${casinoid}&mid=${mid}`, {
//             headers: {
//                 'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',

//             }
//         });
//         res.json(response.data);
//         console.log("Fetched Data:", response);
//     } catch (error) {
//         console.error("Error fetching casino detail result:", error.response?.data || error.message);
//         res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch casino detail result" });
//     }
// });

// //sports api endpoints 
// // 
// // 
// // //get all sportslist 
// app.get("/allSportsList", async (req, res) => {
//     try {
//         const response = await axios.get("http://103.189.172.148:8085/sports/allSportid", {
//                 headers: {
//                 'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',
//                 }
//         });
//         res.json(response.data);
//         console.log("Fetched Data:", response);
//     } catch (error) {
//         console.error("Error fetching table list:", error.response?.data || error.message);
//         res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });
//     }
// });

// //get game detail 
// app.get("/gameDetails/:sid/:gmid", async (req, res) => {
//     const sportId = req.params.sid
//     const gameId = req.params.gmid


//     try {
//         const response = await axios.get(`http://103.189.172.148:8085/sports/getDetailsData?sid=${sportId}&gmid=${gameId}`, {
//             headers: {
//                 'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',
//                 }
//         });
//         res.json(response.data);
//         console.log("Fetched Data:", response);
//     } catch (error) {
//         console.error("Error fetching table list:", error.response?.data || error.message);
//         res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });
//     }
// });

// //get all match data
// app.get("/allMatchData/:sid/:gmid", async (req, res) => {
//     const sportId = req.params.sid
//     const gameId = req.params.gmid


//     try {
//         const response = await axios.get(`http://103.189.172.148:8085/sports/getPriveteData?sid=${sportId}&gmid=${gameId}`, {
//             headers: {
//                 'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',
//                 }
//         });
//         res.json(response.data);
//         console.log("Fetched Data:", response);
//     } catch (error) {
//         console.error("Error fetching table list:", error.response?.data || error.message);
//         res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });
//     }
// });

// // get all match using sport id
// app.get("/allMatchUsingSports/:sid", async (req, res) => {
//     const sportId = req.params.sid


//     try {
//         const response = await axios.get(`http://103.189.172.148:8085/sports/esid?sid=${sportId}`, {
//             headers: {
//                 'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',
//                 }
//         });
//         res.json(response.data);
//         console.log("Fetched Data:", response);
//     } catch (error) {
//         console.error("Error fetching table list:", error.response?.data || error.message);
//         res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });
//     }
// });

// //get live tv

// //get live tv

// app.get("/liveTv/:gmid", async (req, res) => {
//     const gameId = req.params.gmid

//     try {
//         const response = await axios.get(`http://103.189.172.148:8085/sports/tv?gmid=${gameId}`, {
//             headers: {
//                 'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',
//                 }
//         });
//         res.json(response.data);
//         console.log("Fetched Data:", response);
//     } catch (error) {
//         console.error("Error fetching table list:", error.response?.data || error.message);
//         res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });
//     }
// });







// //get all game details 
// app.get("/allGameDetails", async (req, res) => {



//     try {
//         const response = await axios.get(`http://103.189.172.148:8085/sports/tree`, {
//             headers: {
//                 'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',
//                 }
//         });
//         res.json(response.data);
//         console.log("Fetched Data:", response);
//     } catch (error) {
//         console.error("Error fetching table list:", error.response?.data || error.message);
//         res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });
//     }
// });


// // get sports score 
// app.get("/sportsScore/:sid/:gtv", async (req, res) => {

//     const sportId = req.params.sid
//     const gtv = req.params.gtv

//     try {
//         const response = await axios.get(`http://103.189.172.148:8085/sports/score?sportid=${sportId}&gtv=${gtv}`, {
//             headers: {
//                 'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',
//                 }
//         });
//         res.json(response.data);
//         console.log("Fetched Data:", response);
//     } catch (error) {
//         console.error("Error fetching table list:", error.response?.data || error.message);
//         res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });
//     }
// });


// // get  one result

// app.post("/resultone", async (req, res) => {
//     const { team_one, team_two, sport_id } = req.body
//     try {
//         const response = await axios.post(`http://103.189.172.148:8085/sports/result`, {
//             headers: {
//                 'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',
//                 },
//             body: {
//                 team_one: team_one,
//                 team_two: team_two,
//                 sport_id: sport_id,
//             }
//         });
//         res.json(response.data);
//         console.log("Fetched Data:", response);
//     } catch (error) {
//         console.error("Error fetching table list:", error.response?.data || error.message);
//         res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });
//     }
// });


// // get result two 


// app.post("/resulttwo", async (req, res) => {
//     const { team_one, team_two, sport_id } = req.body
//     try {
//         const response = await axios.post(`http://103.189.172.148:8085/sports/result-correct`, {
//             headers: {
//                 'x-malyaempire-key': '67976dfa6c0d3c07d8b3b1ff',
//                 },
//             body: {
//                 team_one: team_one,
//                 team_two: team_two,
//                 sport_id: sport_id,
//             }
//         });
//         res.json(response.data);
//         console.log("Fetched Data:", response);
//     } catch (error) {
//         console.error("Error fetching table list:", error.response?.data || error.message);
//         res.status(error.response?.status || 500).json({ error: error.response?.data || "Failed to fetch table list" });
//     }
// });






// // Set up the server to listen on port 3000
// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
    
// });











