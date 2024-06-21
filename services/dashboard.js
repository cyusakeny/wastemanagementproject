const { QueryTypes } = require("sequelize");
const db = require("../config/database")
module.exports.getUserRecycle = async(userId)=>{
return  await db.query('SELECT "isRecycled" AS rs, COUNT(*) AS tc FROM recycles  WHERE "user" = :userId GROUP BY rs',{
    replacements: { userId},
     type: QueryTypes.SELECT
}).then(data=>{
    return data;
})

}

module.exports.getUserTypes = async(userId)=>{
    return  await db.query('SELECT "type" AS t, COUNT(*) AS tc FROM recycles  WHERE "user" = :userId GROUP BY t',{
        replacements: { userId},
         type: QueryTypes.SELECT
    }).then(data=>{
        return data;
    })
    
}

module.exports.getUserCollected = async(userId)=>{
    return  await db.query('SELECT "isCollected" AS cs, COUNT(*) AS tc FROM recycles  WHERE "user" = :userId GROUP BY cs',{
        replacements: { userId},
         type: QueryTypes.SELECT
    }).then(data=>{
        return data;
    })
    
}

module.exports.getCollectorRecycle = async(cId)=>{
    return  await db.query('SELECT "isRecycled" AS rs, COUNT(*) AS tc FROM recycles  WHERE "collector" = :cId GROUP BY rs',{
        replacements: { cId},
         type: QueryTypes.SELECT
    }).then(data=>{
        return data;
    })
}

module.exports.getCollectorType = async(cId)=>{
    return  await db.query('SELECT "type" AS t, COUNT(*) AS tc FROM recycles  WHERE "collector" = :cId GROUP BY t',{
        replacements: { cId},
         type: QueryTypes.SELECT
    }).then(data=>{
        return data;
    })
}

module.exports.getCollectorCollected = async(cId)=>{
    return  await db.query('SELECT "isCollected" AS cs, COUNT(*) AS tc FROM recycles  WHERE "collector" = :cId GROUP BY cs',{
        replacements: { cId},
         type: QueryTypes.SELECT
    }).then(data=>{
        return data;
    })
}

