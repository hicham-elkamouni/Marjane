const { getPromos } = require('./responsableRayon.service')

module.exports = {
    getPromos : (req, res) => {
        const d = new Date();
        const currentHour = d.getHours();
        if(( 8 < currentHour ) && ( currentHour < 12)) {

            getPromos((err, results) => {
              if(err){
                  console.log(err);
                  return;
              }
              return res.json({
                  succes :true,
                  data : results
              })
            })
        }else{
            return res.json({
                succes :false,
                data : "there's no promotions right now, get back later"
            })
        }
    },

}