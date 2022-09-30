import {useState} from 'react'
import './App.css';
import QRCode from 'react-qr-code';
import QrLink from 'qrcode'

function App() {
  const[qrcode,setQrCode]=useState('')
  const[downQrcode,setDown]=useState('')


  const handleQrcode=(e)=>{
    setQrCode(e.target.value)
    downCode(e.target.value)
  }

  const downCode=(link_url)=>{
    QrLink.toDataURL(link_url,{
      width:600,
      margin:3
    },function(error,url){
      setDown(url)
    })
  }


  return (
    <div className='container'>
      
    <QRCode value={qrcode}/>

    <input type='text' placeholder='Digite seu link...'
    value={qrcode}
    onChange={(e)=>handleQrcode(e)}/>

    <a href={downQrcode} download={`qrcode.png`}>Baixar Qrcode</a>
    </div>
  );
}

export default App;
