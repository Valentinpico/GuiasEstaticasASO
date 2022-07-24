import { useRouter } from "next/router";
import Container from "../components/Container";
import { Data } from "../data/data";
import Image from "next/image";
import { useState, useEffect } from "react";

const Tareas = () => {
  const router = useRouter();
  const [guia, setGuias] = useState({});

  useEffect(() => {
    Data.map((e) => {
      if (e.titulo == router.query.guia) {
        setGuias(e);
      }
    });
  });

  return (
    <Container>
      <div className="contenedor">
        <h1>{router.query.guia}</h1>
        {guia.pasos?.map((e) => (
          <div key={e.img} className="container">
            <div className="card">
              <div className="card-body">{e.paso}</div>
            </div>
            <div className=" rounded card-img-top">
              <Image
                src={"/../public/img/"+ guia.carpeta + "/" + e.img + ".png"}
                width={500}
                height={500}
                layout="responsive"
                alt={"imagen de guia " + e.img}
              />
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .card-img-top {
          width: 60%;
          margin: auto;
          margin-bottom: 7%;
          margin-top: 10px;
        }
        .contenedor {
          background-color: rgb(245, 245, 245);
        }
      `}</style>
    </Container>
  );
};
export default Tareas;
