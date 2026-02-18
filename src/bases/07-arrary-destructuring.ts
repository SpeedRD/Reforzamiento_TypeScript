const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [p1, p2, p3] = dbz;

// Skip indexes
const { 2: char3 } = dbz; // Gets index 2 ('Trunks')

// Destructuring return values 
// We define the return type tuple: [string, function]
const useState = (value: string): [string, () => void] => {
    return [value, () => { console.log('State updated') }];
};

const [stateName, setName] = useState('Goku');
console.log(stateName);
setName();