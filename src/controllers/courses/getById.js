const CourseModel = require("../../schemas/courseSchema");
const getById = async (req, res) => {
   try {
      const { id } = req.params;
      const response = await CourseModel.findById(id);
      res.status(201).send(response);
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
   }
};

// Export function
module.exports = getById;
