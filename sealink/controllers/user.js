const Service=require('../models/Service')
const ServiceImg=require('../models/ServiceImg')
const News=require('../models/News')
const NewsImage=require('../models/NewsImage')


class userController{
    // [get]
    // home
    index(req,res){
        res.render('./users/index')
    }

    // /equiqment
    equiqment(req,res){
        res.render('./users/equiqment')
    }

    // /equiqment
    introduction(req,res){
        res.render('./users/introduction')
    }
    // /equiqment
    contact(req,res){
        res.render('./users/contact')
    }

    // /news
    async news(req,res){
        let news=await News.find({}).then(data=>{
            return data.map(value=>value._doc)
        })
        let imgData=[]
        for(let value of news){
            let data= await NewsImage.find({files_id: value._id})
            data=data.map(img=>img._doc)
            imgData.push(data)
        }
        res.render('./users/news',{
            news,
            imgData,
        })
    }

    // /service
    async service(req,res){
        let services=await Service.find({}).then(data=>{
            return data.map(value=>value._doc)
        })
        let imgData=[]
        for(let value of services){
            let data= await ServiceImg.find({files_id: value._id})
            data=data.map(img=>img._doc)
            imgData.push(data)
        }
        res.render('./users/service',{
            services,
            imgData,
        })
    }

}
module.exports=new userController