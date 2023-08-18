const skillController = require("../Controllers/Skills.controller");
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
router.post("/create", upload.single("skillImage"), skillController.create);
router.post("/update", upload.single("skillImage"), skillController.update);
router.post("/delete", skillController.delete);
router.get("/getskills", skillController.getlist);
router.post("/getskill", skillController.getskill);
module.exports = router;