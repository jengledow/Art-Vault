import dotenv from 'dotenv';

dotenv.config();

function getEnvVariable(key: string): string {
	if(process.env[key]){
		return process.env[key];
	} else {
		return '';
	}
}

export {
	getEnvVariable,
}