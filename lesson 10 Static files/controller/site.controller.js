class siteController{
    index(req,res){
        res.render('index')
    }
    slug(req,res){
        let page=['contact']
        let slug=req.params.slug.toLowerCase()
        if(page.includes(slug)) res.render('./'+slug+'/index')
        else res.send("Page not found")
    }
}
module.exports=new siteController