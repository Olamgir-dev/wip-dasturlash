const express = require('express')

const router = express.Router()
router.get('/data', (req, res) => {
 const data={
    yangliklar:{
        data:{
            card:[
                {
                    title:"Yangi Muzeyning ochilishi",
                    dscrption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim ut justo non varius. Etiam ut leo vitae metus sagittis dignissim in vel neque. Sed auctor turpis risus, a ornare nunc lobortis id."
                   
                },
                {
                    title:"Muzeyning Qabriston qismi yangilandi",
                    dscrption:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean vel tincidunt odio. Etiam vulputate velit eget odio efficitur consectetur."
                }
            ]
        }
    },
    sayohat:{
        data:[
            {
                title:"Nassiriylar dori tadbirlari",
                dscrption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim ut justo non varius. Etiam ut leo vitae metus sagittis dignissim in vel neque. Sed auctor turpis risus, a ornare nunc lobortis id."
            },
            {
                title:"Chilonzor yodgorligi",
                dscrption:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean vel tincidunt odio. Etiam vulputate velit eget odio efficitur consectetur. Fusce euismod in ante in pharetra."
            },
            {
                title:"Turkiston jahon tajribasi",
                dscrption:"Aliquam vel turpis et lacus hendrerit posuere in eu lorem. Sed non elit non turpis blandit interdum ut sit amet lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
                
            }
          
        ]
    },
    bizXaqqimzda:{
            title:"Nassiriylar dori tadbirlari",
            dscrption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim ut justo non varius. Etiam ut leo vitae metus sagittis dignissim in vel neque. Sed auctor turpis risus, a ornare nunc lobortis id."

    }
 }
 res.status(200).json(data);
});
module.exports = router