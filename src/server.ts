import { Server } from 'http';
import app from './app';

const port = 3001;
async function main(){
    const server:Server = app.listen(port, () => {
        console.log(`Bike Service Server is running on port ${port}`);
    })
}
main()