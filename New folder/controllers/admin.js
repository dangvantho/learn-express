const uploadNews=require('../middleware/uploadNews')
const uploadService=require('../middleware/uploadService')
const Service=require('../models/Service')
const ServiceImg=require('../models/ServiceImg')
const News=require('../models/News')
const NewsImage=require('../models/NewsImage')

class admin{
    //[get] /admin
    index(req,res){
        res.render('./admin/index')
    }
    //[get] /admin/news -form create news
    news(req,res){
        res.render('./admin/news.post.pug')
    }
    async newsManage(req,res){
        let news=await News.find({}).then(data=>{
            return data.map(value=>value._doc)
        })
        let imgData=[]
        for(let value of news){
            let data= await NewsImage.find({files_id: value._id})
            data=data.map(img=>img._doc)
            imgData.push(data)
        }
        res.render('./admin/news',{
            news,
            imgData,
        })
    }

    service(req,res){
        res.render('./admin/service.post.pug')
    }
    async serviceManage(req,res){
        let services=await Service.find({}).then(data=>{
            return data.map(value=>value._doc)
        })
        let imgData=[]
        for(let value of services){
            let data= await ServiceImg.find({files_id: value._id})
            data=data.map(img=>img._doc)
            imgData.push(data)
        }
        res.render('./admin/service',{
            services,
            imgData,
        })
    }

    //[post] /admin/service
    async servicePost(req,res){
        await uploadService(req,res)
        res.redirect('/admin/service')
    }
    //[post] /admin/news
    async newsPost(req,res){
        await uploadNews(req,res)
        res.redirect('/admin/news')
    }
}
module.exports=new admin