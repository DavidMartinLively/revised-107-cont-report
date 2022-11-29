
const catalog = [

    {
        _id: "1",
        title: "Baker Og red skateboard",
        price: 55.00,
        category:"deck" ,
        image:"baker.png", //pull this from your image folder
    },

    {
        _id: "2",
        title: "independent trucks stage 10",
        price: 85.00,
        category:"trucks" ,
        image:"independent.jpg", //pull this from your image folder
    },

    {
        _id: "3",
        title: "Bone swiss cermamic bearings",
        price: 95.00,
        category:"bearings" ,
        image:"boneswiss.jpg", //pull this from your image folder
    },

    {
        _id: "4",
        title: "Autobohn wheels 51 mm",
        price: 35.00,
        category:"wheels" ,
        image:"autobohn.jpg", //pull this from your image folder
    },

    {
        _id: "5",
        title: "M.O.B griptape Naruto",
        price: 14.00,
        category:"griptape" ,
        image:"naruto.jpg", //pull this from your image folder
    },

    {
        _id: "6",
        title: "Nike SB Hightop",
        price: 65.00,
        category:"shoes" ,
        image:"nike.jpg", //pull this from your image folder
    },

    {
        _id: "7",
        title: "Girl Skateboard complete",
        price: 95.00,
        category:"complete" ,
        image:"girl.jpg", //pull this from your image folder
    },

    {
        _id: "8",
        title: "Primitive Skateboard complete",
        price: 115.00,
        category:"complete" ,
        image:"primitive.jpg", //pull this from your image folder
    },
];

class DataService {

    getCatalog(){
        return catalog;

        //this will in the future get the catalog from the server
    }

}

export default DataService;