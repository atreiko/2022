export const IndexController = (request, response) => {
  response
    .status(201)
    .json({
      status: true,
      data: []
    })
}

