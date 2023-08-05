import React,{useState} from "react";
import { Parallax, Background } from "react-parallax";
import ReactPaginate from "react-paginate";
import "./jwellery.css";
import Card from "../components/Card/Card";
import Black from "../assets/images/black.jpg";
import { jewells } from "../constants/data";

const Jwellery = () => {
    const[pageNumber,setPageNumber]=useState(0);

    const jewellsPerPage=3;
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
            <h1>Rings</h1>
            <p>
              Discover timeless elegance and exquisite craftsmanship with our{" "}
              <br />
              stunning collection of rings, designed to add a touch of
              brilliance to every moment
            </p>
          </div>
        </div>
      </Parallax>
    
      <section className="Collection top" id="Collection">
          <h1>My Collections</h1>
        
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
    </div>
      </section>
    </div>
  );
};

export default Jwellery;
