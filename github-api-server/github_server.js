
require('dotenv').config()
var https = require("https");
var fs = require("fs");
var path = require("path");
var certificatePath = path.resolve(__dirname, process.env.CERT_PATH);
var privateKey = fs.readFileSync(certificatePath + "/privkey.pem");
var certificate = fs.readFileSync(certificatePath + "/fullchain.pem");
var credentials = {key: privateKey, cert: certificate};
const express = require('express');
const app = express();
var cors = require('cors')
const axios = require('axios')
app.use(cors())

// GITHUB ----------------------------------------------------------------------------------
const username = process.env.GITHUB_USERNAME
var data = null

async function fetchGHContribs(){
    var url = process.env.GITHUB_URL+'repos/'+username+'/'+process.env.REPO_GIXCORE+'stats/participation';
    console.log('github fetch started...')
    console.log('shooting '+url) 
    console.log('using token:' +process.env.GITHUB_TOKEN)
    const request_gixcore = await axios( {
        url: process.env.GITHUB_URL+'repos/'+username+'/'+process.env.REPO_GIXCORE+'stats/participation', 
        method: 'get',
        mode: 'no-cors',
        headers: {
        'Content-Type':                 `application/json`,
        'Authorization':                `token ${process.env.GITHUB_TOKEN}`,
        }
    })
    const request_ta = await axios({
        url: process.env.GITHUB_URL+'repos/'+username+'/'+process.env.REPO_TA+'stats/participation', 
        method: 'get',
        mode: 'no-cors',
        headers: {
        'Content-Type':                 `application/json`,
        'Authorization':                `token ${process.env.GITHUB_TOKEN}`,
        }
    })
    const request_vuezard = await axios({
        url: process.env.GITHUB_URL+'repos/'+username+'/'+process.env.REPO_VUEZARD+'stats/participation', 
        method: 'get',
        mode: 'no-cors',
        headers: {
        'Content-Type':                 `application/json`,
        'Authorization':                `token ${process.env.GITHUB_TOKEN}`,
        }
    })
    const request_se = await axios({
        url: process.env.GITHUB_URL+'repos/'+username+'/'+process.env.REPO_SERVER+'stats/participation', 
        method: 'get',
        mode: 'no-cors',
        headers: {
        'Content-Type':                 `application/json`,
        'Authorization':                `token ${process.env.GITHUB_TOKEN}`,
        }
    })
    const request_workload_monitor = await axios({
        url: process.env.GITHUB_URL+'repos/'+username+'/'+process.env.REPO_WM+'stats/participation', 
        method: 'get',
        mode: 'no-cors',
        headers: {
        'Content-Type':                 `application/json`,
        'Authorization':                `token ${process.env.GITHUB_TOKEN}`,
        }
    })
    const request_gixcore_landing = await axios({
        url: process.env.GITHUB_URL+'repos/'+username+'/'+process.env.REPO_GL+'stats/participation', 
        method: 'get',
        mode: 'no-cors',
        headers: {
        'Content-Type':                 `application/json`,
        'Authorization':                `token ${process.env.GITHUB_TOKEN}`,
        }
    })
    const request_db_scan = await axios({
        url: process.env.GITHUB_URL+'repos/'+username+'/'+process.env.REPO_DB+'stats/participation', 
        method: 'get',
        mode: 'no-cors',
        headers: {
        'Content-Type':                 `application/json`,
        'Authorization':                `token ${process.env.GITHUB_TOKEN}`,
        }
    })
    const request_chat = await axios({
        url: process.env.GITHUB_URL+'repos/'+username+'/'+process.env.REPO_CH+'stats/participation', 
        method: 'get',
        mode: 'no-cors',
        headers: {
        'Content-Type':                 `application/json`,
        'Authorization':                `token ${process.env.GITHUB_TOKEN}`,
        }
    })
    const request_vue_template = await axios({
        url: process.env.GITHUB_URL+'repos/'+username+'/'+process.env.REPO_TEMP+'stats/participation', 
        method: 'get',
        mode: 'no-cors',
        headers: {
        'Content-Type':                 `application/json`,
        'Authorization':                `token ${process.env.GITHUB_TOKEN}`,
        }
    })
    const request_ta_app = await axios({
        url: process.env.GITHUB_URL+'repos/'+username+'/'+process.env.REPO_TA_APP+'stats/participation', 
        method: 'get',
        mode: 'no-cors',
        headers: {
        'Content-Type':                 `application/json`,
        'Authorization':                `token ${process.env.GITHUB_TOKEN}`,
        }
    })
    axios.all([
        request_gixcore, 
        request_ta, 
        request_vuezard, 
        request_se, 
        request_ta_app, 
        request_workload_monitor, 
        request_gixcore_landing, 
        request_db_scan, 
        request_chat, 
        request_vue_template
        ]).then(axios.spread((...responses) => {
            const responseOne = responses[0]
            const contribs_gixcore = responseOne.data.owner.reduce(function(a,b){return a+b}, 0)
            console.log(contribs_gixcore)

            const responseTwo = responses[1]
            const contribs_ta = responseTwo.data.owner.reduce(function(a,b){return a+b}, 0)
            console.log(contribs_ta)

            const responesThree = responses[2]
            const contribs_vuezard = responesThree.data.owner.reduce(function(a,b){return a+b}, 0)
            console.log(contribs_vuezard)

            const responesFour = responses[3]
            const contribs_server = responesFour.data.owner.reduce(function(a,b){return a+b}, 0)
            console.log(contribs_server)

            const responesFive = responses[4]
            const contribs_ta_app = responesFive.data.owner.reduce(function(a,b){return a+b}, 0)
            console.log(contribs_ta_app)

            const responesSix = responses[5]
            const contribs_workload_monitor = responesSix.data.owner.reduce(function(a,b){return a+b}, 0)
            console.log(contribs_workload_monitor)

            const responesSeven = responses[6]
            const contribs_gixcore_landing = responesSeven.data.owner.reduce(function(a,b){return a+b}, 0)
            console.log(contribs_gixcore_landing)

            const responesEight = responses[7]
            const contribs_db_scan = responesEight.data.owner.reduce(function(a,b){return a+b}, 0)
            console.log(contribs_db_scan)

            const responesNine = responses[8]
            const contribs_chat = responesNine.data.owner.reduce(function(a,b){return a+b}, 0)
            console.log(contribs_chat)

            const responesTen = responses[9]
            const contribs_vue_template = responesTen.data.owner.reduce(function(a,b){return a+b}, 0)
            console.log(contribs_vue_template)

            var chartData = [];

            for(var i=0; i<responses[0].data.owner.length; i++){
                chartData[i] = responses[0].data.owner[i] + responses[1].data.owner[i] + responses[2].data.owner[i] + responses[3].data.owner[i] + responses[4].data.owner[i] + responses[5].data.owner[i] + responses[6].data.owner[i] + responses[7].data.owner[i] + responses[8].data.owner[i] + responses[9].data.owner[i]
            }
            chartData.splice(0, 35)
            const chartDataObj = Object.assign({}, chartData);
            const sum = contribs_gixcore + contribs_ta + contribs_vuezard + contribs_server + contribs_ta_app + contribs_gixcore_landing + contribs_workload_monitor + contribs_db_scan + contribs_chat + contribs_vue_template
            console.log('Total Contriburions: '+sum)
            console.log('chart data array: ')
            console.log(chartDataObj)
            console.log('gixcore repo fetched')
            data = chartDataObj
            console.log(data)
            return data
            // use/access the results 
        })).catch(errors => {
            console.log(errors)
    // react on errors.
    })
}
app.get('/', async(req, res) => {
    try{
        await fetchGHContribs()
        console.log(data)
        await setTimeout(async () => {
            res.json(data);
        }, 50);
    } catch (error){
        console.log(error)
    }
});
  
app.listen(8000, () => {
console.log('listening on port 8000')
});
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(8443, function() {
 console.log("Appted on port 8443");
});
