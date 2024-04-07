let name='Mohan';
function CheckEvenOrOdd(num){
  if (num% 2===0){
    return <div>Even</div>
  }
  else{
    return <div>Odd</div>
  }
}
function CheckAlphabet(char) {
  switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return<div>vowel</div>
      default:
        return<div>not vowel</div>
  }
}
 let num=4;
 const users=[
  {name:'Mohan',age: 25},
  {name:'Ram',age: 24},
  {name:'Rohit',age: 21},
 ]
function jsx() {
  return (
    <div>
      <h2>Hello {name}</h2>
      <div>
        {
          CheckEvenOrOdd(5)
        }
        {
          num%2===0
          ? <div>Even Number</div>
          : <div> Odd Number</div>
        }
        <h3>If Statement</h3>
        {
          num%2===0 &&<div>Even Number</div>
        }
        {
          num>0 &&<div>Odd Number</div>
        }
      </div>
      <h3>Loop</h3>
      {
        users.map((item, index)=>{
          return <div key={index}>
            {item.name} - {item.age}</div>
        })
      }
      <h3>switch</h3>
      {
        CheckAlphabet('a')
      }
    </div>
  );
}
export default jsx;
 export function Greet(){
    return <h1>hello world</h1>
 }