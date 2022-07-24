import React from "react";
import Container from "../components/Container";
import Image from "next/image"; 
const index = () => {
  return (
    <>
      <Container>
        <div className="fs-1 "> Guias Web</div>

        <div className="fs-2">Aplicacion de sistemas operativos</div>
        <div className="img">
          <Image
            src={"https://res.cloudinary.com/digbgoats/image/upload/v1658625840/portada_kfrnni.jpg"}
            width={800}
            height={400}
            alt={"imagen de guia"}
          />
        </div>
        <div className="fs-1">PICO PONCE KENIG VALENTIN</div>
      </Container>
      <style jsx>{`
        .img {
          padding-left:19%;
        }
        .fs-1,
        .fs-2 {
          text-align: center;
        }
      `}</style>
    </>
  );
};
export default index;
