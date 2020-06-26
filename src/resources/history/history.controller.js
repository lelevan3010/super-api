import { queryUserHistory, addUserHistory } from './history.service'

export const getUserHistory = async (req, res) => {
  try {
    const { _id } = req.params
    const userHistory = await queryUserHistory(_id)
    res.status(200).json(userHistory)
  } catch (error) {
    res.status(400).json({ error: error })
  }
}

export const postUserHistory = async (req, res) => {
  try {
    const { _id, imageURL } = req.body
    const addedHistory = await addUserHistory(_id, imageURL)
    res.status(200).json(addedHistory)
  } catch (error) {
    res.status(400).json({ error: error })
  }
}
