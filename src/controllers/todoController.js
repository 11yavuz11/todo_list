const todo = require("../models/todoModel");

const todoAdd = async (req, res) => {
  try {
    const _todo = await todo.findOne({
      name: req.body.name,
    });

    if (_todo) {
      return res.status(400).json({
        succes: false,
        message: "There is a record with this name",
      });
    }

    const todoAdd = new todo(req.body);
    await todoAdd
      .save()
      .then(() => {
        return res.status(201).json(todoAdd);
      })
      .catch((err) => {
        return res.status(400).json({
          succes: false,
          message: "Error" + err,
        });
      });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      message: "Server Error",
    });
  }
};

const todoGetAll = async (req, res) => {
  const { page } = req.query;
  const limit = 2;
  const skip = Number(page - 1) * limit;
  try {
    const todoGetAll = await todo.find({}).limit(limit).skip(skip);
    return res.status(200).json({
      succes: true,
      data: todoGetAll,
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      message: "Server Error",
    });
  }
};

const todoDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const todoDelete = await todo.findByIdAndDelete(id);
    if (todoDelete) {
      return res.status(200).json({
        succes: true,
        message: "Succes Delete",
      });
    } else
      return res.status(400).json({
        succes: false,
        message: "Not Delete",
      });
  } catch (error) {
    res.status(500).json({
      succes: false,
      message: "Server Error",
    });
  }
};

const todoUpdate = async (req, res) => {
  const { id } = req.params;
  try {
    const todoUpdate = await todo.findByIdAndUpdate(id, req.body);
    if (todoUpdate) {
      return res.status(200).json({
        succes: true,
        message: "Succes Update",
        data: todoUpdate,
      });
    } else
      return res.status(400).json({
        succes: false,
        message: "Not Update",
      });
  } catch (error) {
    res.status(500).json({
      succes: false,
      message: "Server Error",
    });
  }
};

const todoGet = async (req, res) => {
  const { id } = req.params;
  try {
    const todoGet = await todo.findById(id);
    if (todoGet) {
      return res.status(200).json({
        succes: true,
        message: "Succes Get",
        data: todoGet,
      });
    } else
      return res.status(400).json({
        succes: false,
        message: "Not Get",
      });
  } catch (error) {
    {
      res.status(500).json({
        succes: false,
        message: "Server Error",
      });
    }
  }
};

module.exports = {
  todoAdd,
  todoGetAll,
  todoDelete,
  todoUpdate,
  todoGet,
};
