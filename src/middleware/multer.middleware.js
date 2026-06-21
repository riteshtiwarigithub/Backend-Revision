import multer from "multer";

//ye bta raha multer ko ki upload file ko disk folder me save kro
const storage = multer.diskStorage({
    destination: function (req, file, cb) {     //cb mtlb callback
      cb(null, "./public/temp")                //ye destination bta raha ki yaha save kro file
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)        //file ka name ky rakhoge ye bta raha 
    }
});
  
export const upload = multer({ 
    storage, 
})