export default async ({ req, res, log }) => {
  log("HighDensityAlert function started");

  return res.json({
    success: true,
    message: "Function executed successfully"
  });
};
