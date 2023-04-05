const port=8000;

const express =require('express');
const cheerio =require('cheerio');
const axios =require('axios');
const { response } = require('express');

const app=express();
const url="https://www.theguardian.com/uk"
axios(url)
.then(response =>{
    const html=response.data
    const $=cheerio.load(html)
    const topic=[]
    $('.fc-item__title',html).each(function(){
        const title =$(this).text()
        const img_link=$(this).find('a').attr('href')
        topic.push({
            title,
            img_link
        })
    })
    console.log(topic)
}).catch(err=> console.log(err))

app.listen(port,()=>console.log('server running'))