import axios from "axios";
import React from "react";
class Category extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    axios.get("https://akashsir.in/myapi/atecom1/api/api-view-category.php")
      .then(res => {
        console.log(res.data.category_list);
        this.setState({ data: res.data.category_list })
      })
  }
  render() {
    let { data } = this.state
    return (
      <>

        <div class="container">
          <div class="row product">
            {data.map((v, i) => {
              return (
                <>
                  <div class="col-md-4">
                    <section class="articles">
                      <article>
                        <div class="article-wrapper">
                          <figure>
                            <img src={v.category_image} alt="" />
                          </figure>
                          <div class="article-body">
                            <h2>{v.category_name}</h2>
                          </div>
                        </div>
                      </article>
                    </section>

                  </div> </>)
            })}
          </div>
        </div>

      </>
    )
  }

}
export default Category