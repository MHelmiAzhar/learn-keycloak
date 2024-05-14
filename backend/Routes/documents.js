import express from 'express'
const router = express.Router()

let data = ['test', 'test', 'test']
// {
//   'helmi@gmail.com': ["this is helmi's acc"],
//   'azhar@gmail.com': ["this is azhar's acc"]
// }

const getDocuments = async (req, res) => {
  try {
    const email = req.user

    res.status(200).send(data)
  } catch (err) {
    res.status(500).send(err)
  }
}

router.get('/', getDocuments)
export default router
