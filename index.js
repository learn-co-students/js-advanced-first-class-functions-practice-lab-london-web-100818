const logDriverNames = function (arr) {
        for (const item of arr) {console.log(item.name)}
    };


    const logDriversByHometown = function (arr, town) {
    for (const item of arr) { if (item.hometown === town) {console.log(item.name)}}
 };

 const driversByRevenue = function (arr) {
   let arr2 =  arr.slice(0)
   return arr2.sort(
       function (a,b) {
        return a.revenue - b.revenue;
       })};

       const driversByName = function (arr) {
        let arr2 = arr.slice(0)
        return arr2.sort(
            function (a,b) {
                var nameA = a.name.toUpperCase()
                var nameB = b.name.toUpperCase()
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;

            }
        )
       }

       
       const totalRevenue = function (arr) {
           let initialValue = 0
           let arr2 =  arr.reduce((accumulator, currentValue) => accumulator + currentValue.revenue,
           initialValue
           
           );
           return arr2
        
       };

       const averageRevenue = function (arr, totalrevenue) {
           return totalRevenue(arr)/arr.length
        };