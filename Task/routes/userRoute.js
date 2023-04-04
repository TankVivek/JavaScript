const express = require("express");
const app = express();
const port = 3700;
const User = require("../model/schema");
app.use(express.json());

// GET API endpoint
app.get("/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server error" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
