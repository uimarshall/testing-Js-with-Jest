const functions = {
    caps:(str)=> str.toUpperCase(),
    upperCase:(str)=> {
        if (typeof str !== 'string') return ''
    return str.charAt(0).toUpperCase() + str.slice(1)
    },
    reverseString:(str)=> {
        if (typeof str !== 'string') return ''
        return str.split("").reverse().join("");
    },
    creatUser:()=>{
        user={
            firstName:'Marshall'
        }
        user['lastName']= 'Udoh'
        return user
    },
    includeItem:()=>{
        const friends = ['Tayo', 'Brad','Fred']
        return friends

    }
}


const { caps, upperCase,reverseString,creatUser,includeItem } = functions
module.exports={caps, upperCase, reverseString, creatUser,includeItem}