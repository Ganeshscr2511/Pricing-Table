
import './App.css';
import { Pricing } from './Pricing';

function App() {
  const pricingList=[
    {
      name:"Free",
      price:"$0",
      type:[
        {
          name:"Single User",
          available:true
        },
        {
          name:"5GB Storage",
          available:true
        },
        {
          name:"Unlimited Public Projects",
          available:true
        },
        {
          name:"Community Access",
          available:true
        },
        {
          name:"Unlimited Private Projects",
          available:false
        },
        {
          name:"Dedicated Phone Support",
          available:false
        },
        {
          name:"Free Subdomain",
          available:false
        },
        {
          name:"Monthly Status Reports",
          available:false
        }
      ]
    },
    {
      name:"Plus",
      price:"$19",
      type:[
        {
          name:"Single User",
          available:true
        },
        {
          name:"5GB Storage",
          available:true
        },
        {
          name:"Unlimited Public Projects",
          available:true
        },
        {
          name:"Community Access",
          available:true
        },
        {
          name:"Unlimited Private Projects",
          available:true
        },
        {
          name:"Dedicated Phone Support",
          available:true
        },
        {
          name:"Free Subdomain",
          available:true
        },
        {
          name:"Monthly Status Reports",
          available:false
        }
      ]
    },
    {
      name:"Pro",
      price:"$49",
      type:[
        {
          name:"Single User",
          available:true
        },
        {
          name:"5GB Storage",
          available:true
        },
        {
          name:"Unlimited Public Projects",
          available:true
        },
        {
          name:"Community Access",
          available:true
        },
        {
          name:"Unlimited Private Projects",
          available:true
        },
        {
          name:"Dedicated Phone Support",
          available:true
        },
        {
          name:"Unlimited Free Subdomain",
          available:true
        },
        {
          name:"Monthly Status Reports",
          available:true
        }
      ]
    }
  ];
  

  return (
    <div className="App">
    {pricingList.map((price) => (
      <Pricing   name={price.name} price={price.price} type={price.type}/>
    ))}     
    </div>
  );
}

export default App;
