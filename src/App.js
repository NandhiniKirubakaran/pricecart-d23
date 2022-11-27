import './App.css';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { width } from '@mui/system';

function App() {
  return (
    <div className="App">
    
 
  <CartList />
    </div>
  );
}

function CartList(){
  const values = [
    {
      top: "FREE",
      price: "$0",
      period: "/month",
      content: "Single User",
      content1: "5GB Storage",
      content2: "Unlimited Public Projects",
      content3: "Community Access",
      content4: "Unlimited Private Projects",
      content5: "Dedicated Phone Support",
      content6: "Free Subdomain",
      content7: "Monthly Status Reports",
    },
    {
      top: "PLUS",
    price: "$9",
    period: "/month",
    content: "5 Users",
    content1: "50GB Storage",
    content2: "Unlimited Public Projects",
    content3: "Community Access",
    content4: "Unlimited Private Projects",
    content5: "Dedicated Phone Support",
    content6: "Free Subdomain",
    content7: "Monthly Status Reports",
  },
  {
    top: "PRO",
  price: "$49",
  period: "/month",
  content: "Unlimited User",
  content1: "150GB Storage",
  content2: "Unlimited Public Projects",
  content3: "Community Access",
  content4: "Unlimited Private Projects",
  content5: "Dedicated Phone Support",
  content6: "Unlimited Free Subdomain",
  content7: "Monthly Status Reports",
}];

return(
  <div className='card-list'>
    
      {values.map((mv) => (
        <PriceCart value = {mv} />
      ))}

  </div>
)
}

//----------------------------------------
function PriceCart({ value }){

// const value = {
//   top: "FREE",
//   price: "$0",
//   period: "/month",
//   content: "Single User",
//   content1: "5GB Storage",
//   content2: "Unlimited Public Projects",
//   content3: "Community Access",
//   content4: "Unlimited Private Projects",
//   content5: "Dedicated Phone Support",
//   content6: "Free Subdomain",
//   content7: "Monthly Status Reports",
// };
  return(
  
    <div>
      <div className='card'>
      <div className="card-header">
      <p>{value.top}</p>
      <h1>{value.price}<span className='val'>{value.period}</span></h1>
      </div>
      <hr/>
      <div className="card-body">
        <p><CheckIcon/> {value.content}</p>
        <p><CheckIcon/> {value.content1}</p>
        <p><CheckIcon/> {value.content2}</p>
        <p><CheckIcon/> {value.content3}</p>
        <p><CloseIcon/> {value.content4}</p>
        <p><CloseIcon/> {value.content5}</p>
        <p><CloseIcon/> {value.content6}</p>
        <p><CloseIcon/> {value.content7}</p>
        
        <Button className="button" variant="contained">BUTTON</Button>
        
      </div>
    </div> 

    </div>
      
    
  );
}

export default App;
