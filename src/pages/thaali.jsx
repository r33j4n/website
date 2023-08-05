import React,{useState} from "react";
import { Parallax, Background } from "react-parallax";
import ReactPaginate from "react-paginate";
import "./jwellery.css";
import Card from "../components/Card/Card";
import Black from "../assets/images/black.jpg";
import { jewells,thaalis } from "../constants/data";


const Thaali = () => {
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
            <h1>Thaali</h1>
            <p>
            Discover the cultural significance and exquisite craftsmanship of our enchanting thaali collection, beautifully blending tradition with timeless elegance.            </p>
          </div>
        </div>
      </Parallax>
      <br/>
      <section className="Collection top" id="Collection">
        <div className="c0">
        <div className="c">
         
            {thaalis
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

export default Thaali;
