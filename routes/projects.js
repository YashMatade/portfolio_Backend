const projectCotroller = require("../Controllers/Projects.controller");
const router = require("express").Router();

const multer = require("multer");
const imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads");
    },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`);
    },
});
const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true);
    } else {
        callback(new Error("Only image is allowed"));
    }
};

const upload = multer({
    storage: imgconfig,
    fileFilter: isImage,
});

router.post("/create", upload.single("projectImg"), projectCotroller.create);
router.post("/update", upload.single("projectImg"), projectCotroller.update);
router.post("/delete", projectCotroller.delete);
router.get("/getlist", projectCotroller.getlist);
router.post("/getproject", projectCotroller.getProject);

module.exports = router;