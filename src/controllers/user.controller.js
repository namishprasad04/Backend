import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "OK",
  });
});

// const loginUser = asyncHandler((req, res) => {
//   res.status(201).json({
//     message: "login successfull",
//   });
// });

export { registerUser };
