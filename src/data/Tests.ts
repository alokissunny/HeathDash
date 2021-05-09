export const Tests = [
    ''
]

export function sampleTest() {
    let tests = [];
    for(let i = 0 ; i<1 ; i++) {
        tests.push('Test' + Math.random()*10000);
    }
    return tests;
}