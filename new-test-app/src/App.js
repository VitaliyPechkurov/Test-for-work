import logo from './logo.svg';
import './App.css';

function App() {
  let data = 
  {"columns":
    [
    {"code":"Острів","name":"Острів","viewState":0,"isFileContent":false,"isFileName":false,"isPrintable":true,"hint":"","dataType":"Text"},
    {"code":"Локація","name":"Локація","viewState":0,"isFileContent":false,"isFileName":false,"isPrintable":true,"hint":"","dataType":"Text"},
    {"code":"Текст","name":"Текст","viewState":0,"isFileContent":false,"isFileName":false,"isPrintable":true,"hint":"","dataType":"Text"},
    {"code":"Дата","name":"Дата","viewState":0,"isFileContent":false,"isFileName":false,"isPrintable":true,"hint":"","dataType":"DateTime"},
    {"code":"Коментар","name":"Коментар","viewState":0,"isFileContent":false,"isFileName":false,"isPrintable":true,"hint":"","dataType":"Text"}
    ],
  "rows":
    [
    {"values":
              ["Труханов","Київ"," столиця та найбільше місто України, одне з найбільших і найстаріших міст Європи. Розташований у середній течії Дніпра, у північній Наддніпрянщині. Політичний, соціально-економічний, транспортний та освітньо-науковий центр країни. Окрема адміністративно-територіальна одиниця в складі України й адміністративний центр Київської області. Адміністративно до складу Київської області не входить. Місце розташування центральних органів влади України, іноземних місій, штаб-квартир більшості підприємств і громадських об'єднань, що працюють в Україні.","2020-12-12T00:00:00","Тестове"]}]}
    
  console.log(data);

  let names = [... new Set(data.columns.map(item=>item.name))];
  console.log(names);
  let val = [... new Set(data.rows.map(item=>item.values))];
  
  
  
  
  
  for(let i=0;i<names.length;i++)
  {
    
    for(let j=0;i<val.length;j++)
    {
     
    if(data.columns[i].dataType ==="DateTime")
    {
       return true;
    }
    return(
      <div className="Container">
        <div className="Text">
            <span className="TextColumn">{names[0]}</span><span className="TextRow">{val[0][0]}</span>
        </div>
        <div className="Text">
            <span className="TextColumn">{names[1]}</span><span className="TextRow">{val[0][1]}</span>
        </div>
        <div className="Text">
            <span className="TextColumn">{names[2]}</span><span className="TextException">{val[0][2]}</span>
        </div>
        <div className="Text">
            <span className="TextColumn">{names[3]}</span><span className="TextRow">{val[0][3]}</span>
        </div>
        <div className="Text">
            <span className="TextColumn">{names[4]}</span><span className="TextRow">{val[0][4]}</span>
        </div>
        
     </div>
     
    );
    
  }
}
  return (
    <div className="App">
      <header className="App-header">
     
      </header>
    </div>
  );
}

export default App;
