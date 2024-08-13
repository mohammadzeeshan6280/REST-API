const Product = require("../models/products")

const getAllProducts = async (req, res) => {
// Add Filtration & Searching Functionality with Query Props

    // const myData = await Product.find({});
    // const myData = await Product.find({name : "iphone"});
    
    // const { company} = req.query;

// Add Company Filter in API & Make API Work Better
    const { company, name, featured, sort, select } = req.query;
    const queryObject = {};

    if(company){
        queryObject.company = company;
        // console.log(queryObject.company)
        // console.log(queryObject);
    }

    if(featured){
        queryObject.featured = featured;
    }

    //  Add Advance Search Functionality in our Rest API
    if(name){
        // queryObject.name = name;
        queryObject.name = { $regex : name, $options: "i"};
    }

    let apiData = Product.find(queryObject);

    //  Add SORT functionality in Rest API (ASC TO DESC, LOW TO HIGH)
    if(sort){
        // let sortFix = sort.replace(",", " ");
        let sortFix = sort.split(",").join( " ");;
        // queryObject.sort = sortFix;
        apiData = apiData.sort(sortFix)
    }

    //  Return Specific Document Fields using SELECT in Mongoose
    if(select){
        // let selectFix = select.replace(",", " ");
        let selectFix = select.split(",").join( " ");
        apiData = apiData.select(selectFix)
    }
    // (select = name), company;


    // Add Pagination in Rest API using Node & Mongoose
    let page = Number(req.query.page) || 1; // limit for page default 1
    let limit = Number(req.query.limit) || 3; // limit for page 3
    let skip = (page - 1) * limit;

    // page = 2;
    // limit = 3;
    // skip = 1 * 3 = 3

    apiData = apiData.skip(skip).limit(limit);
    // apiData = apiData.skip(3).limit(3);




    console.log(queryObject);


    // const myData = await Product.find(req.query);
    // const myData = await Product.find(queryObject).sort(sort);
    const myData = await apiData;
    // res.status(200).json({ myData })
    res.status(200).json({ myData, nbHits: myData.length })
};




const getAllProductsTesting = async (req, res) => {
    // const myData = await Product.find({});
    // res.status(200).json({ myData })

    // const myData = await Product.find(req.query);

    // console.log("file: Products.js ~ line 10 ~ getAllProductTesting ~ req.query", req.query)
    
    // const myData = await Product.find(req.query).sort("name"); // Ascending A to Z
   

    // const myData = await Product.find(req.query).sort("name -price"); // Descending Z to A

    // const myData = await Product.find(req.query).select("name company");
    res.status(200).json({ myData })

    const myData = await Product.find(req.query).skip(2);

    res.status(200).json({  myData, nbHits: myData.length})
}

module.exports = {getAllProducts, getAllProductsTesting}







// http://localhost:3000/api/products/testing?company=samsung
// http://localhost:3000/api/products/testing?name=iphone
// http://localhost:3000/api/products?company=apple&name=iphone

// req.boby - Generally used in POST/PUT requests.
// req.param - These are properties attached to the url i.e named route parameters
// req.query req.query is mostly used for searching,sorting, filtering, pagination, e.t.c


// gh new repo