import { OPENAI_KEY } from './constant'
import { OpenAI } from 'langchain/llms/openai'

const openai = new OpenAI({
    apiKey: OPENAI_KEY, 
});


export default openai;