import axios from "axios";
import React from "react";
class Subcategory extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        axios.get("https://akashsir.in/myapi/atecom1/api/api-subcategory-list.php")
        .then(res=>{
            console.log(res.data.sub_category_list);
            this.setState({data:res.data.sub_category_list})
        })
    }
    render(){
        let {data}=this.state
        return(
            <>
            <div class="container">
<div class="row product">

            {data.map((v,i)=>{
                return(
                <>
                <div class="col-md-4">
                <main class="container">
  <section class="card">
    <div class="product-image">
      <img src={v.sub_category_image} alt="OFF-white Red Edition" draggable="false"  />
    </div>
    <div class="product-info">
      <h2>{v.category_name}</h2>
      <p>{v.sub_category_name}</p>
      <div class="price">{v.sub_category_price}</div>
    </div>
    <div class="btn">
      <button class="buy-btn">Buy Now</button>
      <button class="fav">
        <svg class="svg" id="i-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
        </svg>
      </button>
    </div>
  </section>
  
</main>
</div> </>)
            })}
            </div>
</div>

    
            </>
        )
    }

}
export default Subcategory