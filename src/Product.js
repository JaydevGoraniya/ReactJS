import axios from "axios";
import React from "react";
class Product extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
        }
    }
    componentDidMount(){
        axios.get("https://akashsir.in/myapi/atecom1/api/api-view-product.php")
        .then(res=>{
            console.log(res.data.product_list);
            this.setState({
                data:res.data.product_list,
            })
        })
    }
    render(){
        let {data}=this.state
        return(
            <>
            <table border={1}>
            <thead>
                <tr>
                    <th> Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Image </th>
                    <th>Quantity</th>
                    <th>Sun Name</th>
                    <th>Images</th>
                </tr>
            </thead>
            {data.map((v,i)=>{
                return(
                <tr>
                   <td> {v.product_id}</td>
                    <td>{v.product_name}</td>
                    <td>{v.product_price}</td>
                    <td><img src={v.product_image} width={100} /> </td>
                    <td>{v.product_quantity}</td>
                    <td>{v.category.sub_category_name}</td>
                    <td>{v.images.map((v1)=>{ return (<img src={v1} width={50}/>) })}</td>
                </tr>)
            })}
            </table>
            </>
        )
    }

}
export default Product;