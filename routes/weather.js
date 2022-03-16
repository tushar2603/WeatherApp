const router = require('express').Router();
const axios = require('axios');
require('dotenv').config();

router.get('/',(req,res)=>{
    res.render('index',{
        city: null,
        des: null,
        icon: null,
        temp: null,
        wind: null,
        humidity: null  
    });

})

router.post('/',async (req,res)=>{
    const city = req.body.city;

    const url_api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4eb8a834db7bfa5ee4a47f02e2f562a7`;


    try {
        await axios.get(url_api).then(data => {
            const city = data.data.name;
            const des = data.data.weather[0].description;
            const icon = data.data.weather[0].icon;
            const temp = data.data.main.temp;
            const wind = data.data.wind.speed;
            const humidity = data.data.main.humidity;
    
    
            res.render('index',{
                city,des,icon,temp, wind, humidity
            })
        })  
    } catch (error) {
        res.render('index',{
            city: 'Something went wrong',
            des: null,
            icon: null,
            temp: null,
            wind: null,
            humidity: null
        })
    }
})



module.exports = router;