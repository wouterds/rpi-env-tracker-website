import { Request, Response } from 'express';
import * as SensorRepository from '../../../repositories/sensor';

export default async (_req: Request, res: Response): Promise<Response> => {
  const sensors = await SensorRepository.getAll();

  return res.status(200).json(sensors);
};
