import React,{useState} from "react";
import { Parallax, Background } from "react-parallax";
import ReactPaginate from "react-paginate";
import "./jwellery.css";
import Card from "../components/Card/Card";
import Black from "../assets/images/black.jpg";
import { jewells,necklaces } from "../constants/data";


const Necklace = () => {
    const[pageNumber,setPageNumber]=useState(0);

    const jewellsPerPage=4;
    const pageVisited=pageNumber*jewellsPerPage;
    const pageCount=Math.ceil(jewells.length/jewellsPerPage);

    const changePage =({selected})=>{
         setPageNumber(selected)
    };

  return (
    <div>
      <Parallax bgImage={Black} strength={700}>
        <div className="content">
          <div className="aboutx">
            <h1>Necklaces</h1>
            <p>
            Elevate your neckline with our breathtaking necklace designs, meticulously crafted to radiate beauty and capture hearts.            </p>
          </div>
        </div>
      </Parallax>
      <br/>
      <section className="Collection top" id="Collection">
        <div className="c0">
        <div className="c">
         
            {jewells
            .slice(pageVisited,pageVisited+jewellsPerPage)
            .map((value, index) => {
              return (
                <div className="c1">
                <Card
                  key={index}
                  image={value.image}
                  title={value.title}
                  price={value.price}
                />
                </div>
              );
            })}

            <br/>
      
          </div>
          <br/>
          <div>
            <ReactPaginate 
              previousLabel={"previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationButtons"}
              previousLinkClassName={"previousButton"}
              nextLinkClassName={"nextButton"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
            </div>
            <br/>
    </div>
      </section>
    </div>
  );
};

export default Necklace;
