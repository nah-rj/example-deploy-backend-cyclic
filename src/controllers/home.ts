import { Request, Response } from 'express'

export class HomeController {
	async handle(req: Request, res: Response) {
		return res.json('Tudo ceto!e nada rresolvido!')
	}
}