import React, {  useLayoutEffect, useState } from "react";
import "./Datos.css";
import axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Table from "./Table";
import DialogTitle from "@mui/material/DialogTitle";

export const Datos = () => {
  const [Dispositivos, setDispositivos] = useState(["PapiNodo"]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [cloro, setCloro] = useState([
    {
      value: 0,
    },
  ]);
  const [ph, setPh] = useState([
    {
      value: 0,
    },
  ]);
  const [turbidez, setTurbidez] = useState([
    {
      value: 0,
    },
  ]);
  useLayoutEffect(() => {
    const fetchData = async () => {
      const headers = {
        "X-Auth-Token": "BBFF-8XOxNOBcvGFpmt5y7jfv1JLvaNiO0I",
      };
      const res = await axios.get(
        "http://industrial.api.ubidots.com/api/v1.6/devices/papinodo/cloro/values",
        { headers }
      );
      const res2 = await axios.get(
        "http://industrial.api.ubidots.com/api/v1.6/devices/papinodo/ph/values",
        { headers }
      );
      const res3 = await axios.get(
        "http://industrial.api.ubidots.com/api/v1.6/devices/papinodo/turbidez/values",
        { headers }
      );
      setCloro(res.data.results);
      setPh(res2.data.results);
      setTurbidez(res3.data.results);
    };
    fetchData();
  }, []);
  console.log(cloro);
  return (
    <div className="CuerpoDatos">
      <header className="header">
        <h1 className="TituloDatos">Dispositivos</h1>
      </header>
      <div className="BodyDatos">
        {Dispositivos.map((Dato) => (
          <div className="Dispositivo">
            <div className="HeaderDato">
              <h2 className="TituloHeaderDato">Dispositivo {Dato}</h2>
              <a className="HistorialButton" onClick={handleClickOpen}>
                Ver Historial
              </a>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  Dispositivo {Dato}
                </DialogTitle>
                <DialogContent>
                  <Table ph={ph} turbidez={turbidez} cloro={cloro} />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cerrar</Button>
                </DialogActions>
              </Dialog>
            </div>
            <hr className="rounded" />
            <h3 className="TituloDatoBody">Datos actuales </h3>
            <div className="BodyDato">
              <p className="Dato">Cloro: {cloro[0].value} mg/l</p>
              <p className="Dato">PH: {ph[0].value} PH</p>
              <p className="Dato">Turbidez: {turbidez[0].value} NTU</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
