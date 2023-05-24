const express = require("express");
const router = express.Router();
const { createPost, getPosts } = require("../../controllers/api/posts");

// // GET /api/orders/cart
// // GET /api/posts/history
// router.get("/", ordersCtrl.history);
// router.get("/posts/:id");
// // // POST /api/orders/cart/items/:id
// router.post("/posts/");
// // router.post("/cart/items/:id", ordersCtrl.addToCart);
// // // POST /api/orders/cart/checkout
// // router.post("/cart/checkout", ordersCtrl.checkout);
// // // POST /api/orders/cart/qty
// // router.put("/cart/qty", ordersCtrl.setItemQtyInCart);

router.get("/", getPosts);
router.post("/", createPost);
// router.put("/:id", postController.updatePost);
// router.delete("/:id", postController.deletePost);

module.exports = router;
