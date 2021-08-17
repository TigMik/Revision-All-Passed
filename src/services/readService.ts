import fs from 'fs';
import path from 'path';

class ReadService {
    read() {
        const pathToContainer = path.join(__dirname, '../config/jsonLike.txt');
        const input = fs.createReadStream(`${pathToContainer}`);
        const output = fs.createWriteStream(path.join(__dirname, '../config/res.txt'));
        input.pipe(output);
    }
}

export default new ReadService();