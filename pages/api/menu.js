// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import menu from '../../public/data/menu.json'

export default function handler(req, res) {
  res.status(200).json({ menu }, )
}
