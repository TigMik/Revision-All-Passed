import fs from "fs";
import path from "path";
import readline from "readline";

class WriteService {
    write() {
        const readInterface = readline.createInterface({
            input: fs.createReadStream(
                path.join(__dirname, "../config/jsonLike.txt")
            ),
        });
        

        readInterface.on("line", function (line) {
            let spl = line.split('=');
            console.log(spl);
            const keys: string = spl[0];
            const value: string = spl[1];
        
            const tempObject: any = {};
            let container: any = tempObject;
            keys.split('.').map((k, i, values) => {
                container = (container[k] = (i == values.length - 1 ? value : {}))
            });
            const res = JSON.stringify(tempObject, null, ' ');
            console.log(res);
            fs.writeFileSync(path.join(__dirname, "../config/res.json"), res);
        }); 
    }
} 


export default new WriteService();
