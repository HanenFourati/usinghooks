import {
    useState,
    useEffect
} from 'react';
export const UseInput = () => {
    const [value, setValue] = useState('');
    
    useEffect(() => {
        fetch('https://api.myjson.com/bins/1gm93h')
            .then((data) => data.json())
            .then((data) => setValue(data.defaultValue))
    }, []);
    
    return [value, setValue];
}
export default UseInput;