function logoutController() {
    return{
        index(req,res){
           if(req.session.username){
               req.session.username = '';
               return res.redirect('/');
           }else {
               return res.redirect('/');
           }
        }
    }
}
module.exports = logoutController;