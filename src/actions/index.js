import types from './types';
import axios from 'axios';

export async function getJobId(){
    const resp = axios.get();

    return {
        type: types.GET_JOB_ID,
        payload:resp
    }
}
