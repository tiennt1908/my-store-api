import { Response } from 'express';
export declare class FileDownloadController {
    getFile(filename: string, res: Response): Promise<void>;
}
